import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import Checkbox from '../buttons/Checkbox';
import Jobs from '../../assets/json/JobPosition.json';

const Dropdown = () => {
  /*  */
  const [job, setJob] = useState(false);

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 focus:outline-none">
          <IoIosArrowDropdownCircle
            className="w-5 h-5 text-white"
            aria-hidden="true"
          />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-50 left-0 w-60 mt-1 ml-5 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <div className="-mb-2 mt-2">
                <span className="ml-2 font-raleway font-semibold text-gray-color text-sm">
                  Recommed for other position:
                </span>
              </div>
              {Jobs.map(({ id, name }) => (
                <Menu.Item key={id}>
                  <Checkbox
                    htmlFor={name}
                    message={name}
                    width="w-full"
                    value={job}
                    setValue={setJob}
                    classes="border-b-2 border-light-color"
                    direction="flex-row-reverse"
                  />
                </Menu.Item>
              ))}
              <button className="bg-transparent border-0 my-6 mx-2 text-gray-color font-raleway font-semibold text-sm">
                Apply
              </button>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default Dropdown;
