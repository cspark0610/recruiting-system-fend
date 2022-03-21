import React from "react";
import BackButton from "../../components/button/BackButton";
import FrmData from "../../components/form/FrmData";
import Logo from "../../components/logo/Logo";

const RequiredSteps: React.FC = () => {
  return (
    <div className="bg-cloud bg-no-repeat bg-center">
      <div className="container mx-auto h-screen grid place-items-center">
        <Logo />
        <BackButton link="/rules" />
        <FrmData />
      </div>
    </div>
  );
};

export default RequiredSteps;
