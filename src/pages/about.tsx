/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Image from "next/image";
import React, { useEffect, useState, useContext } from "react";
import { FaEnvelope, FaFacebookF, FaGlobe, FaInstagram } from "react-icons/fa";
import ceo from "../Images/CEO.jpg";
import co_ceo from "../Images/photo_7.jpg";
import { API_CONTEXT } from "../utils/GlobalContext";

const About: NextPage = () => {
  const [redirect_links, setredirect_links] = useState({
    pagel_email: "#",
    pagel_facebook: "#",
    pagel_instagram: "#",
    pagel_web: "#",
    sabbir_email: "#",
    sabbir_facebook: "#",
    sabbir_instagram: "#",
    sabbir_web: "#",
    pagel_photo: "",
  });

  const getLinks: any = useContext(API_CONTEXT);
  useEffect(() => {
    if (getLinks?.data?.links) {
      setredirect_links(getLinks?.data?.links);
    }
  }, [getLinks]);
  return (
    <>
      <div className="flex justify-between container m-auto items-center flex-col pt-4">
        <div className="w-full flex flex-col items-center ">
          <h1 className=" text-white sm:text-5xl text-3xl tracking-wider">
            About Us
          </h1>
        </div>
      </div>
      <div className="relative min-h-[100vh] w-full container m-auto pt-10 ">
        <div className="px-[5%] flex flex-col justify-center self-center w-full text-justify">
          <p className="text-xl">
            Photohouse is an international photography organization founded in
            February 2016. During Photohouse&apos;s seven-year journey, it has
            worked to connect thousands of photographers around the world. We
            started our successful Photohouse Magazine in March 2022 and have
            been continuing the legacy successfully ever since.
            <br />
            <br />
          </p>
          <p className="text-xl">
            <span className="font-bold underline">Our Mission</span> :
            Photohouse aims to give a photographer the best exposure by sharing
            remarkable works and photogenic thoughts.
          </p>
        </div>
        <div className="flex justify-between pt-10 text-center px-[5%] items-center">
          <div>
            <Image
              priority
              src={ceo}
              width={100}
              height={127}
              alt="ceo"
              className={`rounded-md animate-fade`}
            />
            <p className="text-3xl font-bold">Sabbir Ashraf</p>
            <p className="text-slate-400">Founder</p>
            <a
              href={redirect_links.sabbir_facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF
                className="inline mx-2"
                color="lightgray"
                size={20}
              />
            </a>
            <a
              href={redirect_links.sabbir_instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="inline mx-2"
                color="lightgray"
                size={20}
              />
            </a>
            <a
              href={`mailto:${redirect_links?.sabbir_email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="inline mx-2" color="lightgray" size={20} />
            </a>
          </div>
          <div>
            <div className="w-[100px] h-[130px] relative m-auto">
              <Image
                priority
                src={co_ceo}
                width={100}
                height={127}
                alt="page7"
                className={`rounded-md animate-fade m-auto`}
              />
            </div>
            <p className="text-3xl font-bold pt-2">PAGE7 Photo</p>
            <p className="text-slate-400">Co-Founder</p>
            <a
              href={redirect_links?.pagel_facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF
                className="inline mx-2"
                color="lightgray"
                size={20}
              />
            </a>
            <a
              href={redirect_links?.pagel_instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="inline mx-2"
                color="lightgray"
                size={20}
              />
            </a>
            <a
              href={`mailto:${redirect_links.pagel_email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="inline mx-2" color="lightgray" size={20} />
            </a>
            <a
              href={redirect_links.pagel_web}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGlobe className="inline mx-2" color="lightgray" size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
