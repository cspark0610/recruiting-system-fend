import SliderData from "../../assets/json/SliderData.json";
import SliderButton from "../buttons/SliderButton";
import { useSlider } from "../../hooks/useSlider";
import "../../assets/scss/Slider.scss";

const Slider = () => {
  const { nextSlide, prevSlide, moveDot, slideIndex } = useSlider();

  return (
    <div className="container-slider mt-10">
      {SliderData.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img
              src={process.env.PUBLIC_URL + `/images/Rule ${index + 1}.png`}
              alt={obj.description}
            />
          </div>
        );
      })}

      <SliderButton moveSlide={nextSlide} direction={"next"} />
      <SliderButton moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: 2 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
