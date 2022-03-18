import React from "react";
import BlueBtn from "../../components/buttons/BlueBtn";
import Slider from "../../components/slider/Slider";
import Title from "../../components/title/Title";

const Welcome: React.FunctionComponent = () => {
  return (
    <div className="bg-clouds bg-no-repeat bg-center">
      <div className="container mx-auto h-screen grid place-items-center">
        <Title />
        <div className="flex flex-col items-center font-raleway">
          <h2 className="font-raleway font-semibold text-primary-color text-2xl">
            Welcome!
          </h2>
          <span className="font-normal text-sm text-font-color mt-2">
            For this process you will have to perfom some steps:
          </span>
        </div>
        <Slider />
        <BlueBtn name="Get Started" link="./rules" />
      </div>
    </div>
  );
};

export default Welcome;
