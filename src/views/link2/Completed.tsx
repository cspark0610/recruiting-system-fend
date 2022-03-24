import React from "react";
import SubmitButton from "../../components/button/SubmitButton";
import Logo from "../../components/logo/Logo";
import VideoStream from "../../components/video/VideoStream";
import { RiEdit2Fill } from "react-icons/ri";

const Completed: React.FC = () => {
  return (
    <div className="bg-cloud bg-no-repeat bg-center">
      <section className="container mx-auto h-screen grid place-items-center">
        <Logo />
        <section className="grid grid-cols-2 place-items-center gap-10 w-10/12 bg-white">
          <div className="">
            <div className="font-raleway text-gray-color">
              <h2 className="text-2xl tracking-wide">
                Your Application is complete!
              </h2>
              <span className="text-base">Make sure everything is correct</span>
              <hr className="w-ful my-5" />
              <h2 className="font-raleway font-normal text-sm text-font-color mb-1">
                Why are you interesting in working with FTF?
              </h2>
              <div className="bg-light-color rounded-2xl px-2 py-1 h-32">
                <p className="text-gray-color font-raleway font-light text-sm p-2 text-justify">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Rerum beatae sapiente distinctio deserunt sit autem ipsa
                  consectetur, aut harum. Consectetur minus aliquam facilis
                  cumque distinctio, a eius voluptate debitis recusandae.
                </p>
              </div>
              <hr className="w-ful my-5" />
              <p className="text-sm">Skills: </p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <span className="bg-cyan-color/90 rounded-2xl p-1 text-white text-center text-xs font-light font-raleway w-36">
                  Figma Advanced
                </span>
                <span className="bg-cyan-color/90 rounded-2xl p-1 text-white text-center text-xs font-light font-raleway w-36">
                  Photoshop Advanced
                </span>
                <span className="bg-cyan-color/90 rounded-2xl p-1 text-white text-center text-xs font-light font-raleway w-36">
                  Adobe XD Intermidiate
                </span>
                <span className="bg-cyan-color/90 rounded-2xl p-1 text-white text-center text-xs font-light font-raleway w-36">
                  Ilustrator Basic
                </span>
              </div>
              <hr className="w-ful my-5" />
              <p className="text-sm flex flex-row justify-between">
                Salary Expectations: 2000 usd{" "}
                <RiEdit2Fill className="cursor-pointer" />
              </p>
              <hr className="w-ful my-5" />
              <p className="text-sm flex flex-row justify-between">
                Available from: 2 weeks{" "}
                <RiEdit2Fill className="cursor-pointer" />
              </p>
            </div>
          </div>
          <div className="grid gap-10">
            <VideoStream />
            <SubmitButton name="Send & Finish" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Completed;
