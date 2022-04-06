import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineGlobal } from "react-icons/ai";

import i18next from "i18next";

const Lang = () => {
  /*  */
  const languages = [
    {
      code: "en",
      name: "English",
      country_code: "en",
    },
    {
      code: "es",
      name: "Español",
      country_code: "es",
    },
  ];

  return (
    <div className="flex justify-end absolute">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
            <AiOutlineGlobal className="text-cyan-color h-5 w-5" />
            <BiChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            {languages.map(({ code, name, country_code }) => (
              <Menu.Item key={country_code}>
                <button
                  onClick={() => i18next.changeLanguage(code)}
                  className="hover:bg-gray-100 font-raleway text-gray-color block px-6 py-2 text-sm"
                >
                  {name}
                </button>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Lang;
