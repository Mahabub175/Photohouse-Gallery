import axios from 'axios';
import { useState } from 'react';
import { base_url } from '../../configs';
import CustomInput from '../UI/CustomInput';
import ImageUploader from './ImageUploader';

const AddMagazine = () => {
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
    const [loading, setLoading] = useState(true)
    const handleSubmit = (e: any) => {
        e.preventDefault()
        const body = { artists, thumbnail, image: imageUrl }
        // console.log(body)
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
    return (
        <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-1 gap-10 mb-4">
                <ImageUploader title={"Drop magazine image here..."} setImageUrl={setThumbnail} imageUrl={thumbnail} />
            </div>
            <div className="grid md:grid-cols-2 gap-10">
                <CustomInput type="text" placeholder=""
                    // value={item.name}
                    name="name"
                    label="Name"
                    required
                // onChange={(e: any) => handleChange(e, index)} 
                />
                <CustomInput type="text" placeholder=""
                    // value={item.Redirect link}
                    name="Redirect link"
                    label="Redirect link"
                // onChange={(e: any) => handleChange(e, index)} 
                />

            </div>
            <div className="flex justify-center mt-5">
                <button type="submit" className="btn-blue px-12 rounded-md " disabled={loading}>
                    {loading ? <span className="animate-pulse">Loading...</span> : "Submit"}
                </button>
            </div>
        </form>
    );
};

export default AddMagazine;