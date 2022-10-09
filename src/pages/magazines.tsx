import { NextPage } from "next";
import Image from "next/image";
import img from "../Images/Magazines/M1.png";

const Magazines: NextPage = () => {
  return (
    <main className="  py-4">
      <div className="flex justify-between container m-auto items-center border-b-2 pb-2">
        <p className="text-3xl font-bold">Magazines</p>
        <p>
          <span className="mx-1">All</span>
          <span className="mx-1">Newest</span>
          <span className="mx-1">Popular</span>
          <span className="mx-1">Upcoming</span>
        </p>
      </div>
      <div className="container m-auto grid grid-cols-5 gap-6">
        {[1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 7, 8, 9, 9, 8].map((x, i) => (
          <div className="w-[200px] my-3" key={i}>
            <Image
              priority
              src={img}
              width={400}
              height={550}
              alt="Magazines image"
              className={`cursor-pointer rounded-md `}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Magazines;
