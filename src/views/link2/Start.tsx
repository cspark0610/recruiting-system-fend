import React from "react";
import BackButton from "../../components/button/BackButton";
import CircleBar from "../../components/extra/CircleBar";
import Logo from "../../components/logo/Logo";
import VideoStream from "../../components/video/VideoStream";

const Start: React.FC = () => {
  return (
    <div className="bg-cloud bg-no-repeat bg-center">
      <section className="container mx-auto h-screen grid place-items-center">
        <Logo />
        <BackButton link="/details" />
        <section className="grid grid-cols-2 place-items-center h-96 -mt-10 gap-20">
          <div className="">
            <VideoStream />
          </div>
          <div className="">
            <CircleBar />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Start;
