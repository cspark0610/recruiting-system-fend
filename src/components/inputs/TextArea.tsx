import { useTranslation } from 'react-i18next'

interface Props {
	id: string
	value: string
	setValue: any
}

const TextArea: React.FC<Props> = ({
	id,
	value,
	setValue,
}) => {
	/*  */
	const { t } = useTranslation()

	const onChange = (evt: any) => {
		setValue(evt.target.value)
	}

	return (
		<div className="relative w-full p-3">
			<div className="mb-2">
				<label className="text-sm font-normal text-gray-color font-raleway mobile:text-sm laptop:text-sm desktop:text-base">
					{t('text_area.label')} <br />
				</label>
			</div>
			<div>
				<textarea
					className={`${
						value && '!border-cyan-color bg-light-blue'
					} resize-none bg-light-color border-light-color border focus:bg-white focus:outline-none focus:border-cyan-color rounded-2xl min-w-full mobile:w-[335px] mobile:h-[157px] laptop:w-[892px] laptop:h-[94px] py-3 px-4 leading-tight font-raleway text-gray-color h-28 placeholder:font-light placeholder:text-xs`}
					id={id}
					maxLength={280}
					value={value}
					placeholder="Type here"
					onChange={onChange}
				/>
			</div>
		</div>
	)
}

export default TextArea
