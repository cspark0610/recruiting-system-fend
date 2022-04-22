import UserDialog from "../../components/dialog/UserDialog";
import { useModal } from "../../hooks/useModal";

const UserView = () => {
  /*  */
  const { isOpen, openDialog } = useModal();

  return (
    <>
      <button
        className="cursor-pointer rounded-sm bg-white font-raleway text-gray-color font-bold text-sm laptop:w-[75px] laptop:h-[25px] shadow-lg border border-gray-color mt-5"
        onClick={isOpen}
      >
        Open
      </button>
      {openDialog && <UserDialog />}
    </>
  );
};

export default UserView;
