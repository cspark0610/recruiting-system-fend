import React from "react";

const ConclusionSection: React.FC = () => {
  return (
    <div className="grid grid-cols-2 place-items-center gap-40 h-full">
      <div className="w-full h-96 font-raleway text-font-color">
        <div className="mb-5">
          <span className="uppercase text-base font-semibold">Yes:</span>
        </div>
        <div className="bg-color-light rounded py-3 px-4 leading-tight w-full h-64">
          <p className="text-font-color font-raleway font-light text-sm p-2 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
            beatae sapiente distinctio deserunt sit autem ipsa consectetur, aut
            harum. Consectetur minus aliquam facilis cumque distinctio, a eius
            voluptate debitis recusandae.
          </p>
        </div>
      </div>
      <div className="w-full h-96 font-raleway text-font-color">
        <div className="mb-5">
          <span className="uppercase text-base font-semibold">No:</span>
        </div>
        <div className="bg-color-light rounded py-3 px-4 leading-tight w-full h-64">
          <p className="text-font-color font-raleway font-light text-sm p-2 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
            beatae sapiente distinctio deserunt sit autem ipsa consectetur, aut
            harum. Consectetur minus aliquam facilis cumque distinctio, a eius
            voluptate debitis recusandae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConclusionSection;
