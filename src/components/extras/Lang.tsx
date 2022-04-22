import { useState } from "react";
import { Menu, Switch } from "@headlessui/react";
import ReactCountryFlag from "react-country-flag";

import i18next from "i18next";

const Lang = () => {
  /*  */
  const languages = [
    {
      code: "en",
      name: "English",
      country_code: "GB",
    },
    {
      code: "es",
      name: "Español",
      country_code: "ES",
    },
  ];

  const [enabled, setEnabled] = useState(false);

  return (
    <div className="absolute laptop:top-5 mobile:top-10 right-5 z-50">
      <Menu as="div" className="relative inline-block text-left">
        <div className="inline-flex justify-center min-w-full laptop:w-[118px] laptop:h-[28px] mobile:w-[62px] mobile:h-[28px] tablet:w-[118px] tablet:h-[28px] rounded-md border border-gray-300 shadow-sm mobile:px-1 mobile:py-1 laptop:px-1 laptop:py-[3px] bg-white text-gray-color focus:outline-none">
          <div className="flex flex-row-reverse items-center mx-1">
            <Switch
              checked={enabled}
              onChange={() => {
                setEnabled(!enabled);
                if (!enabled) {
                  i18next.changeLanguage(languages[1].code);
                } else {
                  i18next.changeLanguage(languages[0].code);
                }
              }}
              className={`${enabled ? "bg-white-color" : "bg-white-color"}
                  relative inline-flex flex-shrink-0 h-[5px] w-[18px] border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span
                aria-hidden="true"
                className={`${enabled ? "translate-x-3" : "translate-x-0"}
                    pointer-events-none inline-block h-[9px] w-[9px] rounded-full bg-dark-blue shadow-lg transform ring-0 transition ease-in-out duration-200 -mt-[2px]`}
              />
            </Switch>
            <span className=" text-gray-color pr-1 font-raleway text-xs laptop:block mobile:hidden tablet:block font-normal">
              {!enabled ? languages[0].name : languages[1].name}
            </span>
            <span className="w-full pr-1">
              <ReactCountryFlag
                countryCode={
                  !enabled
                    ? languages[0].country_code
                    : languages[1].country_code
                }
                style={{
                  width: "28px",
                  height: "20px",
                  borderRadius: "5px",
                  marginTop: "-5px",
                }}
                svg
              />
            </span>
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default Lang;
