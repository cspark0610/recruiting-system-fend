import { BsFillRecordFill } from "react-icons/bs";

interface Props {
  onClick(): void;
  classes?: string;
}

const Start: React.FC<Props> = ({ onClick, classes }) => {
  return (
    <div className={`${classes} mt-5`}>
      <button
        className="cursor-pointer rounded-2xl bg-white text-cyan-color font-bold text-sm py-3 px-9 shadow-lg border border-cyan-color mt-5"
        onClick={onClick}
      >
        <div className="flex items-center">
          Record &nbsp; <BsFillRecordFill className="text-red-color w-5 h-5" />
        </div>
      </button>
    </div>
  );
};

export default Start;
