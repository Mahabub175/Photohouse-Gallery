/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Link from "next/link";
import { FC, useEffect, useState, useContext } from "react";
import Slider from "react-slick";
import { base_url } from "../../configs";
import { API_CONTEXT } from "../../utils/GlobalContext";
import Image from "next/image";

const Magazines: FC = () => {
  const [magazinesList, setmagazinesList]: any[] = useState([]);
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "80px",
    slidesToShow: 5,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const getData: any = useContext(API_CONTEXT);
  useEffect(() => {
    if (getData?.data?.links) {
      setmagazinesList(getData?.data?.Magazines.reverse());
    }
  }, [getData]);
  return (
    <div className="maga-slide my-5">
      <Slider {...settings}>
        {(magazinesList.length > 5
          ? magazinesList
          : [
              ...magazinesList,
              ...magazinesList,
              ...magazinesList,
              ...magazinesList,
            ]
        ).map((maga: any) => (
          <div key={maga?._id}>
            <Link href="/magazines">
              <a>
                <img
                  src={base_url + "/" + maga?.thumbnail}
                  alt="img"
                  className="w-full  px-[10px] py-[50px] rounded-sm"
                />
              </a>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Magazines;
