import { FC } from "react";
// import required modules
import { EffectFade, Autoplay } from "swiper";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../Images/Landscape/land01.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

const Hero: FC = () => {
  return (
    <div className="w-full min-h-[100vh]">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={"heroWrapper"}>
            <div className={"imageWrapper"}>
              <Image
                priority
                src={img}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="hero image"
              />
            </div>

            <div className="bg-[#00000040] text-white relative flex flex-col justify-center self-center h-[100vh] w-full">
              <h1 className="mb-4 text-4xl font-extrabold  md:text-5xl lg:text-6xl">
                Find your inspiration
              </h1>
              <p className="mb-2 text-emerald-100">
                Join the Photo-House community, home to tens of billions of{" "}
                <br /> photos and 2 million groups.
              </p>
              <div>
                <button type="button" className="btn-blue">
                  Join Our Community
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
