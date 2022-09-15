import { useState, useEffect } from "react";

type CopyLinkButtonProps = {
	text: string;
	className: string;
};

const CopyLinkButton = ({ text, className }: CopyLinkButtonProps) => {
	const [copied, setCopied] = useState<boolean>(false);
	const handleCopyTextToClipboard = async (text: string) => {
		if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
			setCopied(true);
			return navigator.clipboard.writeText(text);
		}
		return Promise.reject("The Clipboard API is not available.");
	};

	useEffect(() => {
		const timer = setTimeout(() => setCopied(false), 2000);
		return () => clearTimeout(timer);
	}, [copied]);

	const renderCopyText = () => (copied ? "Copied!" : "Copy Link");

	return (
		<button onClick={() => handleCopyTextToClipboard(text)} className={className}>
			{renderCopyText()}
		</button>
	);
};

export default CopyLinkButton;
