/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { NextPage } from "next";
import { useState, useEffect } from "react";
import { base_url } from "../configs";
import { useContext } from "react";
import { API_CONTEXT } from "../utils/GlobalContext";

const Magazines: NextPage = () => {
  const [magazineData, setMagazineData] = useState([]);

  const getData: any = useContext(API_CONTEXT);

  useEffect(() => {
    if (getData?.data?.Magazines) {
      const reversedMagazines: any = [...getData?.data?.Magazines].reverse();
      setMagazineData(reversedMagazines);
    }
  }, [getData]);

  return (
    <main className="py-4">
      <div className="flex container justify-between m-auto items-center border-b-gray-500 border-b-2 pb-2 flex-col">
        <div className="w-full flex flex-col items-center ">
          <h1 className=" text-white sm:text-5xl text-3xl tracking-wider">
            Magazines
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-6 gap-x-8 container mx-auto mb-0 md:mb-24">
        {magazineData?.map((x: any) => (
          <div className="my-3 m-auto animate-fade relative" key={x?._id}>
            <a
              target="_blank"
              href={x?.redirect_link}
              rel="noreferrer"
              className="relative"
            >
              <img
                src={base_url + "/" + x.thumbnail}
                alt="Magazines image"
                className="cursor-pointer rounded-md"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-black flex flex-col justify-center items-center text-white opacity-0 transition-opacity duration-500 hover:opacity-60 p-2"></div>
            </a>
            <p className="text-white text-xs text-center">{x?.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Magazines;
