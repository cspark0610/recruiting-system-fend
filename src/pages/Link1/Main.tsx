import React from "react";
import FrmApplication from "../../components/forms/FrmApplication";
import Title from "../../components/title/Title";

const Main: React.FunctionComponent = () => {
  return (
    <div className="bg-clouds bg-no-repeat bg-center">
      <div className="container mx-auto h-screen grid place-items-center">
        <Title />
        <FrmApplication />
      </div>
    </div>
  );
};

export default Main;