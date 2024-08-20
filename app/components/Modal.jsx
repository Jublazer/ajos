import React from 'react';

const Modal = ({ title, body, buttons, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center w-full min-w-full bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl text-orange-600 font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✖
          </button>
        </div>
        <div className="mt-4 text-black-600">
          {body}
        </div>
        <div className="mt-6 flex justify-end space-x-2">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`btn ${button.className}`}
              onClick={button.onClick}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;





// How to add this code bellow on any page or component for the modal

// import React, { useState } from 'react';
// import Modal from '../components/Modal';

// export default function Home() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const modalButtons = [
//     {
//       label: "Cancel",
//       className: "btn-outline",
//       onClick: handleCloseModal,
//     },
//     {
//       label: "Confirm",
//       className: "btn-primary",
//       onClick: () => {
//         console.log("Confirmed!");
//         handleCloseModal();
//       },
//     },
//   ];

//   return (
//     <div className="p-8">
//       <button className="btn btn-primary" onClick={handleOpenModal}>
//         Open Modal
//       </button>

//       <Modal
//         title="Confirmation"
//         body={<p>Are you sure you want to perform this action?</p>}
//         buttons={modalButtons}
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//       />
//     </div>
//   );
// }
