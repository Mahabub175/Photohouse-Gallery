import axios from "axios";
import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

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
      <div className="flex justify-between container m-auto items-center border-b-2 pb-2 flex-col">
        <div className="w-full flex flex-col items-center ">
          <h1 className="font-bold text-transparent sm:text-5xl text-3xl bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-300 pb-4">
            Magazines
          </h1>
        </div>
        <p>
          <span className="mx-1 cursor-pointer" onClick={() => handleFilter("All")}>All</span>
          <span className="mx-1 cursor-pointer" onClick={() => handleFilter("Newest")}>Newest</span>
          <span className="mx-1 cursor-pointer" onClick={() => handleFilter("Popular")}>Popular</span>
          <span className="mx-1 cursor-pointer" onClick={() => handleFilter("Upcoming")}>Upcoming</span>
        </p>
      </div>
      <div className="container m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {FilteredData.map((x: any) => (
          <div className="max-w-[200px] my-3 m-auto animate-fade" key={x._id}>
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
          </div>))}
      </div>
    </main>
  );
};

export default Magazines;

export async function getStaticProps() {
  const magazinesList = await axios.get('https://api.photohousemagazine.com/magazines').then((response) => {
    return response.data
  }).catch((err) => console.log(err))
  return { props: { magazinesList }, revalidate: 10 }
}
