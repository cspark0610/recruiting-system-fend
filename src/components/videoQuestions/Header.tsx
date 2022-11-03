import { HiPlusCircle } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { NEW_VIDEOQUESTION } from '../../config/routes/paths'
import { headerVideoQuestions } from './types'

function Header({ questionarySelected, position }: headerVideoQuestions) {
	const navigate = useNavigate()
	return (
		<div className="flex justify-between w-full bg-[#FAFAFA] border-b-2 border-[#E9E9E9] p-[40px] pl-[80px] items-center mt-10">
			{questionarySelected !== null ? (
				<div>
					<p className="text-sm  text-[#00ADEF] ">Active</p>
					<h2 className="text-lg font-bold text-[#475564]">{questionarySelected.name}</h2>
				</div>
			) : (
				<span className="text-sm font-raleway">
					*There’s no questions created for this position yet
				</span>
			)}

			<button
				className="flex bg-[#00ADEF] text-white text-md font-raleway font-semibold rounded-lg px-5 py-2"
				onClick={() => {
					navigate(`/admin/dashboard/open-positions/${position._id}/video-questions/new/`)
				}}
			>
				Create New <HiPlusCircle className="ml-3 text-2xl" />
			</button>
		</div>
	)
}

export default Header
