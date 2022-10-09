import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import img1 from "../Images/Gallery/1.png";
import imgL from "../Images/Landscape/land02.png";
import imgL4 from "../Images/Landscape/land04.png";
import imgL2 from "../Images/Landscape/land03.jpg";
import img3 from "../Images/Gallery/2.png";
import img4 from "../Images/Gallery/3.png";
import img5 from "../Images/Gallery/4.png";
import img6 from "../Images/Gallery/5.png";

const Gallery: NextPage = () => {
  return (
    <div className="gap-1 columns-4 ">
      {[
        img1,
        img3,
        imgL4,
        imgL4,
        img4,
        imgL2,
        img5,
        img6,
        img1,
        img3,
        imgL,
        img4,
        img5,
        imgL4,
      ].map((x, i) => (
        <div className="mb-1" key={i}>
          <Image
            priority
            src={x}
            // height={500}
            layout="responsive"
            quality={100}
            alt="Magazines image"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
