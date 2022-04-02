import React from "react";
import BackButton from "../../components/buttons/BackButton";
import FrmInfo from "../../components/forms/FrmInfo";

const Required = () => {
  return (
    <>
      <BackButton link="/welcome/instructions" />
      <FrmInfo />
    </>
  );
};

export default Required;
