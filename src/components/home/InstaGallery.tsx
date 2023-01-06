import { InstagramGallery } from "instagram-gallery";
import Image from "next/image";
import { useEffect, useState } from "react";
import insta from "../../Images/Insta.png"
const InstaGallery = () => {
    // Insta_access_token
    const [{ Insta_access_token, instagram }, setredirect_links] = useState({
        Insta_access_token: "",
        instagram: "#",
    })
    useEffect(() => {
        const getLinks = () => {
            fetch('https://api.photohousemagazine.com/redirect_links').then((response) => response.json())
                .then((data) => setredirect_links(data))
                .catch(() => getLinks())
        }
        getLinks()
    }, [])
    return (
        <div className="px-[1%] mb-5 mt-2">
            <div className="w-full flex flex-col items-center py-2">
                <h1 className="font-bold text-transparent md:text-5xl text-3xl bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-300 pb-4">
                    Instagram Feed
                </h1>
            </div>
            <div className="w-100 text-center mb-2">
                <a href={instagram} target="_blank" rel="noopener noreferrer">
                    <button className="btn-blue"><Image alt="" src={insta} width={13} height={13} /> <span >Follow us</span></button>
                </a>
            </div>
            {!!Insta_access_token && <InstagramGallery pagination={true} accessToken={Insta_access_token} count={15} />}
        </div>
    );
};

export default InstaGallery;