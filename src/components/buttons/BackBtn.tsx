import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const BackBtn: React.FC = () => {
  return (
    <div className="container cursor-pointer w-9/12">
      <Link to="./survey">
        <span className="flex items-center text-font-color font-raleway font-semibold text-sm">
          <FaArrowLeft className="mr-3 h-3 w-3" />
          Back
        </span>
      </Link>
    </div>
  );
};

export default BackBtn;
