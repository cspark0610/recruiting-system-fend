import { BsFillRecordFill } from "react-icons/bs";

interface Props {
  onClick(): void;
  classes?: string;
}

const Start: React.FC<Props> = ({ onClick, classes }) => {
  return (
    <div className={`${classes} mt-5 font-raleway`}>
      <button
        className="cursor-pointer rounded-2xl bg-white text-cyan-color font-bold text-sm py-3 px-7 laptop:w-[145px] laptop:h-[54px] shadow-lg border border-cyan-color mt-5"
        onClick={onClick}
      >
        <div className="flex items-center justify-between">
          Record &nbsp;{" "}
          <BsFillRecordFill className="text-red-color w-[20px] h-[20px]" />
        </div>
      </button>
    </div>
  );
};

export default Start;
