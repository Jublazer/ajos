import React, { useState } from 'react';
import Modal from './Modal';

const Transfer = () => {
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
      label: "Transfer",
      className: "btn-primary",
      onClick: () => {
        console.log("Transfer Confirmed!");
        handleCloseModal();
      },
    },
  ];

  return (
    <>
      <button className="btn btn-accent btn-outline" onClick={handleOpenModal}>
        Transfer
      </button>

      <Modal
        title="Transfer Funds"
        body={<p>Enter the recipient and amount you wish to transfer:</p>}
        buttons={modalButtons}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Transfer;
