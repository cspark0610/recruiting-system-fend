import React from "react";

const ModalBtn: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-2 mt-4 place-items-start">
      <button className="cursor-pointer rounded-lg bg-primary-color text-white font-semibold px-8 h-10">
        Leave
      </button>
      <button className="cursor-pointer bg-transparent rounded-lg text-primary-color font-semibold px-8 h-10 border border-primary-color">
        Cancel
      </button>
    </div>
  );
};

export default ModalBtn;
