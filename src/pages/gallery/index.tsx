import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import img1 from "../../Images/Gallery/1.png";
import imgL from "../../Images/Landscape/land02.png";
import imgL4 from "../../Images/Landscape/land04.png";
import imgL2 from "../../Images/Landscape/land03.jpg";
import img3 from "../../Images/Gallery/2.png";
import img4 from "../../Images/Gallery/3.png";
import img5 from "../../Images/Gallery/4.png";
import img6 from "../../Images/Gallery/5.png";
import Link from "next/link";
import { Camera } from "react-feather";

const Gallery: NextPage = () => {
  return (
    <div className="gap-1 md:columns-4 columns-2">
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
        <div className="mb-1 animate-fadeIn" key={i}>
          <div className="group relative block overflow-hidden transition-all duration-500">
            <a className="transition-all duration-500 group-hover:scale-105 cursor-pointer">
              <Link href="/gallery/details">
                <Image
                  priority
                  src={x}
                  // height={500}
                  layout="responsive"
                  quality={100}
                  alt="Magazines image"
                />
              </Link>
            </a>
            <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-black/60 p-4 rounded shadow shadow-gray-700">
              <a className="hover:text-primary-600 text-lg transition duration-500 font-medium flex"><Camera size={18} className="mt-[5px] mr-2" /> : Thomas Pagel</a>
              {/* <h6 className="text-slate-300">For better resolution <span className="underline">visit website</span> </h6> */}
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Gallery;
