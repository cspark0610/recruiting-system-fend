import '@/assets/scss/ProgressVideoBar.scss'

interface Props {
	value: number
}

const ProgressVideoBar = ({ value }: Props) => {
	return (
		<div className="absolute top-[282px] z-10">
			<progress
				id="interview"
				max="120"
				value={value}
			></progress>
		</div>
	)
}

export default ProgressVideoBar
