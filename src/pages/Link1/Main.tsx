import React from "react";
import FrmApplication from "../../components/forms/FrmApplication";
import Title from "../../components/title/Title";

const Main: React.FunctionComponent = () => {
  return (
    <div className="container mx-auto grid place-items-center h-screen bg-clouds bg-no-repeat bg-cover bg-center">
      <Title link="./" />
      <h2 className="font-raleway font-semibold text-primary-color text-2xl">
        Senior Designer
      </h2>
      <FrmApplication />
    </div>
  );
};

export default Main;
