import Image from "next/image";
import { useState } from "react";
import AvatarEditor from "react-avatar-editor";
import { Camera } from "react-feather";
import { base_url } from "../../configs";
import Modal from "./Modal";

const AvatarUpload = ({ setArtists, artIndex }: any) => {
    const [showModal, setShowModal] = useState(false);
    let editor: any = "";
    const [picture, setPicture]: any = useState({
        cropperOpen: false, img: null, zoom: 2, position: { x: 0.5, y: 0.5 }, croppedImg: null
    });

    const handleSlider = (event: any) => setPicture({ ...picture, zoom: +event.target.value });

    const handleCancel = () => {
        setShowModal(false)
        // setPicture({ ...picture, cropperOpen: false })
    };

    const setEditorRef = (ed: any) => editor = ed

    const dataURLtoFile = (dataurl: any, filename: string) => {
        let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) u8arr[n] = bstr.charCodeAt(n);

        return new File([u8arr], filename, { type: mime });
    }
    const handleSave = (e: any) => {
        if (!!setEditorRef) {
            const canvasScaled = editor.getImageScaledToCanvas();
            const croppedImg = canvasScaled.toDataURL();
            const file = dataURLtoFile(croppedImg, "profile");
            postFile(file)
            setPicture({ ...picture, img: null, cropperOpen: false, croppedImg: croppedImg });
            setShowModal(false)
        }
    };
    const postFile = async (newfile: any) => {
        const formData = new FormData(); formData.append('image', newfile);
        await fetch(`${base_url}/upload`, { method: 'POST', body: formData }).then(response => response.json())
            .then(data => {
                setArtists((art: any) => {
                    const copy = [...art]
                    const item = { ...art[artIndex], photo: data.url }
                    copy[artIndex] = item
                    return copy
                })
            })
            .catch(error => alert("An error has occured! please try again."))
    }
    const handleFileChange = (e: any) => {
        let url = URL.createObjectURL(e.target.files[0]);
        // console.log(url);
        setPicture({ ...picture, img: url, cropperOpen: true });
        setShowModal(true)
    };

    return (
        <div>
            <div className="w-full text-center">
                {/* <img className="mx-auto" src={picture.croppedImg} style={{ width: "200px", height: "200px", padding: "5", borderRadius: '50%' }} alt='Avatar' /> <br /> */}
                {/* <input className="w-[200px] h-[200px]" type="file" accept="image/*" onChange={handleFileChange} required /> */}
                <div className="relative w-[80px] mx-auto">
                    <input onChange={handleFileChange} type="file" className="cursor-pointer h-[80px] w-[80px] opacity-0 relative z-10" id="photo" name="photo" />
                    <div className="border-dashed border-2 border-gray-300 h-[80px] w-[80px] rounded-full mt-[-80px] ">
                        {!picture.croppedImg ? <Camera color="whitesmoke" size={22} className='m-auto mt-[35%]' /> : <Image
                            priority
                            src={picture.croppedImg}
                            width={150}
                            height={150}
                            alt="image"
                            className={`rounded-full shadow-lg `}
                        />}
                    </div>
                </div>
            </div>
            <Modal Title="Adjust photo" showModal={showModal} setShowModal={setShowModal}>
                {picture.cropperOpen && (
                    <div>
                        <AvatarEditor
                            ref={setEditorRef}
                            image={picture.img}
                            position={picture.position}
                            onPositionChange={position => setPicture({ ...picture, position })}
                            width={200}
                            height={200}
                            border={50}
                            color={[255, 255, 255, 0.6]} // RGBA
                            rotate={0}
                            scale={picture.zoom}
                        />
                        <input
                            type="range"
                            id="vol" name="vol" min="1" max="10" step="0.1"
                            className="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-400"
                            value={picture.zoom}
                            onChange={handleSlider} />

                        <div className="float-right">
                            {/* <button className="btn-danger" onClick={handleCancel}>Cancel</button> */}
                            <button className="btn-blue" onClick={handleSave}>Save</button>
                        </div>

                    </div>
                )}
            </Modal>
        </div>
    );
};

export default AvatarUpload;