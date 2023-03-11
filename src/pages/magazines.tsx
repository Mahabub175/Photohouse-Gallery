import axios from "axios";
import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { base_url } from "../configs";

const Magazines: NextPage = ({ magazinesList }: any) => {
  const [FilteredData, setFilteredData] = useState(magazinesList)
  const [Category, setCategory] = useState("All")

  const handleFilter = (type: string) => {
    setCategory(type)
    switch (type) {
      case "All":
        setFilteredData(magazinesList)
        break;
      default:
        setFilteredData(magazinesList.filter((mag: any) => mag.category === type))
        break;
    }
  }
  return (
    <main className="py-4">
      <div className="flex justify-between container m-auto items-center border-b-gray-500 border-b-2 pb-2 flex-col">
        <div className="w-full flex flex-col items-center ">
          <h1 className=" text-white sm:text-5xl text-3xl tracking-wider">
            Magazines
          </h1>
        </div>
      </div>
      {/* <p>
          {["All", "Newest", "Popular", "Upcoming"].map((type: string, i: number) => <span
            key={i + 1}
            className={`mx-1 cursor-pointer ${Category === type && 'text-blue-400 font-bold'}`}
            onClick={() => handleFilter(type)}>
            {type}</span>
          )}
        </p> */}
      <div className="container m-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {FilteredData.map((x: any) => (
          <div className="max-w-[280px] my-3 m-auto animate-fade" key={x._id}>
            <a target={"_blank"} href={x.redirect_link} rel="noreferrer" className="relative">
              <Image
                priority
                src={base_url + "/" + x.thumbnail}
                width={400}
                height={517}
                layout="responsive"
                alt="Magazines image"
                className={`cursor-pointer rounded-md `}
              />
            </a>
            <p className="text-white text-sm text-center">{x.name}</p>
          </div>))}
      </div>
    </main>
  );
};

export default Magazines;

export async function getStaticProps() {
  const magazinesList = await axios.get(`${base_url}/all`).then((response) => {
    return response.data.Magazines.reverse()
  }).catch((err) => [])
  return { props: { magazinesList }, revalidate: 60 }
}
