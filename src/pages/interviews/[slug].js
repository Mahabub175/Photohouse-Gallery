/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  FaShare,
  FaUser,
  FaInstagram,
  FaFacebookF,
  FaGlobe,
} from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import ShareModal from "../../components/UI/ShareModal";
import { base_url } from "../../configs";
import logo_dark from "../../Images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { MailingList } from "../../components/Contact/MailingList";
import moment from "moment/moment";
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
          setAllInterview(interviewData);

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
              <div className="flex items-center gap-4 ml-6">
                {interview?.interviewer_facebook_link && (
                  <a
                    href={interview?.interviewer_facebook_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookF className="text-xl" />
                  </a>
                )}
                {interview?.interviewer_instagram_link && (
                  <a
                    href={interview?.interviewer_instagram_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                )}
              </div>
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
          <Image
            src={
              interview?.thumbnail_image
                ? `${base_url}/${interview?.thumbnail_image}`
                : "https://i.ibb.co/PNQkmRf/cont.jpg"
            }
            alt={interview?.title}
            width={1800}
            height={2500}
            className="absolute inset-0 w-full h-screen object-cover rounded-xl"
          />
        </div>
        <div className="p-5 flex-1">
          <div
            className="mt-4"
            dangerouslySetInnerHTML={{
              __html: interview.content,
            }}
          />
          <div className="border-y py-5 mt-20 text-center">
            <h2 className="text-white text-xl font-semibold mb-4">
              {interview?.interviewee_name}
            </h2>
            <div className="flex items-center gap-6 justify-center">
              {interview?.interviewee_facebook_link && (
                <a
                  href={interview?.interviewee_facebook_link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF className="text-xl" />
                </a>
              )}
              {interview?.interviewee_instagram_link && (
                <a
                  href={interview?.interviewee_instagram_link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="text-xl" />
                </a>
              )}
              {interview?.interviewee_other_link && (
                <a
                  href={interview?.interviewee_other_link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGlobe className="text-xl" />
                </a>
              )}
            </div>
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
              Interviews are coming soon! Stay Connected!
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-stretch">
            {allInterview?.slice(0, 3).map((item) => {
              const shareUrl = `https://www.photohousemagazine.com/interviews/${item?.slug}`;
              return (
                <div
                  key={item?.id}
                  className="relative mx-auto rounded-xl group flex flex-col"
                >
                  <Link href={`/interviews/${item?.slug}`} passHref>
                    <a className="relative flex-1 aspect-w-16 aspect-h-9">
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
                    </a>
                  </Link>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold group-hover:text-white/70 duration-300">
                        {item?.title}
                      </h3>
                    </div>
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
