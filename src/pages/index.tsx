// import required modules
import { EffectFade, Autoplay } from "swiper";
import type { NextPage } from "next";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../Images/landscape02.jpg";
import img2 from "../Images/landscape03.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

const Home: NextPage = () => (
  <div className="w-full min-h-[100vh]">
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      autoplay={{
        delay: 2000,
        // crossFade: true,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, EffectFade]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="h-[100vh] w-full bg-emerald-300"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[100vh] w-full bg-emerald-600"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[100vh] w-full bg-emerald-900"></div>
      </SwiperSlide>
      {/* <SwiperSlide>
        <Image src={img2} alt="landscape-image" />
      </SwiperSlide> */}
    </Swiper>
  </div>
);

export default Home;
