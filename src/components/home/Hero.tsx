import { FC } from "react";
// import required modules
import { EffectFade, Autoplay } from "swiper";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../Images/Landscape/land01.jpg";
import img2 from "../../Images/Landscape/land03.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import Link from "next/link";

const Hero: any = ({ RedirectLinks }: any) => {
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

        <SwiperSlide>
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
            <HeroMain RedirectLinks={RedirectLinks} />
          </div>
        </SwiperSlide>
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
            <HeroMain RedirectLinks={RedirectLinks} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
const HeroMain: any = ({ RedirectLinks }: any) => <div className="bg-[#00000040]  relative flex flex-col justify-center self-center h-[100vh] w-full">
  <h1 className="mb-4 text-4xl font-extrabold  md:text-5xl lg:text-6xl">
    Find your inspiration
  </h1>
  <p className="px-[5%] mb-2 text-emerald-100">
    Join the Photohouse community, submit your photo to our next magazine,
    <br /> become our lifetime memeber.
  </p>
  <div className="flex justify-center flex-col md:flex-row self-start md:self-auto mx-auto">
    {/* <button type="button" className="btn-blue">
    Submit Your Photo
  </button> */}
    <a href={RedirectLinks.facebook_group} target="_blank" rel="noreferrer" className="mr-2 mb-2 relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#00000055] border border-cyan-400 rounded-lg group">
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
      <span className="relative">Join Facebook Group</span>
    </a>
    <a href={RedirectLinks.submit_photo} target="_blank" rel="noreferrer" className="mr-2 mb-2 relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#00000055] border border-cyan-400 rounded-lg group">
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
      <span className="relative">Submit Your Photo</span>
    </a>
    <Link href="/register">
      <a className="mr-2 mb-2 relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#00000055] border border-cyan-400 rounded-lg group">
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <span className="relative">Become a Member</span>
      </a>
    </Link>
  </div>
</div>
export default Hero;
