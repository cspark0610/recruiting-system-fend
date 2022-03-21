import React from "react";
import FrmApplication from "../../components/form/FrmAplication";
import Logo from "../../components/logo/Logo";

const Data: React.FC = () => {
  return (
    <div className="bg-cloud bg-no-repeat bg-center">
      <div className="container mx-auto h-screen grid place-items-center">
        <Logo />
        <FrmApplication />
      </div>
    </div>
  );
};

export default Data;
