import React from "react";
import BlueBtn from "../../components/buttons/BlueBtn";
import Title from "../../components/title/Title";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-20">
      <section className="flex flex-col items-center ">
        <Title />
      </section>
      <section className="grid place-items-center grid-cols-2">
        <div>
          <img src="https://bit.ly/Illustration404" alt="Page Not Found" />
        </div>
        <div>
          <img src="https://bit.ly/404-picture" alt="404 page not found" />
          <div className="font-raleway text-font-color tracking-normal text-justify">
            <p className="mb-4">
              Unfortunately, this page does <br /> not exist or is disabled
            </p>
            <p>
              We invite you to use the upper <br /> menu or return to the main
              page
            </p>
          </div>
          <div className="grid place-content-start">
            <BlueBtn name="Homepage" link="./welcome" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
