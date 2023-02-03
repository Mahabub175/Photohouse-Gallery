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
      await axios.get('https://api.photohousemagazine.com/magazines')
        .then((response) => { setmagazinesList(response.data.reverse()) })
        .catch((err) => { getData() })
    }
    getData()
  }, [])
  return (
    <div className="w-full my-10 flex flex-col items-center">
      <Swiper
        breakpoints={{
          280: { slidesPerView: 1, },
          640: { slidesPerView: 3, },
          768: { slidesPerView: 5, }
        }}
        loop={true}
        effect={"coverflow"}
        speed={800}
        autoplay={{ delay: 100000, disableOnInteraction: false, }}
        modules={[Autoplay, Navigation, EffectCoverflow]}
      // slidesPerView={5}
      // spaceBetween={0}
      // navigation
      // pagination={{ clickable: true }}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      >
        {magazinesList.map((x: any) => (
          <SwiperSlide key={x._id} className='xl:py-2'>
            <Link href="/magazines" >
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
