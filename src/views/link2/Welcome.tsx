import React from "react";
import SubmitButton from "../../components/button/SubmitButton";
import Slider from "../../components/extra/Slider";
import Logo from "../../components/logo/Logo";

const Welcome: React.FC = () => {
  return (
    <div className="bg-cloud bg-no-repeat bg-center">
      <section className="container mx-auto h-screen grid place-items-center">
        <Logo />
        <div className="flex flex-col items-center font-raleway">
          <h2 className="font-semibold text-2xl text-cyan-color">Welcome!</h2>
          <span className="font-raleway font-normal text-sm text-gray-color mt-2">
            For this process you will have to perfom some steps:
          </span>
        </div>
        <Slider />
        <SubmitButton name="Next" />
      </section>
    </div>
  );
};

export default Welcome;
