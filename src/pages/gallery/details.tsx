import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaFacebook, FaGlobe, FaInstagram } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight, FiMinusSquare, FiPlusSquare } from 'react-icons/fi';
import { setGalleryDetails } from '../../store/slices/gallerySlice';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/reduxHooks';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Details = () => {
    const dispatch = useAppDispatch()

    const router = useRouter()
    const { g_index } = router.query

    const [imageIndex, setImageIndex] = useState(Number(g_index))
    const zoomScale = [.5, 1, 1.5, 2.5, 3.5]
    const [zoom, setZoom] = useState(zoomScale[1])

    // The `state` arg is correctly typed as `RootState` already
    const { galleryDetails, galleryData } = useAppSelector((state) => state.gallery)

    const handlePrevNext = (index: number) => {
        if (index >= 0 && index < galleryData.length) {
            setImageIndex(index)
            dispatch(setGalleryDetails(index))
        }
    }
    const handleZoom = (xoom: number) => {
        if (xoom) {
            setZoom(z => !!zoomScale[zoomScale.indexOf(z) + 1] ? zoomScale[zoomScale.indexOf(z) + 1] : 1)
        } else {
            setZoom(z => !!zoomScale[zoomScale.indexOf(z) - 1] ? zoomScale[zoomScale.indexOf(z) - 1] : 1)
        }
    }
    return (
        <div className='grid grid-cols-10'>
            {/* <p className='text-emerald-300'>{count}</p>
            <p className='text-emerald-300' onClick={() => dispatch(increment())}>Inc</p>
            <p className='text-emerald-300' onClick={() => dispatch(incrementByAmount(15))}>add15</p>
            <p className='text-emerald-300' onClick={() => dispatch(decrement())}>Dec</p> */}
            <div className="lg:col-span-7 col-span-10  relative">
                <Image
                    priority
                    src={galleryDetails.image}
                    quality={100}
                    // className="z-[-100]"
                    layout="fill"
                    objectFit="cover"
                    alt="gallary image"
                />
                <div className="min-h-[90vh] relative backdrop-blur-sm bg-white/10 flex justify-center  cursor-move">
                    <TransformWrapper>
                        <TransformComponent>
                            <img src={galleryDetails.image} alt="" className="h-[90vh]" style={{ transform: `scale(${zoom})` }} />

                            {/* <Image
                                priority
                                src={galleryDetails.image}
                                quality={100}
                                style={{ transform: `scale(${zoom})` }}
                                // className={`scale-[${zoom}]`}
                                layout="fill"
                                objectFit="contain"
                                alt="gallary image"
                            /> */}
                        </TransformComponent>
                    </TransformWrapper>
                    <div className="flex justify-between absolute top-[48%] w-full px-2">
                        {imageIndex > 0 ? <FiChevronLeft size={30} color="white" className=' bg-gray-500 rounded-full cursor-pointer hover:bg-gray-400' onClick={() => handlePrevNext(Number(imageIndex) - 1)} /> : <span className='opacity-0'>.</span>}
                        {imageIndex < (galleryData.length - 1) && <FiChevronRight size={30} color="white" className=' bg-gray-500 rounded-full cursor-pointer hover:bg-gray-400' onClick={() => handlePrevNext(Number(imageIndex) + 1)} />}
                    </div>
                    <div className="flex justify-center absolute bottom-[5px] w-full px-2">
                        <FiPlusSquare size={30} color="white" className='cursor-zoom-in bg-black/50 rounded-lg mr-3' onClick={() => handleZoom(1)} />
                        <FiMinusSquare size={30} color="white" className='cursor-zoom-out bg-black/50 rounded-lg' onClick={() => handleZoom(0)} />
                    </div>
                </div>
            </div>
            <div className="lg:col-span-3 col-span-10 ">
                <div className="flex justify-between container m-auto items-center border-b-2 pb-1 flex-col pt-4">
                    <div className="w-full flex flex-col items-center ">
                        <h1 className="font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-300 pb-4">
                            Publication Photohouse Magazine
                        </h1>
                    </div>
                </div>
                <div className="grid grid-cols-1 px-2">
                    {
                        galleryDetails.artists?.map((artist: any, i: number) => <div className="items-center bg-gray-800 rounded-lg shadow flex border-gray-600 p-2 my-1" key={i + 1212}>
                            <img className="w-[50px] h-[50px] rounded-full ring ring-emerald-400" src={artist.photo} alt="Bonnie Avatar" />
                            <div className="px-5">
                                <h3 className="text-sm font-bold tracking-tight text-white flex">{artist.name}&nbsp;&nbsp;
                                    {!!artist.flag && <img src={artist.flag} alt="flag" className="rounded-sm" style={{ height: "10px", marginTop: "6px" }} />}
                                </h3>
                                <small className="text-gray-400 text-xs block">{artist.profession}</small>
                                {!!artist.facebook && <a href={artist.facebook} target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className="inline mr-2 text-gray-200  hover:text-emerald-300 cursor-pointer" size={13} />
                                </a>}
                                {!!artist.instagram && <a href={artist.instagram} target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="inline mx-2 text-gray-200  hover:text-emerald-300 cursor-pointer" size={13} />
                                </a>}
                                {!!artist.website && <a href={artist.website} target="_blank" rel="noopener noreferrer">
                                    <FaGlobe className="inline mx-2 text-gray-200  hover:text-emerald-300 cursor-pointer" size={13} />
                                </a>}

                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Details;