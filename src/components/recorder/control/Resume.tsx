import { BsFillRecord2Fill } from "react-icons/bs";

interface Props {
  onClick(): void;
}

const Resume: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="mt-5 font-raleway">
      <button
        className="cursor-pointer rounded-2xl bg-white text-cyan-color font-bold text-sm py-3 px-7 laptop:w-[145px] laptop:h-[54px] shadow-lg border border-cyan-color mt-5"
        onClick={onClick}
      >
        <div className="flex items-center justify-between">
          Resume &nbsp;{" "}
          <BsFillRecord2Fill className="text-red-color w-[20px] h-[20px]" />
        </div>
      </button>
    </div>
  );
};

export default Resume;
