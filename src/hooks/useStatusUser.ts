import { useEffect, useState } from "react";

export function UseStatusUser() {
  /* STATES OF CONTROL FROM BUTTONS */
  const [approve, setApproved] = useState(false);
  const [doubting, setDoubting] = useState(false);
  const [dismiss, setDismiss] = useState(false);
  const [reject, setReject] = useState(false);

  /* STATES OF CONTROL FROM HEADER DIALOG */
  const [color, setColor] = useState("bg-gray-color");

  /* STATES OF CONTROL FROM MODAL */
  const [isConfirm, setIsConfirm] = useState(false);
  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    if (approve && isConfirm) {
      setColor("bg-green-color");
    } else {
      if (doubting && isConfirm) {
        setColor("bg-yellow-color");
      } else {
        if (dismiss && isConfirm) {
          setColor("bg-red-dark");
        } else {
          if (reject && isConfirm) {
            setColor(color);
          }
        }
      }
    }
  }, [isConfirm]);

  const isApproved = () => {
    setApproved(!approve);
  };

  const isDoubting = () => {
    setDoubting(!doubting);
  };

  const isDismiss = () => {
    setDismiss(!dismiss);
  };

  const isReject = () => {
    setReject(!reject);
  };

  const isStatusConfirm = () => {
    setIsConfirm(true);
    setOpenModal(false);
  };

  return {
    isApproved,
    isDoubting,
    isDismiss,
    isReject,
    isStatusConfirm,
    setOpenModal,
    openModal,
    isConfirm,
    approve,
    doubting,
    dismiss,
    reject,
    color,
  };
}
