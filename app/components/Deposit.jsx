import React, { useState } from 'react';
import Modal from './Modal';

const Deposit = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const modalButtons = [
    {
      label: "Cancel",
      className: "btn-outline",
      onClick: handleCloseModal,
    },
    {
      label: "Deposit",
      className: "btn-primary",
      onClick: () => {
        console.log("Deposit Confirmed!");
        handleCloseModal();
      },
    },
  ];

  return (
    <>
      <button className="btn btn-primary" onClick={handleOpenModal}>
        Deposit
      </button>

      <Modal
        title="Deposit Funds"
        body={<p>Enter the amount you wish to deposit:</p>}
        buttons={modalButtons}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Deposit;
