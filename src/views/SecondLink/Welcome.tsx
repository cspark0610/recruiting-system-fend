import NextButton from "../../components/buttons/NextButton";
import Slider from "../../components/extra/Slider";

const Welcome: React.FC = () => {
  return (
    <>
      <section className="grid place-items-center">
        <h2 className="font-semibold text-2xl text-cyan-color">Welcome!</h2>
        <div className="mt-5">
          <p className="font-raleway font-normal text-sm text-gray-color">
            For this process you will have to perfom some steps:
          </p>
        </div>
        <Slider />
      </section>
      <NextButton name="Next" link="/welcome/instructions" width="w-1/2" />
    </>
  );
};

export default Welcome;
