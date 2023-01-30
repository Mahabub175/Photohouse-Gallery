import Image from "next/image";
import { FC, useEffect, useState } from "react";
import hero1 from '../../Images/Landscape/3.png'
import hero2 from '../../Images/Landscape/hero1.jpg'
import hero3 from '../../Images/Landscape/hero2.jpg'
const Hero: FC = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-0">
        <div className="relative h-[100vh]">
          <Image src={hero3} alt="hero image" layout='fill' objectFit='cover' />
        </div>
        <div className="relative h-[100vh]">
          <Image src={hero2} alt="hero image" layout='fill' objectFit='cover' />
        </div>
        <div className="relative h-[100vh]">
          <Image src={hero1} alt="hero image" layout='fill' objectFit='cover' />
        </div>
      </div>
      <HeroMain />
    </div>
  );
};
export const HeroMain: FC = () => {
  const [redirect_links, setredirect_links] = useState({
    facebook_group: "#",
    instagram: "#",
    sponsor: "#",
    submit_photo: "#"
  })
  useEffect(() => {
    const getLinks = () => {
      fetch('https://api.photohousemagazine.com/redirect_links')
        .then((response) => response.json())
        .then((data) => setredirect_links(data)).catch(() => getLinks())
    }
    getLinks()
  }, [])
  return <div className=" relative flex flex-col justify-center self-center w-full text-center my-5">
    <h1 className="mb-3 text-4xl  md:text-5xl lg:text-6xl  tracking-wider">
      Inspire and get inspired
    </h1>
    <p className="px-[5%] mb-2 text-emerald-100 text-bold text-xl">
      Join the Photohouse community, submit your photo to our next magazine
      {/* <br /> become our lifetime memeber. */}
    </p>
    <div className="flex justify-center flex-col md:flex-row self-start md:self-auto mx-auto">
      <a href={redirect_links.facebook_group} className="mr-2 mb-2 relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#00000055] border border-cyan-400 rounded-lg group">
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500 rounded-full group-hover:w-80 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <span className="relative">Join Our Photography Group</span>
      </a>
      <a href={redirect_links.submit_photo} className="mr-2 mb-2 relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#00000055] border border-cyan-400 rounded-lg group">
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <span className="relative">Submit Your Photo</span>
      </a>
    </div>
  </div>
}
export default Hero;
