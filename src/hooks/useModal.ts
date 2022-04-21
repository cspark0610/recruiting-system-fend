import { useState } from "react";

export function useModal() {
  /*  */
  const [openDialog, setOpenDialog] = useState(false);

  const isOpen = () => {
    setOpenDialog(true);
  };

  const isClose = () => {
    setOpenDialog(false);
  };

  return {
    isOpen,
    isClose,
    openDialog,
    setOpenDialog,
  };
}
