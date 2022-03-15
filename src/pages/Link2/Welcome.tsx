import React from "react";
import { Link } from "react-router-dom";
import BlueBtn from "../../components/buttons/BlueBtn";

const Welcome: React.FunctionComponent = () => {
  return (
    <div className="grid place-items-center h-screen bg-clouds bg-no-repeat bg-cover bg-center">
      <div className="container mx-auto grid place-items-center">
        <Link to="./welcome">
          <img
            src="https://fulltimeforce.com/wp-content/themes/ftf-2020/images/fulltimeforce-logo.svg"
            alt="fulltimeforce-logo"
            className="w-32 mb-2"
          />
        </Link>
        <h2 className="font-raleway font-semibold text-primary-color text-2xl mt-10">
          Welcome!
        </h2>
        <div className="font-raleway leading-7 text-font-color my-10">
          <span className="text-center">
            For this process you will have to perfom two steps:
          </span>
          <ul className="list-disc my-5 mx-12">
            <li className="mb-3">First you will have to fill out a form.</li>
            <li>
              Second you will have to film yourself
              <br /> on video answering some questions.
            </li>
          </ul>
          <div className="text-center">
            <span className="font-bold text-sm">Are you ready?</span>
          </div>
        </div>
        <div className="-mt-3">
          <BlueBtn name="Get Started" link="./survey" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
