import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import img from "../Images/Gallery/3.jpg";
import img2 from "../Images/Gallery/1.jpg";
import img3 from "../Images/Gallery/2.jpg";
import imgL from "../Images/landscape02.jpg";

const Gallery: NextPage = () => {
  return (
    <div className="gap-1 columns-3 bg-gray-900">
      <Image
        // key={x}
        priority
        src={img2}
        layout="responsive"
        quality={100}
        alt="Magazines image"
        // className="w-full aspect-video"
      />
      <Image
        // key={x}
        priority
        src={imgL}
        layout="responsive"
        quality={100}
        alt="Magazines image"
        // className="w-full aspect-video"
      />
      <Image
        // key={x}
        priority
        src={imgL}
        layout="responsive"
        quality={100}
        alt="Magazines image"
        // className="w-full aspect-video"
      />
      <Image
        // key={x}
        priority
        src={img}
        layout="responsive"
        quality={100}
        alt="Magazines image"
        // className="w-full aspect-video"
      />
      <Image
        // key={x}
        priority
        src={img3}
        layout="responsive"
        quality={100}
        alt="Magazines image"
        // className="w-full aspect-video"
      />
      {/* {[1, 2, 3, 4, 5, 6, 7, 8].map((x) => (
      ))} */}
    </div>
  );
};

export default Gallery;
