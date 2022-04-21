import { AiOutlinePause } from "react-icons/ai";

interface Props {
  onClick(): void;
}

const Pause: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="mt-5 font-raleway">
      <button
        className="cursor-pointer rounded-2xl bg-white text-gray-color font-bold text-sm py-3 px-7 laptop:w-[145px] laptop:h-[54px] shadow-lg border border-gray-color mt-5"
        onClick={onClick}
      >
        <div className="flex items-center justify-between">
          Pause &nbsp;{" "}
          <AiOutlinePause className="text-gray-color w-[20px] h-[20px]" />
        </div>
      </button>
    </div>
  );
};

export default Pause;
