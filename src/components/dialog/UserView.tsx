import { Fragment, useState } from "react";
import { Dialog, Transition, Tab } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import Dropdown from "../inputs/Dropdown";
import { IoCloseCircleOutline } from "react-icons/io5";
import "./../../assets/scss/panels.scss";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const UserView = () => {
  /*  */
  const [openModal, setOpenModal] = useState(true);
  const [panel, setPanel] = useState(1);
  const { t } = useTranslation();

  const onChangePanel = (index: number) => {
    setPanel(index);
  };

  return (
    <Transition.Root show={openModal} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpenModal}
      >
        <div className="flex items-end justify-center min-h-screen text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-white bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-6xl sm:w-full">
              <div className="bg-white">
                <div className="sm:items-center">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left h-96">
                    <Dialog.Title
                      as="h3"
                      className="text-center bg-yellow-color p-1"
                    >
                      <div className="inline-flex items-baseline">
                        <div>
                          <span className="text-white text-base font-raleway uppercase font-semibold">
                            Chosen for diseño uxui
                          </span>
                          <Dropdown />
                        </div>
                        <div>
                          <IoCloseCircleOutline className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </Dialog.Title>
                    <div className="grid grid-cols-2 max-w-md">
                      <Tab.Group>
                        <Tab.List className="flex flex-col items-end bg-light-color h-screen">
                          <div className="w-full my-5 text-center grid justify-center">
                            <div className="w-24 font-raleway text-sm text-white bg-cyan-color rounded-lg">
                              <span className="text-bold">Source: </span> FTF
                            </div>
                          </div>
                          <Tab
                            onClick={() => onChangePanel(1)}
                            className={({ selected }) =>
                              classNames(
                                "w-40 py-2.5 text-sm font-raleway font-medium text-gray-color focus:outline-none",
                                selected
                                  ? "bg-white w-40"
                                  : "text-cyan-color hover:bg-cyan-color/[0.12]"
                              )
                            }
                          >
                            General Details
                          </Tab>

                          <Tab
                            onClick={() => onChangePanel(2)}
                            className={({ selected }) =>
                              classNames(
                                "w-40 py-2.5 text-sm font-raleway font-medium text-gray-color focus:outline-none",
                                selected
                                  ? "bg-white w-40"
                                  : "text-cyan-color hover:bg-cyan-color/[0.12]"
                              )
                            }
                          >
                            Videos
                          </Tab>

                          <Tab
                            onClick={() => onChangePanel(3)}
                            className={({ selected }) =>
                              classNames(
                                "w-40 py-2.5 text-sm font-raleway font-medium text-gray-color focus:outline-none",
                                selected
                                  ? "bg-white w-40"
                                  : "text-cyan-color hover:bg-cyan-color/[0.12]"
                              )
                            }
                          >
                            Conclusion
                          </Tab>
                        </Tab.List>
                        <Tab.Panels className="grid grid-cols-2 gap-5">
                          <Tab.Panel>
                            <div
                              className={
                                panel === 1 ? "active-panel" : "inactive-panel"
                              }
                            >
                              Hola Tierra
                            </div>
                          </Tab.Panel>
                          <Tab.Panel>
                            <div
                              className={
                                panel === 2 ? "active-panel" : "inactive-panel"
                              }
                            >
                              Hola Sol
                            </div>
                          </Tab.Panel>
                          <Tab.Panel>
                            <div
                              className={
                                panel === 3 ? "active-panel" : "inactive-panel"
                              }
                            >
                              Hola Luna
                            </div>
                          </Tab.Panel>
                        </Tab.Panels>
                      </Tab.Group>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default UserView;
