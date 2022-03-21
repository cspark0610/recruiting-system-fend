import React from "react";

const RadioInput: React.FC = () => {
  return (
    <div className="w-full grid place-items-center mt-6">
      <label
        className="font-raleway font-light w-auto text-sm"
        htmlFor="agreetment"
      >
        <input className="mr-2 leading-tight" type="radio" />
        <span className="text-gray-color">You must agree to </span>
        <span className="text-gray-color font-bold">terms and conditions</span>
      </label>
    </div>
  );
};

export default RadioInput;
