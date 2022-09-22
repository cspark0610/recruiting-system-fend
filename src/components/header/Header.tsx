interface Props {
	width: string;
	height: string;
	isInThanks?: boolean;
}

const Header: React.FC<Props> = ({ width, height, isInThanks }) => {
	return (
		<div className="relative">
			<div className={"max-w-7xl mx-auto flex justify-center items-center py-7"}>
				<div className={`${width} ${height}`}>
					<img
						className="w-full laptop:mt-0 mobile:mt-10 bg-white"
						src="https://fulltimeforce.com/wp-content/themes/ftf-2020/images/fulltimeforce-logo.svg"
						alt="Fulltimeforce logo"
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
