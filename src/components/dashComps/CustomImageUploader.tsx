/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect } from "react";
import { FaImage } from "react-icons/fa";

interface CustomImageUploaderProps {
  title: string;
  setImageUrl: (url: string | null, file: File | null) => void;
  imageUrl: string | null;
}

const CustomImageUploader: React.FC<CustomImageUploaderProps> = ({
  title,
  setImageUrl,
  imageUrl,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(imageUrl);
  const [dragging, setDragging] = useState<boolean>(false);

  useEffect(() => {
    setPreviewUrl(imageUrl);
  }, [imageUrl]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setPreviewUrl(imageUrl);
      };
      reader.readAsDataURL(file);
      setImageUrl(URL.createObjectURL(file), file);
    }
  };

  const handleClearImage = () => {
    setPreviewUrl(null);
    setImageUrl(null, null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setDragging(false);
    const file = event.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setPreviewUrl(imageUrl);
      };
      reader.readAsDataURL(file);
      setImageUrl(URL.createObjectURL(file), file);
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center p-4 border border-dashed rounded-lg ${
        dragging ? "border-blue-400" : "border-gray-400"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      {previewUrl ? (
        <>
          <img
            src={previewUrl}
            alt="Thumbnail Preview"
            className="w-full h-auto rounded-md mb-2"
          />
          <button
            type="button"
            className="mt-2 btn-danger px-4 py-2 rounded-md"
            onClick={handleClearImage}
          >
            Clear Image
          </button>
        </>
      ) : (
        <>
          <FaImage className="text-7xl" />
          <p className="text-gray-500 mb-2">{title}</p>
          <button
            type="button"
            className="btn-blue px-4 py-2 rounded-md"
            onClick={handleClick}
          >
            Upload Image
          </button>
        </>
      )}
    </div>
  );
};

export default CustomImageUploader;
