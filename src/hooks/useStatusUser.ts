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

  useEffect(() => {
    if (approve && isConfirm) {
      setColor("bg-green-color");
      setApproved(false);
    } else {
      if (doubting && isConfirm) {
        setColor("bg-yellow-color");
        setDoubting(false);
      } else {
        if (dismiss && isConfirm) {
          setColor("bg-red-dark");
          setDismiss(false);
        } else {
          if (reject && isConfirm) {
            setColor(color);
            setReject(false);
          }
        }
      }
    }
  }, [approve, doubting, dismiss, reject, isConfirm, color]);

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
  };

  return {
    approve,
    doubting,
    dismiss,
    reject,
    color,
    isConfirm,
    isApproved,
    isDoubting,
    isDismiss,
    isReject,
    isStatusConfirm,
    setApproved,
    setDoubting,
    setDismiss,
    setReject,
  };
}
