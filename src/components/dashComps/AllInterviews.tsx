import React, { useEffect, useState } from "react";
import { base_url } from "../../configs";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import logo_dark from "../../Images/logo.png";
import DeleteModal from "../UI/DeleteModal";

interface Interview {
  _id: string;
  title: string;
  slug: string;
  thumbnail_image: string;
}

const AllInterviews: React.FC = () => {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedInterview, setSelectedInterview] = useState<Interview | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const response = await fetch(`${base_url}/interviews`);
        if (!response.ok) {
          throw new Error("Failed to fetch interviews");
        }
        const data = await response.json();
        setInterviews(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchInterviews();
  }, []);

  const openModal = (interview: Interview) => {
    setSelectedInterview(interview);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedInterview(null);
  };

  const handleDelete = async () => {
    if (!selectedInterview) return;

    try {
      const response = await fetch(
        `${base_url}/interviews/${selectedInterview._id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete interview");
      }
      setInterviews(
        interviews.filter(
          (interview) => interview._id !== selectedInterview._id
        )
      );
      closeModal();
    } catch (err: any) {
      setError(err.message);
      closeModal();
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-40 backdrop-blur-sm bg-[#06202A]/30 flex items-center min-h-[100vh]">
        <div className="animate-bounce mx-auto">
          <Image
            priority
            src={logo_dark}
            width={160}
            height={54}
            alt="logo"
            className="cursor-pointer rounded-md"
          />
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-4">
      {interviews.length === 0 ? (
        <div className="text-center text-gray-400 text-lg">
          No interviews found. Add to see interviews
        </div>
      ) : (
        <table className="w-full text-center overflow-auto">
          <thead>
            <tr className="text-xl">
              <th className="py-2 px-4 border-b">Thumbnail</th>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Slug</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {interviews?.map((interview) => (
              <tr key={interview._id}>
                <td className="py-2 px-4 border-b">
                  <Image
                    src={`${base_url}/${interview.thumbnail_image}`}
                    alt={interview.title}
                    width={60}
                    height={60}
                    className="object-cover rounded-full"
                  />
                </td>
                <td className="py-2 px-4 border-b font-bold">
                  {interview.title}
                </td>
                <td className="py-2 px-4 border-b font-bold">
                  {interview.slug}
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="text-red-500 hover:text-red-700 text-2xl duration-300"
                    onClick={() => openModal(interview)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {isModalOpen && selectedInterview && (
        <DeleteModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onDelete={handleDelete}
          itemName={selectedInterview.title}
        />
      )}
    </div>
  );
};

export default AllInterviews;
