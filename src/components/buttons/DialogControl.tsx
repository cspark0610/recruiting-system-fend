import { FaTrash } from "react-icons/fa";

interface Props {
  classes: string;
  onClick: any;
  title: string;
  needIcon: boolean;
}

const DialogControl: React.FC<Props> = ({
  classes,
  onClick,
  title,
  needIcon,
}) => {
  return (
    <button
      className={`${classes} text-white font-medium cursor-pointer rounded-[5px] text-sm py-1 px-1 w-[96px] h-[30px] mt-[22px]`}
      onClick={onClick}
    >
      <p className="flex items-center justify-center">
        <FaTrash className={`${needIcon ? "block mr-2" : "hidden"}`} /> {title}
      </p>
    </button>
  );
};

export default DialogControl;
