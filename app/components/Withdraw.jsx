import React, { useState } from 'react';
import Modal from './Modal';

const Withdraw = () => {
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
      label: "Withdraw",
      className: "btn-primary",
      onClick: () => {
        console.log("Withdraw Confirmed!");
        handleCloseModal();
      },
    },
  ];

  return (
    <>
      <button className="btn btn-secondary" onClick={handleOpenModal}>
        Withdraw
      </button>

      <Modal
        title="Withdraw Funds"
        body={<p>Enter the amount you wish to withdraw:</p>}
        buttons={modalButtons}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Withdraw;
