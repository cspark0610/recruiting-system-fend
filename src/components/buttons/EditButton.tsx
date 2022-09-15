type EditButtonProps = {
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	children: React.ReactNode;
	className: string;
};

const EditButton = ({ onClick, children, className }: EditButtonProps) => {
	return (
		<button onClick={onClick} className={className}>
			{children}
		</button>
	);
};

export default EditButton;
