import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import img from "../Images/Landscape/aboutBG2.jpg";

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
        </div>
        <div className="flex justify-between pt-10 text-center px-[5%]">
          <div>
            <p className="text-4xl font-bold">Founder</p>
            <p>Sabbir Ashraf</p>

          </div>
          <div>
            <p className="text-4xl font-bold">Co-Founder</p>
            <p>PAGE7</p>

          </div>
        </div>
        <div className="px-[5%] flex flex-col justify-center self-center w-full">
          <p className="text-xl">
            <p className="text-center text-4xl font-bold mb-4">Our Mission</p>
            <p>Photohouse aims to give a photographer the best exposure by sharing remarkable works and photogenic thoughts.</p>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
