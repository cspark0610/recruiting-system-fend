type CollapsableProps = {
	info: {
		main_text: string
		status_info: {
			id: number
			text: string
			color: string
		}[]
	}
}

export default function Collapsable({ info }: CollapsableProps) {
	return (
		<div className="flex flex-col items-center justify-center">
			<p className="text-center text-sm font-raleway">{info.main_text}</p>
			<div className="pt-2">
				{info.status_info.map(status => (
					<div key={status.id} className="flex text-xs pb-2 pl-2">
						<div>
							<div className={`mt-[0.1rem] w-3 h-3 rounded-xl ${status.color}`}></div>
						</div>
						<div className="w-full">
							<p className="ml-2 font-raleway">{status.text}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
