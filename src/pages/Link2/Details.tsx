import React, { useEffect, useState } from "react";
import Title from "../../components/title/Title";
import WebCam from "../../components/iframes/WebCam";
import BackBtn from "../../components/buttons/BackBtn";
import ProgressBar from "../../components/extras/ProgressBar";
import StepZ from "../../components/sections/StepZ";

const Details: React.FC = () => {
  const [videoKeys, setVideoKeys] = useState(undefined);

  const getKeys = async () => {
    try {
      const keys = await fetch(`/video-key`);
      const keysFormatted = await keys.json();

      setVideoKeys(keysFormatted);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getKeys();
  }, []);

  return (
    <div className="container mx-auto grid place-items-center h-screen bg-clouds bg-no-repeat bg-cover bg-center">
      <Title />
      <BackBtn link="/survey" />
      <div className="grid grid-cols-2 gap-40 -mt-10">
        <WebCam keys={videoKeys} />
        <div className="w-96">
          <ProgressBar />
          <hr className="w-96 my-6"></hr>
          <StepZ />
        </div>
      </div>
    </div>
  );
};

export default Details;
