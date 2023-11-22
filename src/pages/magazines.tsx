/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { useState, useEffect } from "react";
import { base_url } from "../configs";
import { useContext } from "react";
import { API_CONTEXT } from "../utils/GlobalContext";

const Magazines: NextPage = () => {
  const [magazineData, setMagazineData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("normal");

  const getData: any = useContext(API_CONTEXT);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const magazinesData = await getData?.data?.Magazines;

        if (Array.isArray(magazinesData)) {
          const filteredMagazines: any = [...magazinesData]
            .filter((magazine) => {
              if (activeTab === "normal") {
                return (
                  magazine.isSpecial === undefined ||
                  magazine.isSpecial === false
                );
              } else {
                return magazine.isSpecial === true;
              }
            })
            .reverse()
            .map((magazine) => ({
              ...magazine,
              thumbnail: base_url + "/" + magazine.thumbnail,
            }));
          setMagazineData(filteredMagazines);
        } else {
          console.error("Magazines data is not an array:", magazinesData);
          setMagazineData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setMagazineData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [getData, activeTab]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <main className="py-4">
      <div className="flex container justify-between m-auto items-center border-b-gray-500 border-b-2 pb-2 flex-col">
        <div className="w-full flex flex-col items-center mb-4">
          <h1 className="text-white sm:text-5xl text-3xl tracking-wider">
            Magazines
          </h1>
        </div>
        <div className="flex space-x-4 mb-6 text-bold">
          <button
            onClick={() => handleTabChange("normal")}
            className={`px-4 py-2 ${
              activeTab === "normal"
                ? "bg-gray-500 text-white"
                : "bg-transparent text-white border border-gray-500"
            } rounded-xl`}
          >
            Normal Edition
          </button>
          <button
            onClick={() => handleTabChange("special")}
            className={`px-4 py-2 ${
              activeTab === "special"
                ? "bg-gray-500 text-white"
                : "bg-transparent text-white border border-gray-500"
            } rounded-xl`}
          >
            Special Edition
          </button>
        </div>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-6 gap-x-8 container mx-auto mb-0 md:mb-24">
          {activeTab === "special" && magazineData?.length === 0 ? (
            <p className="text-white text-center">
              Special Edition is coming soon!
            </p>
          ) : (
            magazineData?.map((x: any) => (
              <div className="my-3 m-auto animate-fade relative" key={x?._id}>
                <a
                  target="_blank"
                  href={x?.redirect_link}
                  rel="noreferrer"
                  className="relative"
                >
                  <img
                    src={x.thumbnail}
                    alt="Magazines image"
                    className="cursor-pointer rounded-md"
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 bg-black flex flex-col justify-center items-center text-white opacity-0 transition-opacity duration-500 hover:opacity-60 p-2"></div>
                </a>
                <p className="text-white text-xs text-center">{x?.name}</p>
              </div>
            ))
          )}
        </div>
      )}
    </main>
  );
};

export default Magazines;
