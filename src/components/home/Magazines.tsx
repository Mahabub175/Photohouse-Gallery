/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import Slider from "react-slick";
import { base_url } from "../../configs";

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
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`${base_url}/all`)
        .then((response) => {
          setmagazinesList(response.data.Magazines.reverse());
        })
        .catch((err) => {
          getData();
        });
    };
    getData();
  }, []);
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
