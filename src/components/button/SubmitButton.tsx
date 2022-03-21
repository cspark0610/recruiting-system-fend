import React from "react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  link?: string;
}

const SubmitButton: React.FC<Props> = ({ name }) => {
  return (
    /* <Link to="/thankyou"> */
    <div className="flex justify-center">
      <input
        type="submit"
        className="cursor-pointer rounded-2xl bg-cyan-color text-white font-semibold py-3 px-9 shadow-lg shadow-cyan-color/50"
        value={name}
      />
    </div>
    /* </Link> */
  );
};

export default SubmitButton;
