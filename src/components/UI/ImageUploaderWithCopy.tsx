/* eslint-disable @next/next/no-img-element */
import { useState, useRef } from "react";
import { FaImage, FaCopy, FaTrash } from "react-icons/fa";
import { base_url } from "../../configs";
import toast from "react-hot-toast";

const ImageUploaderWithCopy = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        setLoading(true);
        const response = await fetch(`${base_url}/upload`, {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Failed to upload the image");
        }

        const result = await response.json();
        const uploadedUrl = `${base_url}/${result.url}`;
        setImageUrl(uploadedUrl);

        toast.success("Image uploaded successfully!");
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Failed to upload image.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleCopyUrl = () => {
    if (imageUrl) {
      navigator.clipboard.writeText(imageUrl).then(() => {
        toast.success("Image URL copied to clipboard!");
      });
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleReset = () => {
    setImageUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col items-center p-4 border border-dashed rounded-lg border-gray-400">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      {loading ? (
        <p className="text-blue-500 mb-2">Uploading...</p>
      ) : imageUrl ? (
        <>
          <img
            src={imageUrl}
            alt="Uploaded"
            className="w-full h-auto rounded-md mb-2"
          />
          <div className="flex gap-4">
            <button
              type="button"
              className="btn-blue px-4 py-2 rounded-md"
              onClick={handleCopyUrl}
            >
              <FaCopy className="inline mr-2" />
              Copy URL
            </button>
            <button
              type="button"
              className="btn-danger px-4 py-2 rounded-md"
              onClick={handleReset}
            >
              <FaTrash className="inline mr-2" />
              Delete
            </button>
          </div>
        </>
      ) : (
        <>
          <FaImage className="text-7xl mb-2" />
          <p className="text-gray-500 mb-2">Click to upload image</p>
          <button
            type="button"
            className="btn-blue px-4 py-2 rounded-md"
            onClick={handleUploadClick}
          >
            Upload Image
          </button>
        </>
      )}
    </div>
  );
};

export default ImageUploaderWithCopy;
