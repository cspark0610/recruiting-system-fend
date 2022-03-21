import React from "react";
import { ValidateResult } from "react-hook-form";
import "../../assets/sass/ToolTip.scss";

interface Props {
  key: string;
  message: ValidateResult;
}

const ToolTip: React.FC<Props> = ({ key, message }) => {
  return (
    <div className="container-tooltip">
      <div className="tooltip">
        <p key={key}>{message}</p>
      </div>
      <div className="vector"></div>
    </div>
  );
};

export default ToolTip;
