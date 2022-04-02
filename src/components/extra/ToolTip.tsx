import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import "../../assets/scss/ToolTip.scss";

interface Props {
  message: string;
}

const ToolTip: React.FC<Props> = ({ message }) => {
  return (
    <Transition
      show={true}
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div className="container-tooltip">
        <div className="tooltip" data-tooltip="tooltip-test">
          <p>{message}</p>
        </div>
        <div className="vector"></div>
      </div>
    </Transition>
  );
};

export default ToolTip;
