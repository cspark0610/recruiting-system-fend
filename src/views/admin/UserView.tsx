import { useState } from "react";
import UserDialog from "../../components/dialog/UserDialog";

const UserView = () => {
  /*  */
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const isOpen = () => {
    setOpenDialog(true);
  };

  const isClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <button
        className="cursor-pointer rounded-sm bg-white font-raleway text-gray-color font-bold text-sm laptop:w-[75px] laptop:h-[25px] shadow-lg border border-gray-color mt-24"
        onClick={isOpen}
      >
        Open
      </button>
      {openDialog && <UserDialog isDialogClose={isClose} />}
    </>
  );
};

export default UserView;
