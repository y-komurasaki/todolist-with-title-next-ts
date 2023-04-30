import React from "react";
import Modal from "react-modal";

interface ErrorMessageModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  errorMessage: string;
}

const ErrorMessageModal: React.FC<ErrorMessageModalProps> = ({
  modalIsOpen,
  closeModal,
  errorMessage,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Error Message"
      className="w-1/3 mx-auto mt-20 p-5 bg-white border border-gray-300 rounded-lg"
    >
      <h2 className="text-2xl mb-4">{errorMessage}</h2>
      <div className="flex justify-end">
        <button
          className="bg-gray-300 text-black py-2 px-4 rounded"
          onClick={closeModal}
        >
          閉じる
        </button>
      </div>
    </Modal>
  );
};

export default ErrorMessageModal;
