import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

interface BackBtnProps {
  link: string;
}

const BackBtn: React.FC<BackBtnProps> = (props) => {
  return (
    <Link to={props.link} className="container w-9/12 mt-4">
      <span className="flex items-center text-font-color font-raleway font-semibold text-sm">
        <FaArrowLeft className="h-3 w-3" /> &nbsp;Back
      </span>
    </Link>
  );
};

export default BackBtn;
