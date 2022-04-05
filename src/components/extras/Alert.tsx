import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

import "./../../assets/scss/alert.scss";

const Alert = () => {
  /*  */
  const { t } = useTranslation();

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
          <p>{t("alert_message")}</p>
        </div>
        <div className="vector"></div>
      </div>
    </Transition>
  );
};

export default Alert;
