/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { interviewData } from "../../assets/data/interviewData";
import { FaShare } from "react-icons/fa";
import ShareModal from "../../components/UI/ShareModal";
import Link from "next/link";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  const handleShareClick = (url) => {
    setCurrentUrl(url);
    setModalOpen(true);
  };

  return (
    <section className="py-4 max-w-[1800px] m-auto pb-20 px-4 lg:px-0">
      <div className="flex flex-col justify-center items-center border-b-gray-500 border-b-2 pb-2">
        <h1 className="text-white sm:text-5xl text-3xl tracking-wider">
          Interviews
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center mt-10">
        {interviewData?.map((item) => {
          const shareUrl = `https://www.photohousemagazine.com/interviews/${item?.slug}`;
          return (
            <div
              key={item?.id}
              className="relative mx-auto rounded-xl border group"
            >
              <div className="relative">
                <img
                  src={"https://i.ibb.co/PNQkmRf/cont.jpg"}
                  alt=""
                  className="w-full h-full rounded-t-xl"
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
              <div className="p-5 mt-6">
                <div className="flex items-start justify-between gap-10">
                  <div>
                    <h3 className="text-xl lg:text-3xl font-bold">
                      {item?.title}
                    </h3>
                    <p className="text-semibold mt-4 text-xs lg:text-sm">
                      {item?.short_description}
                    </p>
                  </div>
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
      <ShareModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        url={currentUrl}
      />
    </section>
  );
};

export default Index;
