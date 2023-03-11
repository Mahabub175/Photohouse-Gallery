import axios from 'axios';
import { useState } from 'react';
import { base_url } from '../../configs';
import CustomInput from '../UI/CustomInput';
import ImageUploader from './ImageUploader';

const AddMagazine = () => {
    const [thumbnail, setThumbnail]: any = useState(null)
    const [loading, setLoading] = useState(false)
    const [magaData, setMagaData] = useState({
        Redirectlink: "", name: ""
    })
    const handleSubmit = (e: any) => {
        e.preventDefault()
        const body = { thumbnail, redirect_link: magaData.Redirectlink, name: magaData.name }
        console.log(body)
        postDatas(body)
    }
    const postDatas = async (body: any) => {
        setLoading(true)
        await axios.post(`${base_url}/magazines`, body)
            .then(data => {
                alert(data.data?.message)
            })
            .catch(error => alert("An error has occured! please try again."))
            .finally(() => setLoading(false))
    }
    const handleChange = (e: any) => {
        setMagaData({ ...magaData, [e.target.name]: e.target.value })
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-1 gap-10 mb-4">
                <ImageUploader title={"Drop magazine image here..."} setImageUrl={setThumbnail} imageUrl={thumbnail} />
            </div>
            <div className="grid md:grid-cols-2 gap-10">
                <CustomInput type="text" placeholder=""
                    value={magaData.name}
                    name="name"
                    label="Name"
                    required
                    onChange={(e: any) => handleChange(e)}
                />
                <CustomInput type="text" placeholder=""
                    value={magaData.Redirectlink}
                    name="Redirectlink"
                    label="Redirect link"
                    onChange={(e: any) => handleChange(e)}
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