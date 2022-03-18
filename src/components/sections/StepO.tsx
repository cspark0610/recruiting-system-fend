import React from "react";
import BlueBtn from "../buttons/BlueBtn";

const StepO: React.FC = () => {
  return (
    <div>
      <span className="font-raleway text-font-color text-base font-normal">
        Question 1
      </span>
      <p className="font-raleway text-font-color text-xl font-normal my-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </p>
      <div className="grid place-content-start">
        <BlueBtn name="Get Started" link="" />
      </div>
    </div>
  );
};

export default StepO;
