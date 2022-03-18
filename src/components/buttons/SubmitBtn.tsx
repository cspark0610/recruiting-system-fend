import React from "react";

interface BlueBtnProps {
  name: string;
}

const SubmitBtn: React.FC<BlueBtnProps> = ({ name }) => {
  return (
    <div className="flex justify-center">
      <input
        type="submit"
        className="cursor-pointer rounded-2xl bg-primary-color text-white font-semibold py-3 px-9 shadow-lg shadow-primary-color/50"
        value={name}
      />
    </div>
  );
};

export default SubmitBtn;
