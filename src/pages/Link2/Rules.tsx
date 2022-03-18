import React from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";
import BackBtn from "../../components/buttons/BackBtn";
import BlueBtn from "../../components/buttons/BlueBtn";
import Title from "../../components/title/Title";

const Rules: React.FC = () => {
  return (
    <div className="bg-clouds bg-no-repeat bg-center">
      <div className="container mx-auto h-screen grid place-items-center">
        <Title />
        <BackBtn link="./welcome" />
        <h2 className="font-raleway font-semibold text-primary-color text-2xl">
          Other things to know
        </h2>
        <section className="w-2/3 bg-white">
          <ul className="font-raleway font-normal text-base text-font-color">
            <li className="flex items-center justify-start text-justify my-2 p-2">
              <RiCheckboxCircleFill className="text-primary-color h-5 w-5 mr-5" />{" "}
              &nbsp;You will need about 30’ to fill out this application
            </li>
            <li className="flex items-center justify-start text-justify my-2 p-2">
              <RiCheckboxCircleFill className="text-primary-color h-5 w-5 mr-5" />{" "}
              &nbsp;You will have 2’ to record your answers and only
              <span className="font-semibold">&nbsp;one chance</span>
            </li>
            <li className="flex items-center justify-start text-justify my-2 p-2 gap-0">
              <span className="inline-flex items-baseline mb-7">
                <RiCheckboxCircleFill className="text-primary-color h-5 w-5 mr-5" />
              </span>{" "}
              &nbsp;If you have any problems in between and you can’t finish
              your application, write to your recluter, explain what happened
              and you will get a new application form to re-do it
            </li>
          </ul>
        </section>
        <span className="font-raleway font-bold text-base text-font-color">
          Are you ready?
        </span>
        <BlueBtn name="Get Started" link="RequireSteps" />
      </div>
    </div>
  );
};

export default Rules;
