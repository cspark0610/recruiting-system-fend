import React from "react";
import { FaPause, FaPlay } from "react-icons/fa";

const ControlBtn: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-8 mt-4 px-3">
      <button className="cursor-pointer bg-transparent rounded-lg hover:bg-primary-color text-primary-color font-semibold hover:text-white px-4 h-12 border border-primary-color hover:border-transparent">
        <div className="flex flex-row items-center justify-center">
          Stop &nbsp;&nbsp; <FaPause />
        </div>
      </button>
      <button className="cursor-pointer bg-transparent rounded-lg hover:bg-font-color text-font-color font-semibold hover:text-white px-4 h-12 border border-font-color hover:border-transparent">
        <div className="flex flex-row items-center justify-center">
          Resume &nbsp;&nbsp; <FaPlay />
        </div>
      </button>
    </div>
  );
};

export default ControlBtn;
