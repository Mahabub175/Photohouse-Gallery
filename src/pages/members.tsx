import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Facebook, Youtube, Globe, Instagram, Mail } from 'react-feather';

const Members = (props: any) => {

    const router = useRouter();

    // const [membersList, setmembersList] = useState([])
    // useEffect(() => {
    //     axios.get('https://api.photohousemagazine.com/members').then((response) => {
    //         console.log(response.data)
    //         setmembersList(response.data)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }, [])
    return (
        <>
            <div className="w-full flex flex-col items-center py-10">
                <h1 className="font-bold text-transparent sm:text-5xl text-4xl bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-300 pb-4">
                    Our Members
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10">
                {
                    props.membersList.map((member: any) =>
                        <div key={member._id} className="w-full">
                            .
                            <div className='max-w-[200px] m-auto rounded-lg shadow-md bg-gray-800 border  border-gray-700'>
                                <div className="flex flex-col items-center pt-5">
                                    <Image
                                        priority
                                        src={`data:image/png;base64,${member.image.img}`}
                                        width={80}
                                        height={80}
                                        alt="image"
                                        className={`rounded-full shadow-lg`}
                                    />
                                    <h5 className="mb-1 text-xl font-medium text-white">{member.name}</h5>
                                    <span className="text-sm text-gray-400">{member.profession}</span>
                                    {/* <span className="text-sm text-gray-200">{member.email}</span> */}
                                </div>
                                <div className="flex justify-evenly my-5">
                                    <div className='cursor-pointer'>
                                        <a target={"_blank"} href={member.member} rel="noreferrer">
                                            <Facebook color="white" size={20} />
                                        </a>
                                    </div>
                                    <div className='cursor-pointer'>
                                        <a target={"_blank"} href={member.Instagram} rel="noreferrer">
                                            <Instagram color="white" size={20} />
                                        </a>
                                    </div>
                                    <div className='cursor-pointer'>
                                        <a target={"_blank"} href={member.Youtube} rel="noreferrer">
                                            <Youtube color="white" size={20} />
                                        </a>
                                    </div>
                                    <div className='cursor-pointer'>
                                        <a target={"_blank"} href={member.Website} rel="noreferrer">
                                            <Globe color="white" size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
            <div className="flex justify-center my-10">
                <button type="button" className="btn-blue px-12 rounded-md" onClick={() => router.push("/register")}>
                    Be a Member
                </button>
            </div>
        </>
    );
};

export default Members;
export async function getServerSideProps() {
    const membersList = await axios.get('https://api.photohousemagazine.com/members').then((response) => {
        return response.data
    }).catch((err) => {
        console.log(err)
    })
    return {
        props: {
            membersList
        }
    }
}