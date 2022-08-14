// import required modules
import { EffectFade, Autoplay } from "swiper";
import type { NextPage } from "next";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../Images/landscape02.jpg";
import img2 from "../Images/landscape03.jpg";
import img3 from "../Images/landscape04.jpg";

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
        <div className="h-[100vh] w-full">
          <Image
            src={img}
            layout="fill"
            objectFit="cover"
            alt=""
            quality={100}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[100vh] w-full ">
          <Image
            src={img2}
            layout="fill"
            objectFit="cover"
            alt=""
            quality={100}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[100vh] w-full ">
          <Image
            src={img3}
            layout="fill"
            objectFit="cover"
            alt=""
            quality={100}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
);

export default Home;
