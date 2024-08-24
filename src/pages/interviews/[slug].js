import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FaShare } from "react-icons/fa";
import ShareModal from "../../components/UI/ShareModal";
import { base_url } from "../../configs";
import logo_dark from "../../Images/logo.png";
import Image from "next/image";

const InterviewPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [interview, setInterview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (slug) {
      const fetchInterview = async () => {
        try {
          const response = await fetch(`${base_url}/interviews/${slug}`);
          if (!response.ok) {
            throw new Error("Failed to fetch interview");
          }
          const data = await response.json();
          setInterview(data);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };

      fetchInterview();
    }
  }, [slug]);

  const handleShareClick = (url) => {
    setCurrentUrl(url);
    setModalOpen(true);
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
            className={`cursor-pointer rounded-md`}
          />
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!interview) {
    return <div className="text-center text-white">Interview not found.</div>;
  }

  const shareUrl = `https://www.photohousemagazine.com/interviews/${interview?.slug}`;

  return (
    <section className="py-4 max-w-[1800px] m-auto pb-20 px-4 lg:px-0">
      <div className="flex items-center justify-between">
        <h1 className="text-white sm:text-5xl text-3xl tracking-wider my-10">
          {interview.title}
        </h1>
        <button
          onClick={() => handleShareClick(shareUrl)}
          className="text-white bg-gray-700 p-2 rounded-full hover:scale-105 duration-300"
        >
          <FaShare />
        </button>
      </div>
      <div className="relative flex-1 aspect-w-16 aspect-h-9">
        <Image
          src={
            interview?.thumbnail_image
              ? `${base_url}/${interview?.thumbnail_image}`
              : "https://i.ibb.co/PNQkmRf/cont.jpg"
          }
          alt={interview?.title}
          height={600}
          width={600}
          className="absolute inset-0 w-full h-full object-cover rounded-t-xl"
        />
        {/* <img
          src={
            interview?.thumbnail_image
              ? `${base_url}/${interview?.thumbnail_image}`
              : "https://i.ibb.co/PNQkmRf/cont.jpg"
          }
          alt={interview?.title}
          height={400}
          width={400}
          className="absolute inset-0 w-full h-full object-cover rounded-t-xl"
        /> */}
      </div>
      <div className="p-5 flex-1">
        <div
          className="mt-4"
          dangerouslySetInnerHTML={{
            __html: interview.content,
          }}
        />
      </div>
      <ShareModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        url={currentUrl}
      />
    </section>
  );
};

export default InterviewPage;
