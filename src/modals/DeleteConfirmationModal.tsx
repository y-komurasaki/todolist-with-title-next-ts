import React from "react";
import Modal from "react-modal";

interface DeleteConfirmationModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  handleDeleteConfirmation: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  modalIsOpen,
  closeModal,
  handleDeleteConfirmation,
}) => {
  const handleDeleteClick = () => {
    handleDeleteConfirmation();
    closeModal();
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Delete Task List Confirmation"
      className="w-1/3 mx-auto mt-20 p-5 bg-white border border-gray-300 rounded-lg"
    >
      <h2 className="text-2xl mb-4">本当に削除しますか？</h2>
      <div className="flex justify-end">
        <button
          className="bg-red-500 text-white py-2 px-4 rounded mr-4"
          onClick={handleDeleteClick}
        >
          削除
        </button>
        <button
          className="bg-gray-300 text-black py-2 px-4 rounded"
          onClick={closeModal}
        >
          キャンセル
        </button>
      </div>
    </Modal>
  );
};

export default DeleteConfirmationModal;
