import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { FaEnvelope, FaFacebookF, FaGlobe, FaInstagram } from "react-icons/fa";
import ceo from "../Images/CEO.jpg";

const About: NextPage = () => {
  return (
    <>
      <div className="relative min-h-[100vh] w-full container m-auto pt-10 ">
        {/* <Image
          priority
          src={img}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="hero image"
          bg-[#0000008a] 
        /> */}
        <div className="px-[5%] flex flex-col justify-center self-center w-full text-justify">
          <p className="text-center text-4xl font-bold mb-4">About Us</p>
          <p className="text-xl">
            Photohouse is an international photography organization founded in February 2016. During Photohouse&apos;s seven-year journey, it has worked to connect thousands of photographers around the world. We started our successful Photohouse Magazine in March 2022 and have been continuing the legacy successfully ever since.<br /><br />
          </p>
          <p className="text-xl">
            <span className="font-bold underline">Our Mission</span> : Photohouse aims to give a photographer the best exposure by sharing remarkable works and photogenic thoughts.
          </p>
        </div>
        <div className="flex justify-between pt-10 text-center px-[5%]">
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
            <FaFacebookF className="inline mx-2" />
            <FaInstagram className="inline mx-2" />
            <FaEnvelope className="inline mx-2" />
            <FaGlobe className="inline mx-2" />
          </div>
          <div>
            <Image
              priority
              src={ceo}
              width={100}
              height={127}
              alt="ceo"
              className={`rounded-md animate-fade`}
            />
            <p className="text-3xl font-bold">PAGE7</p>
            <p className="text-slate-400">Co-Founder</p>
            <FaFacebookF className="inline mx-2" />
            <FaInstagram className="inline mx-2" />
            <FaEnvelope className="inline mx-2" />
            <FaGlobe className="inline mx-2" />
          </div>
        </div>
        {/* <div className="px-[5%] flex flex-col justify-center self-center w-full">
          <p className="text-xl">
            <p className="text-center text-4xl font-bold mb-4">Our Mission</p>

          </p>
        </div> */}
      </div>
    </>
  );
};

export default About;
