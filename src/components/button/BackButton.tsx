import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

interface Props {
  link: string;
}

const BackButton: React.FC<Props> = ({ link }) => {
  return (
    <Link to={link} className="container w-9/12 mt-4">
      <span className="flex items-center text-gray-color font-raleway font-semibold text-sm">
        <FaArrowLeft className="h-3 w-3" /> &nbsp;Back
      </span>
    </Link>
  );
};

export default BackButton;
