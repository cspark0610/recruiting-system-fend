import { useSelector } from "react-redux";
import { IoCloseCircleOutline } from "react-icons/io5";
import { State } from "../../redux/store/store";
import Dropdown from "../inputs/Dropdown";
import { getDetailHeaderText, getHeaderTopBorderColor } from "../../utils/candidates";
import { IPostulation } from "../../redux/candidates/types/data";

interface Props {
	isClose: any;
	color: string;
	postulationId: string;
}

const HeaderDialog: React.FC<Props> = ({ isClose, color, postulationId }) => {
	const detail = useSelector((state: State) => state.info.detail);
	const postulation = {} as IPostulation;
	const found: IPostulation =
		detail.postulations.length &&
		detail.postulations.find((p: IPostulation) => {
			return p._id === postulationId;
		});
	if (found) Object.assign(postulation, found);

	const headerTopBorderColor = getHeaderTopBorderColor(
		postulation.main_status,
		postulation.secondary_status
	);
	const headerMainText = getDetailHeaderText(postulation.main_status);

	return (
		<h4 className={headerTopBorderColor ?? color}>
			<div className="flex justify-center relative">
				<span className="text-white text-[15px] font-semibold font-raleway uppercase py-2">
					{headerMainText} {postulation ? postulation.position?.title : "N/A"}
				</span>
				<Dropdown />
				<button className="absolute top-[7px] right-[15px]" onClick={isClose}>
					<IoCloseCircleOutline className="text-white w-[24px] h-[24px]" />
				</button>
			</div>
		</h4>
	);
};

export default HeaderDialog;
