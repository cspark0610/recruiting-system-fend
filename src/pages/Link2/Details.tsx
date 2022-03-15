import React from "react";
import Title from "../../components/title/Title";
import Video from "../../components/iframes/Video";
import BackBtn from "../../components/buttons/BackBtn";
import BlueBtn from "../../components/buttons/BlueBtn";
import ProgressBar from "../../components/bar/ProgressBar";

const Details: React.FC = () => {
  return (
    <div className="container mx-auto grid place-items-center h-screen bg-clouds bg-no-repeat bg-cover bg-center">
      <Title link="./details" />
      <BackBtn />
      <div className="grid grid-cols-2 gap-40 -mt-10">
        <Video
          url="https://www.youtube.com/watch?v=lWQ69WX7-hA"
          controls={true}
        />
        <div className="w-96">
          <ProgressBar />
          <hr className="w-96 my-6"></hr>
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
            <BlueBtn name="Next" link="Task" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
