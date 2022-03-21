import React, { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiSelector } from "react-icons/hi";

interface OptionValue {
  id: number;
  name: string;
}

interface Props {
  data: OptionValue[];
  for: string;
  label: string;
  placeholder: string;
  width: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const SelectInput: React.FC<Props> = (props) => {
  const [selected, setSelected] = useState<OptionValue | undefined>();

  return (
    <div className={`${props.width} relative w-full md:w-1/2 p-3`}>
      <Listbox
        value={props.data ? props.data : selected}
        onChange={(data) => {
          setSelected(data as OptionValue | undefined);
        }}
      >
        {({ open }) => (
          <>
            <div className="relative">
              <Listbox.Button className="relative w-full bg-gray-200 border border-gray-200 rounded-2xl py-3 px-4 leading-tight text-left font-raleway cursor-pointer focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <span className="flex items-center">
                  <span className="block truncate font-light text-gray-color">
                    {selected?.name || props.placeholder}
                  </span>
                </span>
                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <HiSelector
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
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-2 overflow-auto focus:outline-none">
                  <Listbox.Label
                    htmlFor={props.for}
                    className="text-sm font-raleway font-normal text-cyan-color ml-3 w-full"
                  >
                    {props.label}
                  </Listbox.Label>
                  <div className="grid grid-cols-2 gap-2 p-2">
                    {props.data &&
                      props.data.map((data: { id: number; name: string }) => (
                        <Listbox.Option
                          key={data.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "text-white bg-cyan-color/70"
                                : "text-gray-color",
                              "cursor-default select-none relative py-2 px-3 text-xs font-raleway border-gray-color border-x border-y rounded-2xl w-full"
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
                      ))}
                  </div>
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
