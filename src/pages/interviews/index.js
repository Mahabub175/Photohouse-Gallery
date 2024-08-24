import { useState, useEffect } from "react";
import { FaShare } from "react-icons/fa";
import ShareModal from "../../components/UI/ShareModal";
import Link from "next/link";
import Image from "next/image";
import { base_url } from "../../configs.ts";
import logo_dark from "../../Images/logo.png";

const Index = () => {
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

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
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchInterviews();
  }, []);

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

  return (
    <section className="py-4 max-w-[1800px] m-auto pb-20 px-4 lg:px-0">
      <div className="flex flex-col justify-center items-center border-b-gray-500 border-b-2 pb-2">
        <h1 className="text-white sm:text-5xl text-3xl tracking-wider">
          Interviews
        </h1>
      </div>
      {interviews.length === 0 ? (
        <div className="flex items-center justify-center h-[300px]">
          <h2 className="text-white text-xl">
            Interviews are coming soon! Stay Connected!
          </h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center items-stretch mt-10">
          {interviews.map((item) => {
            const shareUrl = `https://www.photohousemagazine.com/interviews/${item?.slug}`;
            return (
              <div
                key={item?.id}
                className="relative mx-auto rounded-xl border group flex flex-col"
              >
                <div className="relative flex-1 aspect-w-16 aspect-h-9">
                  <Image
                    src={
                      item?.thumbnail_image
                        ? `${base_url}/${item?.thumbnail_image}`
                        : "https://i.ibb.co/PNQkmRf/cont.jpg"
                    }
                    alt={item?.title}
                    height={200}
                    width={400}
                    className="absolute inset-0 w-full h-full object-cover rounded-t-xl"
                  />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => handleShareClick(shareUrl)}
                      className="text-white bg-gray-700 p-2 rounded-full hover:scale-105 duration-300"
                    >
                      <FaShare />
                    </button>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold">
                      {item?.title}
                    </h3>
                    <div
                      className="mt-4 text-xs lg:text-sm"
                      dangerouslySetInnerHTML={{
                        __html: item?.short_descriptions,
                      }}
                    />
                  </div>
                  <Link href={`interviews/${item?.slug}`}>
                    <button className="mr-2 mb-2 relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#00000055] border border-gray-400 rounded-xl group w-full mt-10">
                      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-500 rounded-xl group-hover:w-full group-hover:h-full"></span>
                      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                      <span className="relative">View Details</span>
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <ShareModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        url={currentUrl}
      />
    </section>
  );
};

export default Index;
