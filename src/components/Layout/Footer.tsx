import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaTelegramPlane, FaWhatsapp, FaFacebook, FaLinkedin, FaInstagram, FaBattleNet } from "react-icons/fa";
import logo_dark from "../../Images/logo.png";
import { FcGlobe } from "react-icons/fc";

const Footer: React.FC = () => {
  const [redirect_links, setredirect_links] = useState({
    facebook_group: "#",
    instagram: "#",
    linked_in: "#",
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
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase ">
                Resources
              </h2>
              <ul className=" ">
                <li className="mb-4">
                  <a href={redirect_links.sponsor} className="hover:underline">
                    Become a sponsor
                  </a>
                </li>
                <li className="mb-4">
                  <Link href="/register">
                    <a className="hover:underline">
                      Become a  member
                    </a>
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase ">Follow Us</h2>
              <ul className=" ">
                <li className="mb-4">
                  <a href={redirect_links.facebook_page} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    <FaFacebook className="inline" /> Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a href={redirect_links.linked_in} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    <FaLinkedin className="inline" /> Linked In
                  </a>
                </li>
                <li>
                  <a href={redirect_links.instagram} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    <FaInstagram className="inline" /> Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase ">
                Contact Us
              </h2>
              <ul className="break-all ">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
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
            <a href="https://hasanul-banna.github.io/Portfolio" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <FaBattleNet className="inline" color="cyan" size={20} />&nbsp;Developed By : Hasanul Banna
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
