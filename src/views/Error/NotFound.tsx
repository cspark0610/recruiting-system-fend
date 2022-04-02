import React from "react";
import NextButton from "../../components/buttons/NextButton";

const NotFound = () => {
  return (
    <div className="grid justify-items-center mt-10">
      <section className="grid place-items-center gap-20 grid-rows-1 md:grid-cols-2">
        <div>
          <img
            src={process.env.PUBLIC_URL + `/images/Ilustration.png`}
            alt="Page Not Found"
            className="hidden md:block"
          />
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + `/images/404 Error.png`}
            alt="404 page not found"
            className="w-60 md:w-full bg-white"
          />
          <div className="font-raleway text-gray-color font-normal text-base tracking-wide">
            <p className="mb-4">
              Unfortunately, this page does <br /> not exist or is disabled
            </p>
            <p>
              We invite you to use the upper <br /> menu or return to the main
              page
            </p>
          </div>
          <div className="grid place-content-start w-full">
            <NextButton name="Homepage" link="/welcome" width="w-auto" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
