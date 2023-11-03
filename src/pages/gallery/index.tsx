/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */

import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Camera } from "react-feather";
import { base_url } from "../../configs";
import {
  getGalleryData,
  setGalleryDetails,
} from "../../store/slices/gallerySlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/reduxHooks";

interface GalleryItem {
  _id: string;
  thumbnail: string;
  click: number;
  flag?: string;
}

const Gallery: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGalleryData());
  }, [dispatch]);

  const galleryData: GalleryItem[] = useAppSelector(
    (state) => state.gallery.galleryData
  );

  const handleClick = (index: number) => {
    dispatch(setGalleryDetails(index));
    router.push(`/gallery/details?g_index=${index}`);
  };

  return (
    <div className="mb-28">
      {galleryData?.length > 0 && (
        <div className="md:columns-4 columns-2 container mx-auto mt-12">
          {galleryData.map((item, index) => (
            <div key={item._id}>
              <div className="mb-1 animate-fadeIn">
                <div className="group relative block overflow-hidden transition-all duration-500">
                  <a
                    className="relative transition-all duration-500 group-hover:scale-105 cursor-pointer"
                    onClick={() => handleClick(index)}
                  >
                    <img
                      src={`${base_url}/${item.thumbnail}`}
                      alt="gallery image"
                      className="animate-slideDown w-full"
                    />
                  </a>
                  <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-black/60 p-4 rounded shadow shadow-gray-700">
                    <a className="hover:text-primary-600 text-lg transition duration-500 font-medium flex">
                      <Camera size={18} className="mt-[5px] mr-2" />:{" "}
                      {item.click}
                      {!!item.flag && (
                        <img
                          src={item.flag}
                          alt="flag"
                          className="rounded-sm"
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
