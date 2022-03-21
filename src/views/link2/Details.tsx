import React from "react";
import BackButton from "../../components/button/BackButton";
import NextButton from "../../components/button/NextButton";
import Logo from "../../components/logo/Logo";
import VideoStream from "../../components/video/VideoStream";

const Details: React.FC = () => {
  return (
    <div className="bg-cloud bg-no-repeat bg-center">
      <section className="container mx-auto h-screen grid place-items-center">
        <Logo />
        <BackButton link="/requiredsteps" />
        <section className="grid grid-cols-2 gap-10 place-items-center h-96 -mt-10">
          <div>
            <VideoStream />
          </div>
          <div>
            <h2 className="font-raleway font-semibold text-cyan-color text-2xl">
              Time to Record your videos!
            </h2>
            <p className="font-raleway font-normal text-cyan-color text-xl mt-2">
              Remember that you will have 2' to record your answers
            </p>
            <ul className="list-disc font-raleway text-gray-color text-sm ml-5 mt-5">
              <li className="my-2">
                Make sure you have a stable internet connection.
              </li>
              <li className="my-2">
                Feel comfortable and free to express yourself as you wish.
              </li>
              <li className="my-2">
                the Questions will be shown ones you start each video.
              </li>
              <li className="my-2">
                Check your videos and continue if you’re sure with the result
              </li>
            </ul>
            <div className="flex items-start mt-10">
              <NextButton name="Get Started" link="/beforestarting" />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Details;
