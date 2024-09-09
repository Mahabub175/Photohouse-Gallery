/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { FaShare } from "react-icons/fa";
import ShareModal from "../../components/UI/ShareModal";
import Link from "next/link";
import Image from "next/image";
import { base_url } from "../../configs.ts";
import logo_dark from "../../Images/logo.png";
import { Input } from "@material-tailwind/react";
import { CiSearch } from "react-icons/ci";

const Index = () => {
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const [currentTitle, setCurrentTitle] = useState(""); // New state for title
  const [currentImage, setCurrentImage] = useState(""); // New state for image
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleShareClick = (url, title, image) => {
    setCurrentUrl(url);
    setCurrentTitle(title); // Set the current title
    setCurrentImage(image); // Set the current image
    setModalOpen(true);
  };

  const filteredInterviews = interviews?.filter((interview) =>
    interview.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    return (
      <div className="text-center text-red-500">
        Error: {error}
        {window.location.reload()}
      </div>
    );
  }

  return (
    <section className="py-4 max-w-[1800px] m-auto pb-20 px-4 lg:px-5">
      <div className="flex flex-col justify-center items-center border-b-gray-500 border-b-2 pb-2">
        <h1 className="text-white sm:text-5xl text-3xl tracking-wider">
          Interviews
        </h1>
      </div>
      <div className="flex justify-between items-center mt-10 relative">
        <div></div>
        <div>
          <Input
            variant="standard"
            color="white"
            type="text"
            label="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <CiSearch className="text-white text-2xl absolute right-2 top-3" />
        </div>
      </div>
      {filteredInterviews?.length === 0 ? (
        <div className="flex items-center justify-center h-[300px]">
          <h2 className="text-gray-300 text-xl">
            Stay Connected To See Upcoming Interviews!
          </h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-stretch mt-16">
          {filteredInterviews?.map((item) => {
            const shareUrl = `https://www.photohousemagazine.com/interviews/${item?.slug}`;
            const thumbnailImage = item?.thumbnail_image
              ? `${base_url}/${item?.thumbnail_image}`
              : "https://i.ibb.co/PNQkmRf/cont.jpg"; // Set the image

            return (
              <div
                key={item?.id}
                className="relative mx-auto rounded-xl group flex items-start gap-6"
              >
                <Link href={`/interviews/${item?.slug}`} passHref>
                  <div className="relative">
                    <img
                      src={thumbnailImage}
                      alt={item?.title}
                      className="w-[200px] h-[250px] rounded-xl object-cotnaine"
                    />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleShareClick(
                            shareUrl,
                            item?.title,
                            thumbnailImage
                          );
                        }}
                        className="text-white bg-gray-700 p-3 rounded-full hover:scale-105 duration-300"
                      >
                        <FaShare />
                      </button>
                    </div>
                  </div>
                </Link>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <Link href={`/interviews/${item?.slug}`} passHref>
                    <h3 className="text-2xl font-bold group-hover:text-white/70 duration-300 mb-4">
                      {item?.title}
                    </h3>
                  </Link>
                  <p className="font-bold mb-8 text-sm">
                    Profession: {item?.interviewee_profession}
                  </p>
                  <Link href={`/interviews/${item?.slug}`} passHref>
                    <button className="mr-2 mb-2 relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#00000055] border border-gray-400 rounded-2xl group w-40">
                      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-500 rounded-full group-hover:w-60 group-hover:h-60"></span>
                      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                      <span className="relative">Read More</span>
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
        title={currentTitle}
        image={currentImage}
      />
    </section>
  );
};

export default Index;
