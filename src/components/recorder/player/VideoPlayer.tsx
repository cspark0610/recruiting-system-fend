import { BsPlay } from "react-icons/bs";
import { MdRestartAlt } from "react-icons/md";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const VideoPlayer = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-color to-light-color border-light-color rounded-2xl laptop:w-[400px] laptop:h-[320px]">
      {/* QUESTION */}
      <div className="absolute top-[10px] left-[25px]">
        <span className="font-raleway text-white text-[15px]">
          <span className="font-bold text-[20px]">1</span>&nbsp; Tell me about
          yourself.
        </span>
      </div>

      {/* BUTTON TO REMAKE VIDEO */}
      <div className="absolute top-[10px] right-[20px]">
        <button className="font-raleway text-white text-[12px] w-[76px] h-[21px] border border-white bg-transparent rounded-[5px] px-1">
          <div className="flex items-center justify-between">
            Remake &nbsp;{" "}
            <MdRestartAlt className="text-white w-[11px] h-[11px]" />
          </div>
        </button>
      </div>

      {/* BUTTONS TO NEXT VIDEO */}
      <div className="relative">
        <button className="absolute top-[135px] left-[-25px]">
          <RiArrowLeftSLine className="text-gray-color w-[20px] h-[20px]" />
        </button>
        <button className="absolute top-[135px] right-[-25px]">
          <RiArrowRightSLine className="text-gray-color w-[20px] h-[20px]" />
        </button>
      </div>

      {/* BUTTON PLAY */}
      <div className="absolute top-[135px] left-[175px]">
        <button className="font-raleway text-gray-color text-xs">
          <BsPlay className="w-[41px] h-[45px] text-white" />
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
