import { FC } from "react";
// import required modules
import { EffectCoverflow, Autoplay, Navigation, Pagination } from "swiper";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../Images/Magazines/mega01.jpg";
import img1 from "../../Images/Magazines/mega01.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { useRouter } from "next/router";
import Link from "next/link";

const Magazines: FC = () => {
  const router = useRouter();
  return (
    <div className="w-full min-h-[80vh] text-white bg-gray-900 flex flex-col  items-center border-b-2">
      <h1 className="my-4 text-5xl font-bold border-b-4 pb-3">Magazines</h1>
      <Swiper
        slidesPerView={5}
        // spaceBetween={0}
        loop={true}
        speed={1000}
        effect={"coverflow"}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
        className=""
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((x) => (
          <SwiperSlide key={x}>
            <Link href="/magazines">
              <a className={`cursor-pointer`}>
                <Image
                  src={img}
                  width={400}
                  height={550}
                  alt="Magazines image"
                />
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Magazines;
