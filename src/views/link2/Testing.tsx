import React, { useState } from "react";
import Modal from "../../components/extra/Modal";

const Testing: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <div>
      {!open ? (
        <button className="bg-cyan-color border p-4" onClick={toggleModal}>
          Abrir Modal
        </button>
      ) : (
        <Modal handler={toggleModal} />
      )}
    </div>
  );
};

export default Testing;
