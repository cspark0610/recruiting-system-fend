import { useState } from "react";
import SliderData from "../assets/json/SliderData.json";

export function useSlider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== SliderData.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === SliderData.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(SliderData.length);
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
