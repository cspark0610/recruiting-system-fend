import React from "react";
import Title from "../../components/title/Title";

const Thanks: React.FunctionComponent = () => {
  return (
    <div className="grid place-items-center h-screen bg-clouds bg-no-repeat bg-cover bg-center">
      <div className="container mx-auto grid place-items-center">
        <Title link="./" />
        <span className="font-raleway text-font-color font-semibold my-10 text-2xl">
          Your application has been sent!
        </span>
        <span className="font-raleway text-font-color text-base">
          We appreciate your time and interest,<br></br>
          we will be communicating with you.
        </span>
      </div>
    </div>
  );
};

export default Thanks;
