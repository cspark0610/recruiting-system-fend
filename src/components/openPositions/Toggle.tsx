import { ClearSuccess, SetIsActive } from '@/redux/positions/actions/PositionsActions'
import { AppDispatch, State } from '@/redux/store/store'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

type ToggleProps = {
	inactive: boolean
	_id: string
	isToggled: boolean
	setIsToggled: (isToggled: boolean) => void
}

export default function Toggle({ inactive, _id, isToggled, setIsToggled }: ToggleProps) {
	const dispatch = useDispatch<AppDispatch>()

	const updating = useSelector((state: State) => state.positions.updating)

	const handleToggle = () => {
		setIsToggled(!isToggled)
		dispatch(SetIsActive(_id))

		setTimeout(() => {
			dispatch(ClearSuccess(dispatch))
		}, 3000)
	}

	return (
		<label className="relative w-[4rem] h-[1.80rem] rounded-full bg-[#F0F0F4] mt-2 hover:cursor-pointer">
			<input
				type="checkbox"
				className="opacity-0 w-0 h-0 cursor-pointer"
				checked={isToggled}
				onChange={handleToggle}
			/>
			{inactive ? (
				<span
					className={`before:absolute before:top-0.5 before:left-[4px] before:bottom-[4px] before:content-[""] before:w-[1.5rem] before:h-[1.5rem] cursor-pointer before:transition ease-in-out duration-1100 before:rounded-full ${
						isToggled && !updating
							? ' before:bg-[#00ADEF] before:transform before:translate-x-8'
							: ' before:bg-[#475564] before:transform before:translate-x-0'
					}`}
				/>
			) : (
				<span
					className={`before:absolute before:top-0.5 before:left-[4px] before:bottom-[4px] before:content-[''] before:w-[1.5rem] before:h-[1.5rem]  cursor-pointer before:transition ease-in-out duration-1100 before:rounded-full before:transform ${
						isToggled && !updating
							? 'before:bg-[#475564] before:translate-x-0 '
							: 'before:bg-[#00ADEF] before:translate-x-8'
					}
					`}
				/>
			)}
		</label>
	)
}
