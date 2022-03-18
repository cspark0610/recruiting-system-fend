import React from "react";
import { FaPlay } from "react-icons/fa";
import "../../assets/scss/ProgressBar.scss";
import RowNumber from "../extras/RowNumber";

const VideoSection: React.FC = () => {
  return (
    <div className="grid grid-cols-2 place-items-center gap-40 h-96">
      <div className="w-96">
        <div className="bg-color-light h-64 w-full flex items-center justify-center">
          <div className="cursor-pointer">
            <FaPlay className="text-primary-color" />
          </div>
        </div>
      </div>
      <div className="font-raleway text-font-color text-justify text-xs">
        <h2 className="font-semibold text-lg">Questions</h2>
        <div className="flex flex-row">
          <div>
            <RowNumber />
          </div>
          <div>
            <ol>
              <li className="py-4">Tell us about yourself</li>
              <li className="py-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry?
              </li>
              <li className="py-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry?
              </li>
              <li className="py-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry?
              </li>
              <li className="py-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry?
              </li>
              <li className="py-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry?
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
