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
import GalleryLoader from "../../components/galleryComps/GalleryLoader";

const Gallery: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  useEffect(() => {
    (function () {
      dispatch(getGalleryData());
    })();
  }, [dispatch]);
  const galleryData: any[] = useAppSelector(
    (state) => state.gallery.galleryData
  );

  return (
    <div className="gap-1 md:columns-4 columns-2">
      {galleryData[0]?.artists[0]?.photo ? (
        galleryData?.map((x, i) => (
          <div key={x._id}>
            <div className="mb-1 animate-fadeIn">
              <div className="group relative block overflow-hidden transition-all duration-500 ">
                <a className="relative transition-all duration-500 group-hover:scale-105 cursor-pointer ">
                  <img
                    src={`${base_url}/${x.thumbnail}`}
                    alt="gallery image"
                    className="animate-slideDown w-full"
                    onClick={() => {
                      dispatch(setGalleryDetails(i));
                      router.push(`/gallery/details?g_index=${i}`);
                    }}
                  />
                </a>
                <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-black/60 p-4 rounded shadow shadow-gray-700">
                  <a className="hover:text-primary-600 text-lg transition duration-500 font-medium flex">
                    <Camera size={18} className="mt-[5px] mr-2" /> : {x.click}
                    &nbsp;&nbsp;
                    {!!x.flag && (
                      <img
                        src={x.flag}
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
        ))
      ) : (
        <GalleryLoader />
      )}
    </div>
  );
};

export default Gallery;
