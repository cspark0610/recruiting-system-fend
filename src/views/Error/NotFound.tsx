import React from "react";
import SubmitButton from "../../components/button/SubmitButton";
import Logo from "../../components/logo/Logo";

const NotFound: React.FC = () => {
  return (
    <div className="bg-cloud bg-no-repeat bg-center">
      <div className="container mx-auto h-screen grid place-items-center">
        <Logo />
        <section className="grid place-items-center grid-cols-2 gap-20">
          <div>
            <img
              src={process.env.PUBLIC_URL + `/images/Ilustration.png`}
              alt="Page Not Found"
            />
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + `/images/404 Error.png`}
              alt="404 page not found"
            />
            <div className="font-raleway text-gray-color tracking-normal text-justify">
              <p className="mb-4">
                Unfortunately, this page does <br /> not exist or is disabled
              </p>
              <p>
                We invite you to use the upper <br /> menu or return to the main
                page
              </p>
            </div>
            <div className="grid place-content-start mt-10">
              <SubmitButton name="Homepage" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NotFound;
