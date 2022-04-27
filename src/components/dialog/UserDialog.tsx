import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Panels from "./panels/Panels";
import HeaderDialog from "../header/HeaderDialog";
import Modal from "../extras/Modal";

interface Props {
  isDialogClose: any;
}

const UserDialog: React.FC<Props> = ({ isDialogClose }) => {
  /*  */
  const [openDialog, setOpenDialog] = useState(true);

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
  };

  return (
    <Transition.Root show={openDialog} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpenDialog}
      >
        <div className="flex items-center justify-center min-h-screen text-center p-0">
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

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 translate-y-0 scale-95"
            enterTo="opacity-100 translate-y-0 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 scale-100"
            leaveTo="opacity-0 translate-y-4 translate-y-0 scale-95"
          >
            <div className="relative inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all w-[77.313rem] h-maximum">
              <div className="bg-white">
                <HeaderDialog color={color} isClose={isDialogClose} />
                <div className="flex">
                  <Panels
                    isApproved={isApproved}
                    isDoubting={isDoubting}
                    isDismiss={isDismiss}
                    isReject={isReject}
                    isConfirmed={isConfirm}
                  />
                </div>
                {/* Modals to confirm an action */}
                {approve && (
                  <Modal
                    picture="approve"
                    title="You`ve approved this Candidate!"
                    subTitle="An automatic email is going to be send to this candidate with instructions for next step."
                    description="approve"
                    value={approve}
                    setValue={setApproved}
                    onClick={isApproved}
                    isConfirm={isStatusConfirm}
                  />
                )}
                {dismiss && (
                  <Modal
                    picture="dismiss"
                    title="This candidate has been dismissed!"
                    subTitle="Remember to fill your motives for this decition in conclusions."
                    description="dismiss"
                    value={dismiss}
                    setValue={setDismiss}
                    onClick={isDismiss}
                    isConfirm={isStatusConfirm}
                  />
                )}
                {reject && (
                  <Modal
                    picture="reject"
                    subTitle="This candidate won’t be able to apply for any position ever again. Please, explain your decition here:"
                    description="reject"
                    value={reject}
                    setValue={setReject}
                    onClick={isReject}
                    isConfirm={isStatusConfirm}
                  />
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default UserDialog;
