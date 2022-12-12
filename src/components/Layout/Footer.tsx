import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaTelegramPlane, FaWhatsapp, FaFacebook, FaLinkedin, FaInstagram, FaBattleNet, FaFacebookF, FaTwitter } from "react-icons/fa";
import logo_dark from "../../Images/logo.png";
import { FcGlobe } from "react-icons/fc";

const Footer: React.FC = () => {
  const [redirect_links, setredirect_links] = useState({
    facebook_group: "#",
    instagram: "#",
    linked_in: "#",
    twitter: "#",
    facebook_page: "#",
    sponsor: "#",
    submit_photo: "#"
  })
  useEffect(() => {
    const getLinks = () => {
      fetch('https://api.photohousemagazine.com/redirect_links')
        .then((response) => response.json())
        .then((data) => setredirect_links(data)).catch(() => getLinks())
    }
    getLinks()
  }, [])


  return (
    <>
      <footer className="p-4  sm:p-6 bg-[#182f38]">
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
            <div className="flex flex-wrap leading-[25px]">
              <span className="ml-3">Follow Us :</span>
              <a href={redirect_links.facebook_page} target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="inline mx-2" />
                {/* <img src="https://img.icons8.com/arcade/25/null/facebook-new.png" className="mx-2" /> */}
              </a>
              <a href={redirect_links.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="inline mx-2" />
                {/* <img src="https://img.icons8.com/arcade/25/null/facebook-new.png" className="mx-2" /> */}
              </a>
              <a href={redirect_links.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="inline mx-2" />
                {/* <img src="https://img.icons8.com/arcade/25/null/instagram-new.png" className="mx-2" /> */}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:gap-6 md:grid-cols-3">
            <div>
              {/* <h2 className="mb-6 text-sm font-semibold  uppercase ">Resources</h2> */}
              <ul className=" ">
                {/* <li className="mb-4">
                  <a href={redirect_links.sponsor} className="hover:underline">
                    Become a sponsor
                  </a>
                </li> */}
                {/* <li >
                  <Link href="/register">
                    <a className="hover:underline">
                      Become a  member
                    </a>
                  </Link>
                </li> */}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase ">Information</h2>
              <ul className=" ">
                <li className="mb-4">
                  <Link href="/faq">
                    <a className="hover:underline">
                      FAQ
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy_policy">
                    <a className="hover:underline">
                      Privacy Policy
                    </a>
                  </Link>

                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase ">
                Contact Us
              </h2>
              <ul className="break-all ">
                <li className="mb-4">
                  <a href="mailto:photohousemagazine@gmail.com" className="hover:underline">
                    <FaEnvelope className="inline" /> : photohousemagazine@gmail.com
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
        <hr className="my-6 border-gray-700 sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm  sm:text-center ">
            © {new Date().getFullYear()}{" "}
            <a href="#" className="hover:underline">
              Photohouse™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="https://hasanul-banna.github.io/Portfolio" target="_blank" rel="noopener noreferrer">
              <FaBattleNet className="inline animate-spin" color="cyan" size={20} />&nbsp;Developed by :
              <span className="hover:underline text-cyan-300 font-semibold tracking-wider ml-2">Hasanul Banna</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
