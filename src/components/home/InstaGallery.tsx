import axios from "axios";
import { InstagramGallery } from "instagram-gallery";
import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { base_url } from "../../configs";
const InstaGallery = () => {
    // Insta_access_token
    const [{ Insta_access_token, instagram }, setredirect_links] = useState({
        Insta_access_token: "",
        instagram: "#",
    })
    useEffect(() => {
        const getLinks = async () => {
            await axios.get(`${base_url}/redirect_links`)
                .then((data) => setredirect_links(data.data))
                .catch(() => getLinks())
        }
        // getLinks()
    }, [])
    return (
        <div className="px-[1%] mb-5 mx-auto">
            <div className="w-full flex flex-col items-center">
                <h1 className="md:text-5xl text-3xl tracking-wider pb-4 text-white">
                    Instagram Feed
                </h1>

            </div>
            {!!Insta_access_token && <InstagramGallery
                pagination={true}
                accessToken={Insta_access_token}
                count={15} />}
            <div className="w-100 text-center my-3">
                <a href={instagram} target="_blank" rel="noopener noreferrer">
                    <button className="btn-blue"><span ><FaInstagram className="inline mt-[-4px]" /> Follow on Instagram</span></button>
                </a>
            </div>
        </div>
    );
};

export default InstaGallery;