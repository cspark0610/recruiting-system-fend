import React from "react";
import { FaCheck } from "react-icons/fa";
import "../../assets/scss/ProgressBar.scss";

const ProgressBar: React.FC = () => {
  return (
    <div className="progress-bar">
      <div className="step">
        <div className="circle">
          <span>0</span>
        </div>
        <FaCheck className="check" />
      </div>
      <div className="step">
        <div className="circle">
          <span>1</span>
        </div>
        <FaCheck className="check" />
      </div>
      <div className="step">
        <div className="circle">
          <span>2</span>
        </div>
        <FaCheck className="check" />
      </div>
      <div className="step">
        <div className="circle">
          <span>3</span>
        </div>
        <FaCheck className="check" />
      </div>
      <div className="step">
        <div className="circle">
          <span>4</span>
        </div>
        <FaCheck className="check" />
      </div>
    </div>
  );
};

export default ProgressBar;
