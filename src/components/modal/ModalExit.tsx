import React from "react";
import ModalBtn from "./ModalBtn";

const ModalExit: React.FC = (/* { closeModal } */) => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div>
        <p className="text-base text-font-color font-raleway mb-2">
          Do you want to leave the website?
        </p>
        <p className="text-xs text-font-color font-raleway">
          If you leave this website the changes will not saved.
        </p>
        <div className="w-full grid grid-cols-2 mt-4 place-items-start">
          <button className="cursor-pointer rounded-lg bg-primary-color text-white font-semibold px-8 h-10">
            Leave
          </button>
          <button
          /* onClick={() => closeModal(false)}
            className="cursor-pointer bg-transparent rounded-lg text-primary-color font-semibold px-8 h-10 border border-primary-color"
           */
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalExit;
