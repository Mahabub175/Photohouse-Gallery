import axios from 'axios';
import { useState } from 'react';
import { MinusSquare, PlusSquare } from 'react-feather';
import { base_url } from '../../configs';
import { countries } from '../../utils/countries';
import AvatarUpload from '../UI/AvatarUpload';
import CustomInput from '../UI/CustomInput';
import ImageUploader from './ImageUploader';

const DashboardGallery = () => {
    const artistObj = {
        photo: "",
        name: "",
        profession: "",
        facebook: "",
        instagram: "",
        website: "",
        Country: "",
        flag: "",
        isDefault: true
    }
    const [thumbnail, setThumbnail]: any = useState(null)
    const [imageUrl, setImageUrl]: any = useState(null)
    const [artists, setArtists] = useState([artistObj])
    const [loading, setLoading] = useState(false)
    const [isHomeSlider, setisHomeSlider] = useState(false)
    const handleSubmit = (e: any) => {
        e.preventDefault()
        const defaultGuy = artists.find((x, i) => x.isDefault)
        const body = { artists, thumbnail, image: imageUrl, isHomeSlider, click: defaultGuy?.name || "", flag: defaultGuy?.flag || "" }
        console.log(body)
        // return
        postDatas(body)
    }
    const postDatas = async (body: any) => {
        setLoading(true)
        await axios.post(`${base_url}/gallery`, body)
            .then(data => {
                alert(data.data?.message)
            })
            .catch(error => alert("An error has occured! please try again."))
            .finally(() => setLoading(false))
    }
    const handleChange = (e: any, index: number) => {
        setArtists((art: any) => {
            const copy = [...art]
            const item = { ...art[index], [e.target.name]: e.target.value }
            copy[index] = item
            return copy
        })
    }
    const handleisDefault = (e: any, index: number) => {
        setArtists((art: any) => {
            const copy = [...art]
            const item = { ...art[index], [e.target.name]: e.target.checked }
            copy[index] = item
            return copy
        })
    }
    const handleCountryChange = (e: any, index: number) => {
        setArtists((art: any) => {
            const copy = [...art]
            const item = { ...art[index], Country: JSON.parse(e.target.value)?.name, flag: JSON.parse(e.target.value)?.flag }
            copy[index] = item
            return copy
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-10 mb-4">
                <ImageUploader title={"Drop thumbnail image here..."} setImageUrl={setThumbnail} imageUrl={thumbnail} />
                <ImageUploader title={"Drop gallery image here..."} setImageUrl={setImageUrl} imageUrl={imageUrl} />
            </div>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    artists.map((item, index) => <div className="grid md:grid-cols-2 gap-6 border rounded-md p-5" key={index + 445544554}>
                        <AvatarUpload setArtists={setArtists} artIndex={index} />
                        <CustomInput type="text" placeholder=""
                            value={item.name}
                            name="name"
                            label="Name"
                            required
                            onChange={(e: any) => handleChange(e, index)} />
                        <CustomInput type="text" placeholder=""
                            value={item.profession}
                            name="profession"
                            label="Profession"
                            onChange={(e: any) => handleChange(e, index)} />
                        <CustomInput type="text" placeholder=""
                            value={item.facebook}
                            name="facebook"
                            label="Facebook"
                            onChange={(e: any) => handleChange(e, index)} />
                        <CustomInput type="text" placeholder=""
                            value={item.instagram}
                            name="instagram"
                            label="Instagram"
                            onChange={(e: any) => handleChange(e, index)} />
                        <CustomInput type="text" placeholder=""
                            value={item.website}
                            name="website"
                            label="Website"
                            onChange={(e: any) => handleChange(e, index)} />
                        <div>
                            <select
                                id="Country"
                                name="Country"
                                onChange={(e: any) => handleCountryChange(e, index)}
                                className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">Select</option>
                                {countries?.map((country: any) => {
                                    // console.log(country)
                                    return <option
                                        value={JSON.stringify(country)}
                                        key={country.name}>
                                        {country.name}
                                    </option>
                                })}

                            </select>
                        </div>
                        <div>
                            <input type="checkbox" onChange={(e: any) => handleisDefault(e, index)} checked={item.isDefault} name="isDefault" id="isDefault" className='h-[15px] w-[15px] mt-4' /> &nbsp; <span>Default</span>
                        </div>
                        {artists.length > 1 && <div>
                            <MinusSquare size={20} color="tomato" onClick={() => {
                                setArtists(art => art.filter((item, j) => j !== index))
                            }} />
                        </div>}
                        {index === artists.length - 1 && <div>
                            <PlusSquare size={20} color="cyan" onClick={() => {
                                setArtists(art => [...art, artistObj])
                            }} />
                        </div>}
                    </div>)
                }

            </div>
            <div className='my-2'>
                <input type="checkbox"
                    onChange={(e: any) => setisHomeSlider(e.target.checked)} checked={isHomeSlider}
                    name="isDefault" id="isDefault" className='h-[15px] w-[15px] mt-4' /> &nbsp; <span>Add this to home slider</span>
            </div>
            <div className="flex justify-center mt-5">
                <button type="submit" className="btn-blue px-12 rounded-md " disabled={loading}>
                    {loading ? <span className="animate-pulse">Loading...</span> : "Submit"}
                </button>
            </div>
        </form>
    );
};

export default DashboardGallery;