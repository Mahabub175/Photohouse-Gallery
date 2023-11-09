/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { FaFacebook, FaGlobe, FaInstagram } from "react-icons/fa";
import {
  FiChevronLeft,
  FiChevronRight,
  FiMinusSquare,
  FiPlusSquare,
} from "react-icons/fi";
import {
  getGalleryData,
  setGalleryDetails,
} from "../../store/slices/gallerySlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/reduxHooks";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { base_url } from "../../configs";
import { API_CONTEXT } from "../../utils/GlobalContext";

const Details = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { g_index } = router.query;

  const [imageIndex, setImageIndex] = useState(Number(g_index));
  const zoomScale = [0.5, 1, 1.5, 2.5, 3.5];
  const [zoom, setZoom] = useState(zoomScale[1]);

  const { galleryDetails, galleryData } = useAppSelector(
    (state) => state.gallery
  );
  useEffect(() => {
    (function () {
      dispatch(getGalleryData());
    })();
  }, []);

  useEffect(() => {
    if (router.isReady) {
      setImageIndex(Number(g_index));
      if (!galleryData.length) {
        (async function () {
          await dispatch(getGalleryData());
          dispatch(setGalleryDetails(Number(g_index)));
          await router.push(`/gallery/details?g_index=${Number(g_index)}`);
        })();
      }
    }
  }, [router.isReady, galleryData.length]);

  const handlePrevNext = (index: number) => {
    if (index >= 0 && index < galleryData.length) {
      setImageIndex(index);
      dispatch(setGalleryDetails(index));
      router.push(`/gallery/details?g_index=${index}`);
    }
  };
  // const handleZoom = (zoom: number) => {
  //   setZoom((z) => {
  //     const currentIndex = zoomScale.indexOf(z);
  //     const nextIndex = zoom ? currentIndex + 1 : currentIndex - 1;

  //     const newIndex = Math.max(0, Math.min(zoomScale.length - 1, nextIndex));

  //     return zoomScale[newIndex];
  //   });
  // };

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-10 mb-20 mt-10 gap-10">
      <div className="lg:col-span-7 col-span-10 relative">
        <Image
          priority
          src={`${base_url}/${galleryDetails.image}`}
          quality={100}
          layout="fill"
          objectFit="cover"
          alt="gallary image"
        />
        <div className="min-h-[90vh] relative backdrop-blur-sm bg-white/10 flex justify-center  cursor-move">
          {/* <TransformWrapper>
            <TransformComponent> */}
          <div className="flex items-center h-[90vh]">
            <img
              src={`${base_url}/${galleryDetails.image}`}
              alt=""
              className="max-h-[90vh] "
              // style={{ transform: `scale(${zoom})` }}
            />
          </div>
          {/* </TransformComponent>
          </TransformWrapper> */}
          <div className="flex justify-between absolute top-[48%] w-full px-2">
            {imageIndex > 0 ? (
              <FiChevronLeft
                size={30}
                color="white"
                className=" bg-gray-500 rounded-full cursor-pointer hover:bg-gray-400"
                onClick={() => handlePrevNext(Number(imageIndex) - 1)}
              />
            ) : (
              <span className="opacity-0">.</span>
            )}
            {imageIndex < galleryData.length - 1 && (
              <FiChevronRight
                size={30}
                color="white"
                className=" bg-gray-500 rounded-full cursor-pointer hover:bg-gray-400"
                onClick={() => handlePrevNext(Number(imageIndex) + 1)}
              />
            )}
          </div>
          {/* <div className="flex justify-center absolute bottom-[5px] w-full px-2">
            <FiPlusSquare
              size={30}
              color="white"
              className="cursor-zoom-in bg-black/50 rounded-lg mr-3"
              onClick={() => handleZoom(1)}
            />
            <FiMinusSquare
              size={30}
              color="white"
              className="cursor-zoom-out bg-black/50 rounded-lg"
              onClick={() => handleZoom(0)}
            />
          </div> */}
        </div>
      </div>
      <div className="col-span-3">
        <div className="flex justify-between container m-auto items-center border-b-2 pb-1 flex-col pt-4">
          <div className="w-full flex flex-col items-center ">
            <h1 className="font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-300 pb-4">
              Publication Photohouse Magazine
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 px-2 pr-8 mt-4">
          {galleryDetails?.artists?.map((artist: any, i: number) => (
            <div
              className="items-center bg-gray-800 rounded-lg shadow flex border-gray-600 py-2 my-1"
              key={i + 1212}
            >
              <img
                className="w-[50px] h-[50px] rounded-full ring ring-emerald-400"
                src={`${base_url}/${artist.photo}`}
                alt=""
              />
              <div className="px-5">
                <h3 className="text-sm font-bold tracking-tight text-white flex">
                  {artist.name}&nbsp;&nbsp;
                  {!!artist.flag && (
                    <img
                      src={artist.flag}
                      alt="flag"
                      className="rounded-sm"
                      style={{ height: "10px", marginTop: "6px" }}
                    />
                  )}
                </h3>
                <small className="text-gray-400 text-xs block">
                  {artist.profession}
                </small>
                {!!artist.facebook && (
                  <a
                    href={artist.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook
                      className="inline mr-2 text-gray-200  hover:text-emerald-300 cursor-pointer"
                      size={13}
                    />
                  </a>
                )}
                {!!artist.instagram && (
                  <a
                    href={artist.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram
                      className="inline mx-2 text-gray-200  hover:text-emerald-300 cursor-pointer"
                      size={13}
                    />
                  </a>
                )}
                {!!artist.website && (
                  <a
                    href={artist.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGlobe
                      className="inline mx-2 text-gray-200  hover:text-emerald-300 cursor-pointer"
                      size={13}
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
