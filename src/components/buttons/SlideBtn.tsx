import React from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import "../../assets/scss/Slider.scss";

interface Values {
  direction: string;
  moveSlide(): void;
}

const BtnSlider: React.FC<Values> = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <div>
        {direction === "next" ? (
          <RiArrowRightSLine className="icons-color" />
        ) : (
          <RiArrowLeftSLine className="icons-color" />
        )}
      </div>
    </button>
  );
};

export default BtnSlider;
