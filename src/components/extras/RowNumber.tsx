import React from "react";
import "../../assets/scss/RowNumber.scss";

const RowNumber: React.FC = () => {
  return (
    <div className="raw-number">
      <div className="step">
        <div className="circle">
          <span>1</span>
        </div>
      </div>
      <div className="step">
        <div className="circle">
          <span>2</span>
        </div>
      </div>
      <div className="step">
        <div className="circle">
          <span>3</span>
        </div>
      </div>
      <div className="step">
        <div className="circle">
          <span>4</span>
        </div>
      </div>
      <div className="step">
        <div className="circle">
          <span>5</span>
        </div>
      </div>
      <div className="step">
        <div className="circle">
          <span>6</span>
        </div>
      </div>
    </div>
  );
};

export default RowNumber;
