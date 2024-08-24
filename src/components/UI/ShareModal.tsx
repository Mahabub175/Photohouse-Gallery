import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { HiX } from "react-icons/hi";
import { SiX } from "react-icons/si";
import toast from "react-hot-toast";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

const ShareModal = ({ isOpen, onClose, url }: ShareModalProps) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    toast.success("Link copied to clipboard!");
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleOverlayClick}
    >
      <div
        className={`relative bg-white p-4 rounded-lg shadow-lg max-w-sm w-full transform transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 p-2 rounded-full"
        >
          <HiX className="text-2xl" />
        </button>
        <h2 className="text-lg font-bold mb-4 text-black">Share This Post</h2>
        <div className="flex justify-around mb-4 mt-10">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-4xl"
          >
            <FaFacebook />
          </a>
          <a
            href={`https://x.com/intent/tweet?url=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-3xl"
          >
            <SiX />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              url
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 text-4xl"
          >
            <FaLinkedin />
          </a>
          <a
            href={`https://www.instagram.com/?url=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 text-4xl"
          >
            <FaInstagram />
          </a>
          <button
            onClick={handleCopyLink}
            className="flex items-center space-x-2 p-2 bg-gray-800 text-white rounded-lg"
          >
            <IoIosLink />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
