interface Props {
	time: { minute: number; second: number }
}

const CounterDown: React.FC<Props> = ({
	time: { minute, second },
}) => {
	return (
		<div className="relative">
			<div className="absolute top-5 left-5 z-10 text-white font-raleway">
				<span>{minute >= 10 ? minute : '0' + minute}</span>
				&nbsp;:&nbsp;
				<span>{second >= 10 ? second : '0' + second}</span>
			</div>
		</div>
	)
}

export default CounterDown
