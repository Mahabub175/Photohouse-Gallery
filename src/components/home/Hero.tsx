import { FC, useEffect, useState } from "react";
// import required modules
import Image from "next/image";
import { Autoplay, EffectFade } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../Images/Landscape/Photohouse_Magazine1.jpg";
import img2 from "../../Images/Landscape/Photohouse_Magazine_2.jpg";
import img3 from "../../Images/Landscape/Photohouse_Magazine_3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import Link from "next/link";

const Hero: FC = () => {
  return (
    <div className="w-full min-h-[100vh]">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        speed={1000}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        {
          [img1, img2, img3].map((img, index) => <SwiperSlide key={index + 11}>
            <div className={"relative w-full h-100vh"}>
              <div className="z-[-1]">
                <Image
                  priority
                  src={img}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="hero image"
                />
              </div>
              <HeroMain />
            </div>
          </SwiperSlide>)
        }

        <SwiperSlide>
          <div className={"relative w-full h-100vh"}>
            <div className="z-[-1]">
              <Image
                priority
                src={img2}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="hero image"
              />
            </div>
            <HeroMain />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
const HeroMain: FC = () => {
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
  return <div className="bg-[#00000050]  relative flex flex-col justify-center self-center h-[100vh] w-full">
    <h1 className="mb-4 text-4xl font-extrabold  md:text-5xl lg:text-6xl">
      Express talents Spread excellence
    </h1>
    <p className="px-[5%] mb-2 text-emerald-100 text-bold text-xl">
      Join the Photohouse community, submit your photo to our next magazine,
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
      {/* <Link href="/register">
        <a className="mr-2 mb-2 relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#00000055] border border-cyan-400 rounded-lg group">
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
          <span className="relative">Become a Member</span>
        </a>
      </Link> */}
    </div>
  </div>
}
export default Hero;
