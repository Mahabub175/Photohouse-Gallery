import { HiX } from "react-icons/hi";
import toast from "react-hot-toast";
import React from "react";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  itemName: string;
}

const DeleteModal = ({
  isOpen,
  onClose,
  onDelete,
  itemName,
}: DeleteModalProps) => {
  const handleDelete = () => {
    onDelete();
    toast.success(`${itemName} has been deleted!`);
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-500 ease-out ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleOverlayClick}
    >
      <div
        className={`relative bg-white p-6 rounded-lg shadow-lg max-w-sm w-full transform transition-transform duration-500 ease-out ${
          isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 p-2 rounded-full"
        >
          <HiX className="text-2xl" />
        </button>
        <h2 className="text-lg font-bold mb-4 text-black">
          Delete {itemName}?
        </h2>
        <p className="text-gray-700 mb-6">
          Are you sure you want to delete this {itemName}? This action cannot be
          undone.
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 transition-colors text-black rounded-full font-semibold"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 transition-colors text-white rounded-full font-semibold"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
