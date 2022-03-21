import React from "react";
import Logo from "../../components/logo/Logo";

const ThankYou: React.FC = () => {
  return (
    <div className="bg-cloud bg-no-repeat bg-center">
      <div className="container mx-auto h-screen grid place-items-center">
        <Logo />
        <div className="flex flex-col items-center justify-center -mt-96">
          <span className="font-raleway text-gray-color font-semibold text-2xl my-10">
            Your application has been sent!
          </span>
          <span className="font-raleway text-gray-color text-base">
            We appreciate your time and interest,<br></br>
            we will be communicating with you.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
