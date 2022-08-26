import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import img1 from "../Images/Gallery/1.png";
import img2 from "../Images/Gallery/6.png";
import img3 from "../Images/Gallery/2.png";
import img4 from "../Images/Gallery/3.png";
import img5 from "../Images/Gallery/4.png";
import img6 from "../Images/Gallery/5.png";

const Gallery: NextPage = () => {
  return (
    <div className="gap-1 columns-4 bg-gray-900">
      {[
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img1,
        img2,
        img3,
        img4,
        img5,
        img6        
      ].map((x, i) => (
        <Image
          key={i}
          priority
          src={x}
          // height={500}
          layout="responsive"
          quality={100}
          alt="Magazines image"
          // className="w-full aspect-video"
        />
      ))}
    </div>
  );
};

export default Gallery;
