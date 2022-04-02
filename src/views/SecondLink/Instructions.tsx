import { RiCheckboxCircleFill } from "react-icons/ri";
import BackButton from "../../components/buttons/BackButton";
import NextButton from "../../components/buttons/NextButton";

const Instructions = () => {
  return (
    <>
      <BackButton link="/welcome" />
      <div className="grid place-items-center">
        <h2 className="font-raleway font-semibold text-cyan-color text-2xl mb-8 mt-2">
          Other things to know
        </h2>
        <section className="w-2/3">
          <ul className="font-raleway font-normal text-base text-gray-color text-justify">
            <li className="flex items-center justify-start my-2 p-2">
              <RiCheckboxCircleFill className="text-cyan-color h-5 w-5 mr-8 hidden md:block" />{" "}
              You will need about 30’ to fill out this application
            </li>
            <li className="flex items-center justify-start my-2 p-2">
              <RiCheckboxCircleFill className="text-cyan-color h-5 w-5 mr-8 hidden md:block" />{" "}
              You will have 2’ to record your answers and only
              <span className="font-semibold">&nbsp;one chance</span>
            </li>
            <li className="flex items-center justify-start my-2 p-2 gap-0">
              <span className="inline-flex items-baseline mb-7">
                <RiCheckboxCircleFill className="text-cyan-color h-5 w-5 mr-8 hidden md:block" />
              </span>{" "}
              If you have any problems in between and you can’t finish your
              application, write to your recluter, explain what happened and you
              will get a new application form to re-do it
            </li>
          </ul>
        </section>
        <span className="font-raleway font-bold text-base text-gray-color mt-5">
          Are you ready?
        </span>
        <NextButton
          name="Get started"
          link="/welcome/required-steps"
          width="w-auto"
        />
      </div>
    </>
  );
};

export default Instructions;
