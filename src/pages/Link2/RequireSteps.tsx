import React from "react";
import BackBtn from "../../components/buttons/BackBtn";
import FrmRequired from "../../components/forms/FrmRequired";
import Title from "../../components/title/Title";

const Survey: React.FunctionComponent = () => {
  return (
    <div className="bg-clouds bg-no-repeat bg-center">
      <div className="container mx-auto h-screen grid place-items-center">
        <Title />
        <BackBtn link="./rules" />
        <FrmRequired />
      </div>
    </div>
  );
};

export default Survey;
