import Image from 'next/image';
import React from 'react';
import imgL from "../../Images/Landscape/land02.png";
import img1 from "../../Images/Gallery/1.png";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaFacebook, FaGlobe, FaInstagram, FaLinkedin } from 'react-icons/fa';

const details = () => {
    return (
        <div className='grid grid-cols-10'>
            <div className="col-span-7  h-[90vh] relative backdrop-blur-xl bg-white/30">
                <Image
                    priority
                    src={img1}
                    quality={100}
                    className=""
                    layout="fill"
                    objectFit="contain"
                    alt="gallary image"
                />
                <Image
                    priority
                    src={img1}
                    quality={100}
                    className="z-[-10]"
                    layout="fill"
                    objectFit="cover"
                    alt="gallary image"
                />
                <div className="flex justify-between absolute top-[45%] w-full px-2">
                    <FiChevronLeft size={30} color="white" className=' bg-gray-500 rounded-full cursor-pointer hover:bg-gray-400' />
                    <FiChevronRight size={30} color="white" className=' bg-gray-500 rounded-full cursor-pointer hover:bg-gray-400' />
                </div>
            </div>
            <div className="col-span-3 ">
                <div className="flex justify-between container m-auto items-center border-b-2 pb-1 flex-col pt-4">
                    <div className="w-full flex flex-col items-center ">
                        <h1 className="font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-300 pb-4">
                            Photohouse Magazine Publication
                        </h1>
                    </div>
                </div>
                <div className="grid grid-cols-1 px-2">
                    <div className="items-center bg-gray-800 rounded-lg shadow flex border-gray-600 p-2 my-1">
                        <img className="w-[80px] h-[80px] rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Bonnie Avatar" />
                        <div className="px-5">
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Thomas Pagel PAGE7</a>
                            </h3>
                            <span className="text-gray-400">From : Bangladesh </span> <br />
                            <FaFacebook className="inline mr-2 text-gray-200  hover:text-white cursor-pointer" size={18} />
                            <FaInstagram className="inline mx-2 text-gray-200  hover:text-white cursor-pointer" size={18} />
                            <FaLinkedin className="inline mx-2 text-gray-200  hover:text-white cursor-pointer" size={18} />
                            <FaGlobe className="inline mx-2 text-gray-200  hover:text-white cursor-pointer" size={18} />
                        </div>
                    </div>
                    <div className="items-center bg-gray-800 rounded-lg shadow flex border-gray-600 p-2 my-1">
                        <img className="w-[80px] h-[80px] rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Bonnie Avatar" />
                        <div className="px-5">
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Thomas Pagel PAGE7</a>
                            </h3>
                            <span className="text-gray-400">From : Bangladesh </span> <br />
                            <FaFacebook className="inline mr-2 text-gray-200  hover:text-white cursor-pointer" size={18} />
                            <FaInstagram className="inline mx-2 text-gray-200  hover:text-white cursor-pointer" size={18} />
                            <FaLinkedin className="inline mx-2 text-gray-200  hover:text-white cursor-pointer" size={18} />
                            <FaGlobe className="inline mx-2 text-gray-200  hover:text-white cursor-pointer" size={18} />
                        </div>
                    </div>
                    <div className="items-center bg-gray-800 rounded-lg shadow flex border-gray-600 p-2 my-1">
                        <img className="w-[80px] h-[80px] rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Bonnie Avatar" />
                        <div className="px-5">
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Thomas Pagel PAGE7</a>
                            </h3>
                            <span className="text-gray-400">From : Bangladesh </span> <br />
                            <FaFacebook className="inline mr-2 text-gray-200  hover:text-white cursor-pointer" size={18} />
                            <FaInstagram className="inline mx-2 text-gray-200  hover:text-white cursor-pointer" size={18} />
                            <FaLinkedin className="inline mx-2 text-gray-200  hover:text-white cursor-pointer" size={18} />
                            <FaGlobe className="inline mx-2 text-gray-200  hover:text-white cursor-pointer" size={18} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default details;