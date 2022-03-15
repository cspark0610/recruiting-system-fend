import React from "react";
import FrmSurvey from "../../components/forms/FrmSurvey";

const Survey: React.FunctionComponent = () => {
  return (
    <div className="grid place-items-center h-screen bg-clouds bg-no-repeat bg-cover bg-center">
      <div className="container mx-auto grid place-items-center">
        <img
          src="https://fulltimeforce.com/wp-content/themes/ftf-2020/images/fulltimeforce-logo.svg"
          alt="fulltimeforce-logo"
          className="w-28 mb-2"
        />
        <h2 className="font-raleway font-normal text-font-color text-2xl mt-10 container w-7/12">
          Sebastian Montenegro Abad
        </h2>
        <FrmSurvey />
      </div>
    </div>
  );
};

export default Survey;
