import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import img from "../Images/Landscape/aboutBG2.jpg";

const About: NextPage = () => {
  return (
    <>
      <div className="relative min-h-[100vh] w-full ">
        {/* <Image
          priority
          src={img}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="hero image"
          bg-[#0000008a] 
        /> */}
        <div className=" absolute flex flex-col justify-center self-center min-h-[100vh] w-full ">
          <p className="text-center text-4xl font-bold mb-4">About Us</p>
          <p className="px-[10%] text-xl">
            Photohouse is an international photography organization founded in February 2016. During Photohouse&apos;s seven-year journey, it has worked to connect thousands of photographers around the world. We started our successful Photohouse Magazine in March 2022 and have been continuing the legacy successfully ever since.<br /><br />
            <p className="text-center text-4xl font-bold mb-4">Our Mission</p>
            <p>Photohouse aims to give a photographer the best exposure by sharing remarkable works and photogenic thoughts.</p>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
