import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaFacebookSquare, FaFirefoxBrowser, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

const Members = (props: any) => {

    const router = useRouter();

    const [membersList, setmembersList] = useState([])
    useEffect(() => {
        const getData = async () => {
            await axios.get('https://api.photohousemagazine.com/members').then((response) => {
                console.log(response.data)
                setmembersList(response.data)
            }).catch((err) => {
                console.log(err)
                getData()
            })
        }
        getData()
    }, [])
    return (
        <>
            <div className="w-full flex flex-col items-center py-5">
                <h1 className="font-bold text-transparent sm:text-5xl text-4xl bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-300 pb-4">
                    Our Members
                </h1>
            </div>
            <div className="flex justify-center mb-10">
                <button type="button" className="btn-blue px-12 rounded-md" onClick={() => router.push("/register")}>
                    Be a Member
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10">
                {
                    membersList.map((member: any) =>
                        <div key={member._id} className="w-full">
                            <div className='max-w-[200px] m-auto shadow-[cyan] shadow-sm rounded-lg bg-gray-800 border  border-gray-700 animate-slideDown'>
                                {/* <div className="relative max-w-[198px] h-[120px] m-auto">
                                   shadow-[rgba(13, 38, 76, 0.19) 0px 9px 20px]
                                </div> */}
                                <div className="flex flex-col items-center pt-5">
                                    <Image
                                        priority
                                        src={`data:image/png;base64,${member.image.img}`}
                                        width={100}
                                        height={100}
                                        alt="image"
                                        className={`rounded-full`}
                                    />

                                    <h5 className="mb-1 text-xl font-medium text-white">{member.name} <span title={member.Country}><Image
                                        src={member.Flag}
                                        width={23}
                                        height={14}
                                        alt='Flag'
                                        className={`rounded`}
                                    /></span></h5>
                                    <span className="text-sm text-gray-400">{member.profession}</span>
                                    {/* <span className="text-sm text-gray-200">{member.email}</span> */}
                                </div>
                                <div className="flex justify-evenly my-5">
                                    <div className='cursor-pointer'>
                                        {!!member.Facebook ? <a target={"_blank"} href={member.Facebook} rel="noreferrer">
                                            <FaFacebookSquare color="cyan" size={20} />
                                        </a> : <a href="#">
                                            <FaFacebookSquare color="gray" size={20} />
                                        </a>}
                                    </div>
                                    <div className='cursor-pointer'>
                                        {!!member.Instagram ? <a target={"_blank"} href={member.Instagram} rel="noreferrer">
                                            <FaInstagramSquare color="cyan" size={20} />
                                        </a> : <a href="#">
                                            <FaInstagramSquare color="gray" size={20} />
                                        </a>}

                                    </div>
                                    <div className='cursor-pointer'>
                                        {!!member.LinkedIn ? <a target={"_blank"} href={member.LinkedIn} rel="noreferrer">
                                            <FaLinkedin color="cyan" size={20} />
                                        </a> : <a href="#">
                                            <FaLinkedin color="gray" size={20} />
                                        </a>}
                                    </div>
                                    <div className='cursor-pointer'>
                                        {!!member.Website ? <a target={"_blank"} href={member.Website} rel="noreferrer">
                                            <FaFirefoxBrowser color="cyan" size={20} />
                                        </a> : <a href="#">
                                            <FaFirefoxBrowser color="gray" size={20} />
                                        </a>}

                                    </div>
                                </div>
                            </div>
                        </div>)}
            </div>
        </>
    );
};

export default Members;
// export async function getServerSideProps() {
//     const membersList = await axios.get('https://api.photohousemagazine.com/members').then((response) => {
//         return response.data
//     }).catch((err) => {
//         console.log(err)
//     })
//     return {
//         props: {
//             membersList
//         }
//     }
// }