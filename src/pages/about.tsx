import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import img from "../Images/Landscape/aboutBG2.jpg";

const About: NextPage = () => {
  return (
    <>
      <div className="relative min-h-[100vh] w-full ">
        <Image
          priority
          src={img}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="hero image"
        />
        <div className="bg-[#0000008a]  absolute flex flex-col justify-center self-center min-h-[100vh] w-full ">
          <p className="text-center text-4xl font-bold mb-4">About Us</p>
          <p className="px-[10%] text-xl">
            {/* Your privacy is important to us. We provide this notice to explain
            our online information practices and the choices you can make about
            the way your information is collected and used. This notice applies
            to all information collected or submitted on the Photohousebd
            Photography website. The only personal information we collect is
            name, street and email address, instagram id and telephone number.
            We use the personal information collected from you to facilitate
            taking your photographs, communicating with your regarding your
            photographs and other related products and services, and processing
            any transaction you may do with Photohousebd Photography. To prevent
            unauthorized access, maintain data accuracy, and ensure the correct
            use of information, we have put into place appropriate physical,
            electronic, and managerial procedures to safeguard and secure the
            information we collect online. Protecting the privacy of the very
            young is particularly important to Photohousebd Photography. For
            that reason, we never collect or maintain information at our website
            from those we actually know are under the age of 13, and no part of
            our website is structured to attract anyone under 13 to provide
            information to us. You can correct factual errors in your personally
            identifiable information by sending us a request detailing the
            error(s). To protect your privacy and security, we will also take
            reasonable steps to verify your identity before granting access or
            making corrections. In the unlikely event any of the personal
            information you supply us online is misused, you may redress these
            issues by contacting us directly at photohousebangladesh@gmail.com.
            Should you have questions or concerns about this Privacy Policy,
            please call us at +8801837240350 or send us an email at
            photohousebangladesh@gmail.com */}
            Photohouse is an international photography organization founded in February 2016. During Photohouse seven years journey, it has worked to connect over 100 thousand photographers from more than 195 countries. We started our first successful magazine in March 2022 and have been continuing the legacy successfully ever since. <br /><br />
            <p className="text-center text-4xl font-bold mb-4">Our Mission</p>
            <p>Photohouse aims to give a photographer the best exposure by sharing remarkable works and photogenic thoughts.</p>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
