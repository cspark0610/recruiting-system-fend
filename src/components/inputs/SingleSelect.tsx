import { Listbox, Transition } from "@headlessui/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Fragment } from "react";

import Alert from "../extras/Alert";

interface OptionValues {
  id: number;
  name: string;
}

interface Props {
  data: OptionValues[];
  display: string;
  id: string;
  for: string;
  label: string;
  placeholder: string;
  setValue: any;
  showAlert?: any;
  value: any;
  width: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const SingleSelect: React.FC<Props> = (props) => {
  return (
    <div className={`${props.width} w-full p-3 mt-auto`}>
      <div className="relative">
        {props.showAlert && <Alert />}
        <Listbox
          value={props.data ? props.data : props.value}
          onChange={(data: OptionValues) => {
            props.setValue(data);
          }}
        >
          {({ open }) => (
            <>
              <div className="relative">
                <Listbox.Label
                  id={props.id}
                  htmlFor={props.for}
                  className="mobile:block tablet:hidden laptop:hidden mobile:text-sm font-raleway font-light text-gray-color ml-2 w-full"
                >
                  {props.label}
                </Listbox.Label>
                <Listbox.Button
                  className={`${
                    props.showAlert
                      ? "bg-white border-red-color"
                      : "bg-light-color border-light-color"
                  } ${
                    props.value.name && "border-cyan-color bg-light-blue"
                  } floating-label border w-full laptop:rounded-2xl mobile:rounded-[10px] laptop:py-3 px-2 min-w-full laptop:w-[287px] laptop:h-[54px] mobile:w-[162px] mobile:h-[35px] tablet:w-[241px] tablet:h-[54px] leading-tight text-left font-raleway cursor-pointer focus:outline-none focus:bg-white laptop:text-sm focus:border-cyan-color focus:shadow-cyan-color/50 focus:shadow-md`}
                >
                  <span className="flex items-center">
                    <span className="block truncate ml-2 text-gray-color font-light mobile:text-xs tablet:text-[15px] laptop:text-[15px] desktop:text-base">
                      {props.value.name || props.placeholder}
                    </span>
                  </span>
                  <span
                    className={`${props.display} ml-3 absolute inset-y-0 right-0 items-center pr-2 pointer-events-none`}
                  >
                    <RiArrowDropDownLine
                      className="h-8 w-8 text-gray-color"
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
                    <div className="grid">
                      {props.data &&
                        props.data.map((data: OptionValues) => (
                          <Listbox.Option
                            key={data.id}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "text-white bg-cyan-color/70 border-transparent"
                                  : "text-gray-color",
                                "cursor-default select-none relative py-2 mobile:text-xs laptop:text-sm font-raleway w-full"
                              )
                            }
                            value={data}
                          >
                            {({ selected }) => (
                              <>
                                <div className="flex items-center">
                                  <span
                                    className={classNames(
                                      selected
                                        ? "font-semibold"
                                        : "font-normal",
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
    </div>
  );
};

export default SingleSelect;
