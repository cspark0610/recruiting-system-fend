import React from "react";
import BackButton from "../../components/button/BackButton";
import Logo from "../../components/logo/Logo";
import { RiCheckboxCircleFill } from "react-icons/ri";
import NextButton from "../../components/button/NextButton";

const Rules: React.FC = () => {
  return (
    <div className="bg-cloud bg-no-repeat bg-center">
      <div className="container mx-auto h-screen grid place-items-center">
        <Logo />
        <BackButton link="/welcome" />
        <h2 className="font-raleway font-semibold text-cyan-color text-2xl">
          Other things to know
        </h2>
        <section className="w-2/3 bg-white">
          <ul className="font-raleway font-normal text-base text-gray-color">
            <li className="flex items-center justify-start text-justify my-2 p-2">
              <RiCheckboxCircleFill className="text-cyan-color h-5 w-5 mr-5" />{" "}
              &nbsp;You will need about 30’ to fill out this application
            </li>
            <li className="flex items-center justify-start text-justify my-2 p-2">
              <RiCheckboxCircleFill className="text-cyan-color h-5 w-5 mr-5" />{" "}
              &nbsp;You will have 2’ to record your answers and only
              <span className="font-semibold">&nbsp;one chance</span>
            </li>
            <li className="flex items-center justify-start text-justify my-2 p-2 gap-0">
              <span className="inline-flex items-baseline mb-7">
                <RiCheckboxCircleFill className="text-cyan-color h-5 w-5 mr-5" />
              </span>{" "}
              &nbsp;If you have any problems in between and you can’t finish
              your application, write to your recluter, explain what happened
              and you will get a new application form to re-do it
            </li>
          </ul>
        </section>
        <span className="font-raleway font-bold text-base text-gray-color">
          Are you ready?
        </span>
        <NextButton name="Get Started" link="/requiredsteps" />
      </div>
    </div>
  );
};

export default Rules;
