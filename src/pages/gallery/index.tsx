import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Camera } from "react-feather";
import { getGalleryData, setGalleryDetails } from "../../store/slices/gallerySlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/reduxHooks";

const Gallery: NextPage = (props: any) => {
  const gallryImages: any[] = props.gallryImages
  const router = useRouter()
  const dispatch = useAppDispatch()
  useEffect(() => {
    (function () { dispatch(getGalleryData()) })()
  }, [])
  const galleryData: any[] = useAppSelector((state) => state.gallery.galleryData)
  return (
    <div className="gap-1 md:columns-4 columns-2">
      {galleryData?.map((x, i) => (
        <div className="mb-1 animate-fadeIn" key={x._id}>
          <div className="group relative block overflow-hidden transition-all duration-500 ">
            {/* <div className="w-full h-full absolute backdrop-blur-sm bg-white/10 z-10"></div> */}
            <a className="relative transition-all duration-500 group-hover:scale-105 cursor-pointer ">
              <img
                src={x.image}
                alt="gallery image"
                className="animate-slideDown"
                onClick={() => {
                  dispatch(setGalleryDetails(i))
                  router.push(`/gallery/details?g_index=${i}`)
                }}
              />
              {/* <Image priority quality={100} alt="gallery image" layout="responsive" /> */}
            </a>
            <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-black/60 p-4 rounded shadow shadow-gray-700">
              <a className="hover:text-primary-600 text-lg transition duration-500 font-medium flex">
                <Camera size={18} className="mt-[5px] mr-2" /> : {x.click}&nbsp;&nbsp;
                {!!x.flag && <img src={x.flag} alt="flag" className="rounded-sm" style={{ height: "13px", marginTop: "8px" }} />}
              </a>
              {/* <h6 className="text-slate-300">For better resolution <span className="underline">visit website</span> </h6> */}
            </div>
          </div>

        </div>
      ))}
      {!galleryData.length && gallryImages?.map((x, i) => (
        <div className="mb-1 animate-fadeIn" key={x._id}>
          <div className="group relative block overflow-hidden transition-all duration-500 ">
            <div className="w-full h-full absolute backdrop-blur-sm bg-white/10 z-10"></div>
            <a className="relative transition-all duration-500 group-hover:scale-105 cursor-pointer ">
              <img
                src={x.image}
                alt="gallery image"
                className="animate-slideDown"
              />
            </a>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Gallery;
export async function getStaticProps() {
  const gallryImages = await axios.get('https://api.photohousemagazine.com/gallery').then((response) => {
    return response.data.reverse()
  }).catch((err) => [])
  return { props: { gallryImages }, revalidate: 60 }
}
