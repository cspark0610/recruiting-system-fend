import React from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import "../../assets/sass/Slider.scss";

interface Props {
  direction: string;
  moveSlide(): void;
}

const SliderButton: React.FC<Props> = ({ direction, moveSlide }) => {
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

export default SliderButton;
