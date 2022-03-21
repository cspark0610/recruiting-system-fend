import { useState } from "react";
import DataSlider from "../assets/json/DataSlider.json";

export function useSlider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== DataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === DataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(DataSlider.length);
    }
  };

  const moveDot = (index: number) => {
    setSlideIndex(index);
  };

  return {
    nextSlide,
    prevSlide,
    moveDot,
    slideIndex,
  };
}
