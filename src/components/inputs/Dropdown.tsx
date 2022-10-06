import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { AppDispatch, State } from "../../redux/store/store";
import Apply from "../buttons/Apply";
import { UseGetPostulationById } from "../../hooks/useGetPostulationById";
import { ICandidate } from "../../redux/candidates/types/data";
import { AddNewPostulationToCandidate } from "../../redux/candidates/actions/CandidateAction";
import { IPosition } from "../../redux/positions/types/data";
// import { createBrowserHistory } from "history";

interface Props {
	postulationId: string;
}

const Dropdown: React.FC<Props> = ({ postulationId }) => {
	/*  */
	const [position, setPosition] = useState<Array<string>>([]);
	const [showDropdown, setShowDropdown] = useState<boolean>(false);
	const dispatch = useDispatch<AppDispatch>();
	// const history = createBrowserHistory();

	const positions: IPosition[] = useSelector(
		(state: State) => state.positions.data.docs,
	);
	const detail = useSelector((state: State) => state.info.detail) as ICandidate;
	const { postulation } = UseGetPostulationById(detail, postulationId);

	const positionsFiltered = positions.filter((position) => {
		return detail.postulations?.every(
			(postulation) => position?.title !== postulation.position?.title,
		);
	});

	const handleActionDispatch = () => {
		if (position.length === 0) return;

		dispatch(
			AddNewPostulationToCandidate(detail._id!, {
				_id: position.pop(),
				linkedin: postulation.linkedin ?? "",
				portfolio: postulation.portfolio ?? "",
			}),
		);
		setPosition([""]);
	};

	const handlePositionCaptureCheck = (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		if (e.target.checked) {
			setPosition([...position, e.target.value]);
		} else {
			setPosition([...position.filter((item) => item !== e.target.value)]);
		}
	};

	return (
		<>
			<div className="relative inline-block text-left">
				<button
					className="inline-flex justify-center w-full px-4 py-2 focus:outline-none"
					onClick={() => setShowDropdown(!showDropdown)}
				>
					<IoIosArrowDropdownCircle className="w-5 h-5 text-white" />
				</button>
				<div
					className={`${
						showDropdown ? "block" : "hidden"
					}  absolute z-50 laptop:left-0 mobile:right-0 mobile:w-52 laptop:w-60 mt-1 mobile:mr-5 laptop:ml-5 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
				>
					<div className="px-1 py-1">
						<div className="-mb-2 mt-2">
							<span className="ml-2 font-raleway font-semibold text-gray-color mobile:text-xs laptop:text-sm">
								Recommed for other position:
							</span>
						</div>
						{positionsFiltered.map(({ _id, title }) => (
							<div key={_id}>
								<div className="grid border-b-2 border-light-color w-full mt-6">
									<div className="flex-row-reverse items-center pl-2 pr-4">
										<input
											id={_id}
											className="ml-2 mr-2 focus:outline-none"
											type="checkbox"
											name={title}
											checked={position.indexOf(_id!) !== -1 ? true : false}
											value={_id}
											onChange={handlePositionCaptureCheck}
										/>
										<label
											className="w-full font-raleway font-light mobile:text-xs laptop:text-[15px]"
											htmlFor={_id}
										>
											<span className="text-gray-color">{title}</span>
										</label>
									</div>
								</div>
							</div>
						))}
						<Apply onClick={handleActionDispatch} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Dropdown;
