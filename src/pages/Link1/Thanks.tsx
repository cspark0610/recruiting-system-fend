import React from "react";
import Title from "../../components/title/Title";

const Thanks: React.FunctionComponent = () => {
  return (
    <div className="bg-clouds bg-no-repeat bg-center">
      <div className="container mx-auto h-screen grid place-items-center">
        <Title />
        <div className="flex flex-col items-center justify-center -mt-96">
          <span className="font-raleway text-font-color font-semibold text-2xl my-10">
            Your application has been sent!
          </span>
          <span className="font-raleway text-font-color text-base">
            We appreciate your time and interest,<br></br>
            we will be communicating with you.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
