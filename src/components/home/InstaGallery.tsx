import { InstagramGallery } from "instagram-gallery";
import Image from "next/image";
import { useEffect, useState } from "react";
import insta from "../../Images/Insta.png"
const InstaGallery = () => {
    // Insta_access_token
    const [{ Insta_access_token }, setredirect_links] = useState({
        Insta_access_token: ""
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
                <h1 className="font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-300 pb-4">
                    {/* <Image alt="" src={insta} width={40} height={40} />  */}
                    Instagram Feed
                </h1>
            </div>
            {!!Insta_access_token && <InstagramGallery pagination={true} accessToken={Insta_access_token} count={10} />}
        </div>
    );
};

export default InstaGallery;