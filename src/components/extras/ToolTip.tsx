import React from "react";
import { ValidateResult } from "react-hook-form";

interface TooltipProps {
  key: string;
  message: ValidateResult;
}

const ToolTip: React.FC<TooltipProps> = ({ key, message }) => {
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
