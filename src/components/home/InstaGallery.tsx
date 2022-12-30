import { InstagramGallery } from "instagram-gallery";
import Image from "next/image";
import insta from "../../Images/Insta.png"
const InstaGallery = () => {
    return (
        <div className="px-[1%] mb-5 mt-2">
            <div className="w-full flex flex-col items-center py-2">
                <h1 className="font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-300 pb-4">
                    <Image
                        src={insta}
                        width={40}
                        height={40}
                    />Instagram
                </h1>
            </div>
            <InstagramGallery
                pagination={true}
                accessToken="IGQVJXaXdkX0N1d0ZADUlJzbE1jUGlhLWJEMEh2THNMZATNlNUpiS2tzM2U4a3BaNGFtaUh1bEw0VEdOMHlWSXNFbktSS1lSNkNSbE1PWExWeHd3NnFmSzNlYklMQl9EZA2J2QmlONkF2aVI1ZAWxJVlN2dwZDZD"
                count={10} />
        </div>
    );
};

export default InstaGallery;