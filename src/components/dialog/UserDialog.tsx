import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Panels from "./panels/Panels";
import HeaderDialog from "../header/HeaderDialog";
import Modal from "../extras/Modal";
import { UseStatusUser } from "../../hooks/useStatusUser";

interface Props {
  isDialogClose: any;
}

const UserDialog: React.FC<Props> = ({ isDialogClose }) => {
  /*  */
  const [openDialog, setOpenDialog] = useState(true);
  const {
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
  } = UseStatusUser();

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
                    alt="approve"
                    classes={true}
                    image="approve"
                    isVerify={isStatusConfirm}
                    message="An automatic email is going to be send to this candidate with instructions for next step."
                    onClick={isApproved}
                    setValue={setApproved}
                    status="You`ve approved this Candidate!"
                    value={approve}
                  />
                )}
                {doubting && (
                  <Modal
                    alt="doubting"
                    classes={true}
                    image="doubting"
                    isVerify={isStatusConfirm}
                    onClick={isDoubting}
                    setValue={setDoubting}
                    status='"in doubt".'
                    title="Your candidate has been marked as "
                    value={doubting}
                  />
                )}
                {dismiss && (
                  <Modal
                    alt="dismiss"
                    classes={true}
                    image="dismiss"
                    isVerify={isStatusConfirm}
                    message="Remember to fill your motives for this decition in conclusions"
                    onClick={isDismiss}
                    setValue={setDismiss}
                    status="dismissed."
                    title="This candidate has been "
                    value={dismiss}
                  />
                )}
                {reject && (
                  <Modal
                    alt="reject"
                    classes={false}
                    image="reject"
                    isVerify={isStatusConfirm}
                    message="This candidate won’t be able to apply for any position ever again. Please, explain your decition here:"
                    onClick={isReject}
                    setValue={setReject}
                    value={reject}
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
