import Image from 'next/image';
import React, { useState } from 'react';
import { FaImage } from 'react-icons/fa';
import { base_url } from '../../configs';

const ImageUploader = (props: any) => {
    const { title, imageUrl, setImageUrl } = props
    const [loading, setLoading] = useState(false)
    const handleFile = (e: any) => {
        const newfile = e.target.files[0];
        if (newfile) {
            setLoading(true)
            setImageUrl(null)
            postFile(newfile)
        }

    }
    const postFile = async (newfile: any) => {
        const formData = new FormData(); formData.append('image', newfile);

        await fetch(`${base_url}/upload`, { method: 'POST', body: formData }).then(response => response.json())
            .then(data => { setImageUrl(data.url) })
            .catch(error => console.error(error))
            .finally(() => setLoading(false))

    }
    return (
        <div className='h-[200px] w-full border-dashed border-2 border-gray-600 text-center pt-12 relative'>
            {!!imageUrl && !loading ? <Image
                priority
                src={`${base_url}/${imageUrl}`}
                alt="img"
                layout='fill'
                objectFit='contain'
            /> :
                <div>
                    {loading ? <div>
                        <FaImage color="whitesmoke" size={50} className='m-auto animate-bounce' />
                        <p>Uploading image...</p>
                    </div> :
                        <div>
                            <FaImage color="whitesmoke" size={50} className='m-auto' />
                            <p>{title}</p>
                        </div>}
                </div>}
            <input
                type="file"
                name="image"
                onChange={handleFile}
                className='absolute w-[100%] h-[200px] top-0 left-0 opacity-0 cursor-pointer' required />
        </div>
    );
};

export default ImageUploader;