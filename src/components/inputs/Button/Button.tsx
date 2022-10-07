const Button = ({
	children,
	className,
	...rest
}: Button) => {
	return (
		<button
			className={` ${className}  bg-[#00ADEF] hover:bg-[#00ADEFf0] text-white font-bold py-2 tablet:py-3 px-10 mobile:rounded-[10px] laptop:rounded-2xl `}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
