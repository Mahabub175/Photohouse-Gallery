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

const Hero: FC = () => {
  return (
    <div className="w-full min-h-[100vh]">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        speed={1000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
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

            <div className="bg-[#00000040]  relative flex flex-col justify-center self-center h-[100vh] w-full">
              <h1 className="mb-4 text-4xl font-extrabold  md:text-5xl lg:text-6xl">
                Find your inspiration
              </h1>
              <p className="mb-2 text-emerald-100">
                Join the Photohouse community, home to tens of billions of{" "}
                <br /> photos and 2 million groups.
              </p>
              <div>
                {/* <button type="button" className="btn-blue">
                  Submit Your Photo
                </button> */}
                <a href="#_" className="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#00000055] border border-cyan-400 rounded-lg group">
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                  <span className="relative">Submit Your Photo</span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
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

            <div className="bg-[#00000040]  relative flex flex-col justify-center self-center h-[100vh] w-full">
              <h1 className="mb-4 text-4xl font-extrabold  md:text-5xl lg:text-6xl">
                Find your inspiration
              </h1>
              <p className="mb-2 text-emerald-100">
                Join the Photohouse community, home to tens of billions of{" "}
                <br /> photos and 2 million groups.
              </p>
              <div>
                <button type="button" className="btn-blue">
                  Submit Your Photo
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Hero;
