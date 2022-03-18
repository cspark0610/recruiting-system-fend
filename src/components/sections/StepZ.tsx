import React from "react";
import BlueBtn from "../buttons/BlueBtn";

const StepZ: React.FC = () => {
  return (
    <div>
      <span className="font-raleway text-primary-color text-xl font-semibold">
        Remember that to record
        <br /> of videos you need to
      </span>
      <ul className="font-raleway text-font-color text-sm list-disc my-4 mr-10 p-3">
        <li className="mb-2.5">
          Make sure you have a stable internet connection.
        </li>
        <li className="mb-2.5">
          Remember that the time for each recording is 2 minutes maximum.
        </li>
        <li className="mb-2.5">
          Feel comfortable and free to express yourself as you wish.
        </li>
        <li className="mb-2.5">
          the Questions will be shown ones you start each video.
        </li>
      </ul>
      <div className="grid place-content-start -mt-8">
        <BlueBtn name="Next" link="FirstTask" />
      </div>
    </div>
  );
};

export default StepZ;
