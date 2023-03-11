import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBattleNet, FaEnvelope, FaFacebookF, FaInstagram, FaTelegramPlane, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { base_url } from "../../configs";
import logo_dark from "../../Images/logo.png";

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
      axios.get(`${base_url}/redirect_links`)
        .then((data) => setredirect_links(data.data)).catch(() => getLinks())
    }
    // getLinks()
  }, [])


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
            <div className="flex flex-wrap leading-[25px]">
              <span className="ml-3">Follow Us :</span>
              <a href={redirect_links.facebook_page} target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="inline mx-2" />
              </a>
              <a href={redirect_links.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="inline mx-2" />
              </a>
              <a href={redirect_links.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="inline mx-2" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:gap-6 md:grid-cols-3">
            <div>
              <ul>
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
        <hr className="mt-6 mb-1 border-gray-700 sm:mx-auto  lg:mt-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-xs  sm:text-center ">
            © {new Date().getFullYear()}{" "}
            <a href="#" className="hover:underline">
              Photohouse™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex space-x-6 sm:justify-center text-xs">
            <a href="https://hasanul-banna.github.io/Portfolio" target="_blank" rel="noopener noreferrer">
              <FaBattleNet className="inline animate-spin" color="cyan" size={14} />&nbsp;Developed by :
              <span className="hover:underline text-cyan-300 font-semibold tracking-wider ml-2">Hasanul Banna</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
