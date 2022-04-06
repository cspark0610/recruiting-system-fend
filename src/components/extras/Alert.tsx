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
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
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
