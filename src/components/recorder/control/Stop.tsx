import { BsStopFill } from "react-icons/bs";

interface Props {
  onClick(): void;
}

const Stop: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="mt-5">
      <button
        className="cursor-pointer rounded-2xl bg-white text-gray-color font-bold text-sm py-3 px-9 shadow-lg border border-gray-color mt-5"
        onClick={onClick}
      >
        <div className="flex items-center">
          Stop &nbsp; <BsStopFill className="text-gray-color w-5 h-5" />
        </div>
      </button>
    </div>
  );
};

export default Stop;
