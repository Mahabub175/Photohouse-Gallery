import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const StaticInfo = () => {
  return (
    <>
      <p className="text-5xl font-bold mb-4 font-sans">Contact Information</p>
      <p className="">Say something to start a live chat!</p>
      <ul className="break-all mt-20 text-start">
        <li className="mb-4">
          <a
            href="mailto:photohousemagazine@gmail.com"
            className="hover:underline"
          >
            <FaEnvelope className="inline mr-5" />
            photohousemagazine@gmail.com
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="hover:underline">
            <FaWhatsapp className="inline mr-3" /> +8801837240350
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            <FaTelegramPlane className="inline mr-3" /> +8801837240350
          </a>
        </li>
      </ul>
      <div className="flex flex-wrap leading-[25px] absolute bottom-6">
        <a
          href="https://www.facebook.com/photohouse.magazine"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="inline mr-6 text-[28px] hover:bg-white hover:text-black px-2 rounded-full duration-300" />
        </a>
        <a
          href="https://twitter.com/photohouse_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter className="inline mx-6 text-[32px] hover:bg-white hover:text-black px-2 rounded-full duration-300" />
        </a>
        <a
          href="https://www.instagram.com/photohouse_magazine/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="inline mx-6 text-[32px] hover:bg-white hover:text-black px-2 rounded-full duration-300" />
        </a>
      </div>
    </>
  );
};
