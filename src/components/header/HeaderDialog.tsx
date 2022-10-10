import { useSelector } from 'react-redux'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { State } from '@/redux/store/store'
import Dropdown from '../inputs/Dropdown'
import {
	getDetailHeaderText,
	getHeaderTopBorderColor,
	getHeaderTopBorderColorExpert,
} from '@/utils/candidates'
import { UseGetPostulationById } from '@/hooks/useGetPostulationById'
import { IPostulation } from '@/redux/candidates/types/data'

interface Props {
	isClose: any
	color: string
	postulationId: string
	shouldRenderDropdown?: boolean
}

const HeaderDialog = ({
	isClose,
	color,
	postulationId,
	shouldRenderDropdown,
}: Props) => {
	const _postulation = {} as IPostulation
	const detail = useSelector(
		(state: State) => state.info.detail,
	)
	const { postulation } = UseGetPostulationById(
		detail,
		postulationId,
	)
	const postulationSelectorResult = useSelector(
		(state: State) => state.info.postulation,
	)
	if (shouldRenderDropdown) {
		Object.assign(_postulation, postulation)
	} else {
		Object.assign(_postulation, postulationSelectorResult)
	}

	let headerTopBorderColor = ''

	if (!shouldRenderDropdown) {
		headerTopBorderColor = getHeaderTopBorderColorExpert(
			detail.employment_status,
		)!
	} else {
		headerTopBorderColor = getHeaderTopBorderColor(
			_postulation.main_status,
			_postulation.secondary_status,
		)!
	}
	const headerMainText = getDetailHeaderText(
		_postulation.main_status,
	)

	return (
		<h4 className={headerTopBorderColor ?? color}>
			<div className="flex justify-center relative">
				<span className="text-white text-[15px] font-semibold font-raleway uppercase py-2">
					{headerMainText}{' '}
					{_postulation.position?.title ?? 'N/A'}
				</span>

				{shouldRenderDropdown && (
					<>
						<Dropdown postulationId={postulationId} />
					</>
				)}
				<button
					className="absolute top-[7px] right-[15px]"
					onClick={isClose}
				>
					<IoCloseCircleOutline className="text-white w-[24px] h-[24px]" />
				</button>
			</div>
		</h4>
	)
}

export default HeaderDialog
