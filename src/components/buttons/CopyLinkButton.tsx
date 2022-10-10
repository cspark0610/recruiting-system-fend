import '@/assets/scss/CopyLink.scss'

import { useEffect, useState } from 'react'

type CopyLinkButtonProps = {
	linkTo: string
	className: string
	icon?: boolean
}

const CopyLinkButton = ({
	linkTo,
	className,
	icon,
}: CopyLinkButtonProps) => {
	const [copied, setCopied] = useState<boolean>(false)
	const handleCopyTextToClipboard = async (
		text: string,
	) => {
		if (
			navigator &&
			navigator.clipboard &&
			navigator.clipboard.writeText
		) {
			setCopied(true)
			return navigator.clipboard.writeText(text)
		}
		return Promise.reject(
			'The Clipboard API is not available.',
		)
	}

	useEffect(() => {
		const timer = setTimeout(() => setCopied(false), 2000)
		return () => clearTimeout(timer)
	}, [copied])

	const renderCopyIcon = () => (
		<img src={'/images/linkIcon.svg'} alt="Copy Icon" />
	)
	const renderCopyText = () =>
		copied ? 'Copied!' : 'Copy Link'
	const classesName = `relative ${className}  ${
		copied ? 'copied copied__active' : ' copied'
	}`
	return (
		<button
			onClick={() => handleCopyTextToClipboard(linkTo)}
			className={classesName}
		>
			{icon ? renderCopyIcon() : renderCopyText()}
		</button>
	)
}

export default CopyLinkButton
