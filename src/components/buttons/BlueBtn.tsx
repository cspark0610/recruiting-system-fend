import React from "react";
import { Link } from "react-router-dom";

interface BlueBtnProps {
  name: string;
  link: string;
}

const BlueBtn: React.FC<BlueBtnProps> = (props) => {
  return (
    <div className="flex justify-center">
      <Link to={props.link}>
        <input
          type="submit"
          className="cursor-pointer rounded-2xl bg-primary-color text-white font-semibold py-3 px-9 shadow-lg shadow-primary-color/50"
          value={props.name}
        />
      </Link>
    </div>
  );
};

export default BlueBtn;
