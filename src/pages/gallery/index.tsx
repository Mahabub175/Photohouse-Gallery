/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Camera } from "react-feather";
import { base_url } from "../../configs";
import {
  getGalleryData,
  setGalleryDetails,
} from "../../store/slices/gallerySlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/reduxHooks";
import { useContext, useEffect, useState } from "react";
import { API_CONTEXT } from "../../utils/GlobalContext";

interface GalleryItem {
  _id: string;
  thumbnail: string;
  click: number;
  flag?: string;
  image?: any;
}

const Gallery: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      dispatch(getGalleryData());
    } catch (error) {
      console.log(error);
      dispatch(getGalleryData());
    }
  }, [dispatch]);

  const galleryData: GalleryItem[] = useAppSelector(
    (state) => state.gallery.galleryData
  );

  const handleClick = (index: number) => {
    dispatch(setGalleryDetails(index));
    router.push(`/gallery/details?g_index=${index}`);
  };

  const [galData, setGalData] = useState<GalleryItem[]>([]);

  const getData: any = useContext(API_CONTEXT);
  useEffect(() => {
    if (getData?.data?.gallery) {
      const reversedGalleryData = [...getData?.data?.gallery]
        .reverse()
        .map((item) => ({
          ...item,
          image: base_url + "/" + item?.image,
        }));
      setGalData(reversedGalleryData);
    }
  }, [getData]);

  return (
    <div className="mb-28">
      {galData?.length > 0 && (
        <div className="columns-2 md:columns-4 mt-2 px-6 md:px-0">
          {galData.map((item, index) => (
            <div key={item._id}>
              <div className="mb-1 animate-fadeIn">
                <div className="group relative block overflow-hidden transition-all duration-500">
                  <a
                    className="relative transition-all duration-500 group-hover:scale-105 cursor-pointer"
                    onClick={() => handleClick(index)}
                  >
                    <img
                      src={item?.image}
                      alt="gallery image"
                      className="animate-slideDown w-full mb-3"
                    />
                  </a>
                  <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-black/60 p-4 rounded shadow shadow-gray-700">
                    <a className="hover:text-primary-600 text-lg transition duration-500 font-medium flex">
                      <Camera size={18} className="mt-[5px] mr-2" />:{" "}
                      {item?.click}
                      {!!item?.flag && (
                        <img
                          src={item?.flag}
                          alt="flag"
                          className="rounded-sm ml-2"
                          style={{ height: "13px", marginTop: "8px" }}
                        />
                      )}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
