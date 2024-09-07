/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  FaShare,
  FaUser,
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import ShareModal from "../../components/UI/ShareModal";
import { base_url } from "../../configs";
import logo_dark from "../../Images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { MailingList } from "../../components/Contact/MailingList";
import moment from "moment/moment";
import { FaXTwitter } from "react-icons/fa6";

const InterviewPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [interview, setInterview] = useState(null);
  const [allInterview, setAllInterview] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (slug) {
      const fetchInterview = async () => {
        try {
          const allInterviews = await fetch(`${base_url}/interviews`);
          const interviewData = await allInterviews.json();

          setAllInterview(interviewData.filter((item) => item.slug !== slug));

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
    return (
      <div className="text-center text-red-500">
        Error: {error} {window.location.reload()}
      </div>
    );
  }

  if (!interview) {
    return <div className="text-center text-white">Interview not found.</div>;
  }

  const shareUrl = `https://www.photohousemagazine.com/interviews/${interview?.slug}`;

  return (
    <section className="py-4 max-w-[1600px] m-auto pb-20 px-4 lg:px-0">
      <div className="max-w-[800px] mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-6">
            <div>
              {interview?.interviewer_name && (
                <p className="font-semibold flex items-center gap-2 mb-2">
                  <FaUser />
                  {interview?.interviewer_name}
                </p>
              )}
            </div>
            <p className="flex items-center gap-2">
              <IoIosTime />
              {moment(interview?.created_at).format("MMM Do, YYYY")}
            </p>
          </div>
          <button
            onClick={() => handleShareClick(shareUrl)}
            className="text-white bg-gray-700 p-2 rounded-full hover:scale-105 duration-300 -mt-2"
          >
            <FaShare />
          </button>
        </div>
        <h1 className="text-white sm:text-5xl text-3xl tracking-wider my-10">
          {interview.title}
        </h1>
        <div className="relative flex-1 aspect-w-16 aspect-h-9">
          <img
            src={`${base_url}/${interview?.thumbnail_image}`}
            alt={interview?.title}
            className="w-fit !h-full rounded-xl object-cover mx-auto"
          />
          <Image
            src={
              interview?.thumbnail_image
                ? `${base_url}/${interview?.thumbnail_image}`
                : "https://i.ibb.co/PNQkmRf/cont.jpg"
            }
            alt={interview?.title || "Interview Thumbnail"}
            layout="fill"
            objectFit="cover"
            className="rounded-xl mx-auto"
            priority
          />
        </div>
        <div className="p-5 flex-1 lg:mt-10">
          <div
            className="mt-4 mb-10"
            dangerouslySetInnerHTML={{
              __html: interview?.content,
            }}
          />
          <div className="border-y py-4 lg:mt-20 text-center flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-4 lg:mb-0">
              <div className="flex flex-wrap leading-[25px] md:justify-center items-center gap-4">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    shareUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="inline text-[27px] hover:bg-white hover:text-black px-2 rounded-full duration-300 mr-1" />
                </a>
                <a
                  href={`https://x.com/intent/tweet?url=${encodeURIComponent(
                    shareUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="inline text-[32px] hover:bg-white hover:text-black px-2 rounded-full duration-300 mr-1" />
                </a>
                <a
                  href={`https://www.instagram.com/?url=${encodeURIComponent(
                    shareUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="inline text-[32px] hover:bg-white hover:text-black px-2 rounded-full duration-300" />
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                    shareUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="inline text-[32px] hover:bg-white hover:text-black px-2 rounded-full duration-300" />
                </a>
              </div>
            </div>
            <Link href={"/interviews"}>
              <span className="font-bold hover:text-gray-400 duration-300">
                {" "}
                Interviews
              </span>
            </Link>
          </div>
        </div>
        <ShareModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          url={currentUrl}
        />
      </div>
      <div className="mt-10 lg:mt-32">
        <div className="flex items-center justify-between">
          <h3 className="mb-10 text-xl font-bold">Related Interviews</h3>
          <Link href={`/interviews`}>
            <h3 className="mb-10 text-xl font-bold hover:text-white/70 duration-300">
              See All
            </h3>
          </Link>
        </div>
        {allInterview?.length === 0 ? (
          <div className="flex items-center justify-center h-[300px]">
            <h2 className="text-white text-xl">
              Related Interviews are coming soon! Stay Connected!
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-stretch">
            {allInterview?.slice(0, 12).map((item) => {
              const shareUrl = `https://www.photohousemagazine.com/interviews/${item?.slug}`;
              return (
                <div
                  key={item?.id}
                  className="relative mx-auto rounded-xl group flex items-start gap-4"
                >
                  <Link href={`/interviews/${item?.slug}`} passHref>
                    <div className="relative flex-1 aspect-w-16 aspect-h-9">
                      <Image
                        src={
                          item?.thumbnail_image
                            ? `${base_url}/${item?.thumbnail_image}`
                            : "https://i.ibb.co/PNQkmRf/cont.jpg"
                        }
                        alt={item?.title}
                        height={800}
                        width={600}
                        className="absolute inset-0 w-full h-full object-cover rounded-xl"
                      />
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleShareClick(shareUrl);
                          }}
                          className="text-white bg-gray-700 p-2 rounded-full hover:scale-105 duration-300"
                        >
                          <FaShare />
                        </button>
                      </div>
                    </div>
                  </Link>
                  <div className="p-2 flex-1 flex flex-col justify-between">
                    <Link href={`/interviews/${item?.slug}`} passHref>
                      <h3 className="text-2xl font-bold group-hover:text-white/70 duration-300 mb-3">
                        {item?.title}
                      </h3>
                    </Link>
                    <p className="font-bold mb-6 text-sm">
                      Profession: {item?.interviewee_profession}
                    </p>
                    <Link href={`/interviews/${item?.slug}`} passHref>
                      <button className="mr-2 mb-2 relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#00000055] border border-gray-400 rounded-2xl group w-32">
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
      </div>
      <MailingList />
    </section>
  );
};

export default InterviewPage;
