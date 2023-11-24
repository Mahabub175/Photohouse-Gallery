import Image from "next/image";
import Link from "next/link";
import {
  FaBattleNet,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo_dark from "../../Images/logo.png";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="px-4 pt-4 pb-2 bg-[#292929]">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <Image
                priority
                src={logo_dark}
                width={200}
                height={67}
                alt="logo"
                className={`cursor-pointer rounded-md`}
              />
            </a>
            <div className="flex flex-wrap leading-[25px] justify-center items-center">
              <span className="text-bold ml-2 mr-2">Follow Us:</span>
              <a
                href="https://www.facebook.com/photohouse.magazine"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="inline text-[28px] hover:bg-white hover:text-black px-2 rounded-full duration-300 mr-1" />
              </a>
              <a
                href="https://twitter.com/photohouse_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="inline text-[32px] hover:bg-white hover:text-black px-2 rounded-full duration-300 mr-1" />
              </a>
              <a
                href="https://www.instagram.com/photohouse_magazine/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="inline text-[32px] hover:bg-white hover:text-black px-2 rounded-full duration-300" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:gap-6 md:grid-cols-3">
            <div>
              <ul></ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase ">
                Information
              </h2>
              <ul className=" ">
                <li className="mb-4">
                  <Link href="/faq">
                    <a className="hover:underline">FAQ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy_policy">
                    <a className="hover:underline">Privacy Policy</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase ">
                Contact Us
              </h2>
              <ul className="break-all">
                <li className="mb-4">
                  <a
                    href="mailto:photohousemagazine@gmail.com"
                    className="hover:underline"
                  >
                    <FaEnvelope className="inline" /> :
                    photohousemagazine@gmail.com
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    <FaWhatsapp className="inline" /> : +8801837240350
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    <FaTelegramPlane className="inline" /> : +8801837240350
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="mt-6 mb-1 border-gray-700 sm:mx-auto  lg:mt-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-xs  sm:text-center ">
            © {new Date().getFullYear()}{" "}
            <a href="#" className="hover:underline">
              Photohouse™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex space-x-2 sm:justify-center text-xs">
            <a
              href="https://mahabub-ahmed.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBattleNet
                className="inline animate-spin"
                color="cyan"
                size={14}
              />
              &nbsp;Developed by :
              <span className="hover:underline text-cyan-300 font-semibold tracking-wider ml-2">
                Mahabub Ahmed
              </span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
