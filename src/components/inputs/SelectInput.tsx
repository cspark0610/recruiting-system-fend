import React, { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/solid";

interface InputValue {
  id: number;
  name: string;
}

interface SelectInputProps {
  for: string;
  label: string;
  placeholder: string;
  width: string;
  data: InputValue[];
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const SelectInput: React.FC<SelectInputProps> = (props) => {
  const [selected, setSelected] = useState<InputValue | undefined>();

  return (
    <div className={`${props.width} relative w-full md:w-1/2 p-3`}>
      <Listbox
        value={props.data ? props.data : selected}
        onChange={(data) => {
          setSelected(data as InputValue | undefined);
        }}
      >
        {({ open }) => (
          <>
            <Listbox.Label
              htmlFor={props.for}
              className="block text-sm font-medium text-gray-700"
            >
              {props.label}
            </Listbox.Label>
            <div className="relative">
              <Listbox.Button className="relative w-full bg-gray-200 border border-gray-200 text-gray-700 rounded py-3 px-4 leading-tight text-left font-raleway cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <span className="flex items-center">
                  <span className="block truncate">
                    {selected?.name || props.placeholder}
                  </span>
                </span>
                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {props.data &&
                    props.data.map(
                      (data: {
                        id: React.Key | null | undefined;
                        name:
                          | boolean
                          | React.ReactChild
                          | React.ReactFragment
                          | React.ReactPortal
                          | null
                          | undefined;
                      }) => (
                        <Listbox.Option
                          key={data.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "text-white bg-primary-color"
                                : "text-gray-900",
                              "cursor-default select-none relative py-2 pl-3 pr-9"
                            )
                          }
                          value={data}
                        >
                          {({ selected }) => (
                            <>
                              <div className="flex items-center">
                                <span
                                  className={classNames(
                                    selected ? "font-semibold" : "font-normal",
                                    "ml-3 block truncate"
                                  )}
                                >
                                  {data.name}
                                </span>
                              </div>
                            </>
                          )}
                        </Listbox.Option>
                      )
                    )}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};
export default SelectInput;
