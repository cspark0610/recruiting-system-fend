import { IoCloseCircleOutline } from "react-icons/io5";
import Dropdown from "../inputs/Dropdown";

interface Props {
  color: string;
  isClose: any;
}

const HeaderDialog: React.FC<Props> = ({ color, isClose }) => {
  return (
    <h4 className={`${color}`}>
      <div className="flex justify-center relative">
        <span className="text-white text-[15px] font-semibold font-raleway uppercase py-2">
          Chosen for diseño uxui
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
