import React from "react";

const AreaInput: React.FC = () => {
  return (
    <div className="relative w-full md:w-full p-3">
      <div className="bg-gray-200 border border-gray-200 p-4 rounded-2xl">
        <label className="text-sm font-normal text-gray-color font-raleway">
          Why are you interested in working with us: <br></br>
          <textarea
            className="mt-4 border-none bg-transparent resize-none w-full h-16 focus-visible:outline-none"
            maxLength={200}
          />
        </label>
      </div>
    </div>
  );
};

export default AreaInput;
