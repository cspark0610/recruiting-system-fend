import React, { useEffect, useState } from "react";
import BackBtn from "../../components/buttons/BackBtn";
import WebCam from "../../components/iframes/WebCam";
import ProgressBar from "../../components/extras/ProgressBar";
import StepO from "../../components/sections/StepO";

const WebCamTask: React.FC = () => {
  const [videoKeys, setVideoKeys] = useState();

  const getKeys = async () => {
    try {
      const keys = await fetch(`/video-key`);
      const keysFormatted = await keys.json();
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div className="container mx-auto grid place-items-center h-screen bg-clouds bg-no-repeat bg-cover bg-center">
      <img
        src="https://fulltimeforce.com/wp-content/themes/ftf-2020/images/fulltimeforce-logo.svg"
        alt="fulltimeforce-logo"
        className="w-28 -mb-32"
      />
      <BackBtn link="/details" />
      <div className="grid grid-cols-2 gap-40 -mt-20">
        <div>
          {<WebCam keys={videoKeys} />}
          <ul className="list-disc">
            <li className="font-raleway text-primary-color text-xl my-2 ml-5">
              Remember that the duration
              <br /> of the video is <b>2 minutes</b>
            </li>
          </ul>
        </div>
        <div className="w-96">
          <ProgressBar />
          <hr className="w-96 my-6"></hr>
          <StepO />
        </div>
      </div>
    </div>
  );
};

export default WebCamTask;
