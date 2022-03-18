import React from "react";
import {
  FaCopy,
  FaMailBulk,
  FaMapMarkerAlt,
  FaPaperclip,
  FaPhoneAlt,
} from "react-icons/fa";

const GeneralDetails: React.FC = () => {
  return (
    <div className="grid grid-cols-2 place-items-center gap-40 h-full">
      <div className="w-full">
        <div className="font-raleway text-font-color">
          <div className="">
            <h2 className="text-2xl -mb-1 tracking-wide">
              Sebastian Montenegro Abad
            </h2>
            <span className="text-base">Lic. Graphic Designers</span>
            <span className="flex flex-row items-center my-3">
              <FaMapMarkerAlt className="text-primary-color" />{" "}
              &nbsp;&nbsp;&nbsp; Peru
            </span>
            <h3 className="text-base font-semibold mb-1 tracking-wide">
              Contact details
            </h3>
            <span className="flex flex-row items-center text-sm mb-2">
              <FaMailBulk className="text-primary-color" /> &nbsp;&nbsp;&nbsp;
              samuelvidal.muñoz@gmail.com
            </span>
            <span className="flex flex-row items-center text-sm">
              <FaPhoneAlt className="text-primary-color" /> &nbsp;&nbsp;&nbsp;
              789285942
            </span>
          </div>
          <hr className="w-ful my-5" />
          <p className="text-base">Salary Expectations: </p>
          <hr className="w-ful my-5" />
          <div className="grid grid-cols-2">
            <p className="text-base">English Level: </p>
            <p className="text-base">Test Result: </p>
          </div>
          <hr className="w-ful my-5" />
          <h2 className="text-base font-semibold mb-1 tracking-wide">
            Link to next step:{" "}
          </h2>
          <p className="bg-color-light rounded py-3 px-4">
            <a href="" className="flex flex-row items-center justify-between">
              LoremIpsumissimply.com <FaCopy className="text-primary-color" />
            </a>{" "}
          </p>
        </div>
      </div>
      <div>
        <h2 className="font-raleway font-normal text-base text-font-color mb-2">
          Why are you interesting in working with FTF?
        </h2>
        <div className="bg-color-light rounded py-3 px-4 leading-tight h-44">
          <p className="text-font-color font-raleway font-light text-sm p-2 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
            beatae sapiente distinctio deserunt sit autem ipsa consectetur, aut
            harum. Consectetur minus aliquam facilis cumque distinctio, a eius
            voluptate debitis recusandae.
          </p>
        </div>
        <hr className="w-ful my-10" />
        <ul className="font-raleway text-font-color">
          <li className="flex flex-row items-center mb-2">
            <FaPaperclip className="text-primary-color cursor-pointer" />{" "}
            &nbsp;&nbsp;&nbsp; CV
          </li>
          <li className="mb-2">
            Linkedin:{" "}
            <a href="" className="text-primary-color">
              candidatelinkedin.com
            </a>
          </li>
          <li className="mb-2">Other Links: NA</li>
        </ul>
      </div>
    </div>
  );
};

export default GeneralDetails;
