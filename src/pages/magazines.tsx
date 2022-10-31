import axios from "axios";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import img from "../Images/Magazines/M1.png";

const Magazines: NextPage = () => {
  const [magazinesList, setmagazinesList] = useState([])
  useEffect(() => {
    axios.get('https://api.photohousemagazine.com/magazines').then((response) => {
      console.log(response.data)
      setmagazinesList(response.data)
    })
  }, [])
  return (
    <main className="  py-4">
      <div className="flex justify-between container m-auto items-center border-b-2 pb-2 flex-col">
        <div className="w-full flex flex-col items-center ">
          <h1 className="font-bold text-transparent sm:text-5xl text-3xl bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-300 pb-4">
            Magazines
          </h1>
        </div>
        <p>
          <span className="mx-1">All</span>
          <span className="mx-1">Newest</span>
          <span className="mx-1">Popular</span>
          <span className="mx-1">Upcoming</span>
        </p>
      </div>
      <div className="container m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {magazinesList.map((x: any, i) => (
          <div className="max-w-[200px] my-3 m-auto" key={x._id}>
            <a target={"_blank"} href={x.redirect_link} rel="noreferrer">
              <Image
                priority
                src={x.image}
                width={400}
                height={550}
                alt="Magazines image"
                className={`cursor-pointer rounded-md `}
              />
            </a>

          </div>
        ))}
      </div>
    </main>
  );
};

export default Magazines;
