import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import axios from "axios";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Magazines: FC = () => {
  const [magazinesList, setmagazinesList] = useState([{ _id: 1, image: "" }, { _id: 11, image: "" }, { _id: 1111, image: "" }])
  useEffect(() => {
    const getData = async () => {
      await axios.get('https://api.photohousemagazine.com/magazines').then((response) => {
        // console.log(response.data)
        setmagazinesList(response.data.reverse())
      }).catch((err) => {
        console.log(err)
        getData()
      })
    }
    getData()
  }, [])
  return (
    <div className="w-full min-h-[80vh]   flex flex-col items-center py-2">
      <h1 className="font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-300 pb-4">
        Magazines
      </h1>
      <Swiper
        breakpoints={{
          280: { slidesPerView: 1, },
          640: { slidesPerView: 3, },
          768: { slidesPerView: 5, },
        }}
        loop={true}
        effect={"coverflow"}
        speed={800}
        autoplay={{ delay: 1000, disableOnInteraction: false, }}
        modules={[Autoplay, EffectCoverflow, Navigation]}
        className="my-4"
      // slidesPerView={5}
      // spaceBetween={0}
      // navigation
      // pagination={{ clickable: true }}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      >
        {magazinesList.map((x: any) => (
          <SwiperSlide key={x._id} className="">
            <Link href="/magazines" className="">
              <Image
                priority
                // placeholder="blur"
                src={x.image}
                width={400}
                height={550}
                alt="Loading..."
                className={`cursor-pointer rounded-md `}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Magazines;
