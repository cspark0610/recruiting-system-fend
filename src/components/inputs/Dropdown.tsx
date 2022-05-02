import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Jobs from "../../assets/json/JobPosition.json";

const Dropdown = () => {
  /*  */
  const [position, setPosition] = useState<Array<string>>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const refDropdown = useRef<HTMLDivElement>(null);
  useClickOutside(refDropdown);

  const handlePositionCaptureCheck = (
    evt: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (evt.target.checked) {
      setPosition([...position, evt.target.value]);
    } else {
      setPosition([...position.filter((item) => item !== evt.target.value)]);
    }
  };

  function useClickOutside(ref: React.RefObject<HTMLDivElement>) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowDropdown(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <>
      <div ref={refDropdown} className="relative inline-block text-left">
        <button
          className="inline-flex justify-center w-full px-4 py-2 focus:outline-none"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <IoIosArrowDropdownCircle className="w-5 h-5 text-white" />
        </button>
        <div
          className={`${
            showDropdown ? "block" : "hidden"
          }  absolute z-50 laptop:left-0 mobile:right-0 mobile:w-52 laptop:w-60 mt-1 mobile:mr-5 laptop:ml-5 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          <div className="px-1 py-1">
            <div className="-mb-2 mt-2">
              <span className="ml-2 font-raleway font-semibold text-gray-color mobile:text-xs laptop:text-sm">
                Recommed for other position:
              </span>
            </div>
            {Jobs.map(({ id, name }) => (
              <div key={id}>
                <div className="grid border-b-2 border-light-color w-full mt-6">
                  <div className="flex-row-reverse items-center pl-2 pr-4">
                    <input
                      id={name}
                      className="ml-2 mr-2 focus:outline-none"
                      type="checkbox"
                      name={name}
                      checked={position.indexOf(name) !== -1 ? true : false}
                      value={name}
                      onChange={handlePositionCaptureCheck}
                    />
                    <label
                      className="w-full font-raleway font-light mobile:text-xs laptop:text-[15px]"
                      htmlFor={name}
                    >
                      <span className="text-gray-color">{name}</span>
                    </label>
                  </div>
                </div>
              </div>
            ))}
            <button className="bg-transparent border-0 my-6 mx-4 text-gray-color font-raleway font-semibold mobile:text-xs laptop:text-sm">
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
