import Image from 'next/image';
import React from 'react';
import imgL from "../../Images/Landscape/land02.png";
import img1 from "../../Images/Gallery/1.png";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const details = () => {
    return (
        <div className='grid grid-cols-10 divide-x divide-gray-500 pt-[5vh]'>
            <div className="col-span-7  h-[80vh] relative backdrop-blur-md bg-white/30">
                <Image
                    priority
                    src={imgL}
                    quality={100}
                    className=""
                    layout="fill"
                    objectFit="contain"
                    alt="gallary image"
                />
                <div className="flex justify-between absolute top-[45%] w-full px-2">
                    <FiChevronLeft size={30} color="white" className=' bg-gray-500 rounded-full cursor-pointer hover:bg-gray-400' />
                    <FiChevronRight size={30} color="white" className=' bg-gray-500 rounded-full cursor-pointer hover:bg-gray-400' />
                </div>
            </div>
            <div className="">

            </div>
        </div>
    );
};

export default details;