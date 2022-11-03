const Divider = ({ className = '', text = '' }: Divider) => {
	return (
		<div className={`${className} flex items-center`}>
			<span className="block text-[#C4C4C4] text-[10px] mr-3 font-raleway">{text}</span>
			<div className=" flex-grow h-[1px] bg-[#C4C4C4]"></div>
		</div>
	)
}

export default Divider
