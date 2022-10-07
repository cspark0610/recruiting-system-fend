type ApplyProps = {
	onClick: (
		event: React.MouseEvent<HTMLButtonElement>,
	) => void
}

export default function Apply({ onClick }: ApplyProps) {
	return (
		<button
			className="ml-2 mb-4 mt-2 p-2 rounded-md font-semibold font-raleway transition ease duration-300 hover:bg-[#475564] hover:text-white"
			onClick={onClick}
		>
			Apply
		</button>
	)
}
