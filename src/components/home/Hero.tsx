import axios from "axios";
import Image from "next/image";
import { FC, useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { base_url } from "../../configs";
// Import css files
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { API_CONTEXT } from "../../utils/GlobalContext";

const Hero: FC = () => {
  const [imageArray, setimageArray] = useState([]);
  const [sildes, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const getImages: any = useContext(API_CONTEXT);
  useEffect(() => {
    if (getImages?.data?.homeSliderImgs) {
      setimageArray(getImages?.data?.homeSliderImgs);
      setSlides(getImages?.data?.homeSliderImgs);
    }
  }, [getImages]);

  // const NextBtnClick = () => {
  //   if (current + 3 + 1 <= imageArray.length) {
  //     setSlides(imageArray.slice(current + 1, current + 3 + 1));
  //     setCurrent((c) => c + 1);
  //   }
  // };
  // const PrevBtnClick = () => {
  //   if (current - 1 >= 0) {
  //     setSlides(imageArray.slice(current - 1, current + 3 - 1));
  //     setCurrent((c) => c - 1);
  //   }
  // };

  // console.log(getImages);

  return (
    <div className="w-full home-slide overflow-hidden">
      <div className="lg:h-[100vh] md:h-[80vh] h-[60vh] mb-10 lg:-mb-8">
        <Slider {...settings}>
          {sildes.map((img: any, index: number) => (
            <div
              key={index + 1515}
              className="relative lg:h-[90vh] md:h-[80vh] h-[60vh] group"
            >
              <Image
                src={base_url + "/" + img.image}
                alt="hero image"
                layout="fill"
                objectFit="cover"
                priority
                className=""
              />
              <p className="hidden group-hover:block absolute bottom-0 text-sm text-center w-full bg-black/30">
                {img.click}
              </p>
            </div>
          ))}
        </Slider>
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
    submit_photo: "#",
  });
  const getLinks: any = useContext(API_CONTEXT);
  useEffect(() => {
    if (getLinks?.data?.links) {
      setredirect_links(getLinks?.data?.links);
    }
  }, [getLinks]);
  return (
    <div className="relative flex flex-col justify-center self-center w-full text-center">
      <h1 className="mb-3 text-2xl  md:text-5xl lg:text-6xl  tracking-wider text-white">
        Inspire and get inspired
      </h1>
      <p className="px-[5%] mb-2 text-bold md:text-lg text-sm">
        Join our Photography community, submit your photo to our next magazine
      </p>
      <div className="flex justify-center flex-col md:flex-row self-start md:self-auto mx-auto">
        <a
          href={redirect_links.facebook_group}
          target="blank"
          className="mr-2 mb-2 relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#00000055] border border-gray-400 rounded-lg group"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-500 rounded-full group-hover:w-80 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
          <span className="relative">Join Our community</span>
        </a>
        <a
          href={redirect_links.submit_photo}
          target="blank"
          className="mr-2 mb-2 relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#00000055] border border-gray-400 rounded-lg group"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
          <span className="relative">Submit Your Photo</span>
        </a>
      </div>
    </div>
  );
};
export default Hero;
