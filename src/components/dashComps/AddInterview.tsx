import dynamic from "next/dynamic";
import { useState } from "react";
import ImageUploader from "./ImageUploader";
import toast from "react-hot-toast";
import CustomInput from "../UI/CustomInput";

const AddInterview = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [interviewData, setInterviewData] = useState({
    title: "",
    content: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const body = {
      image,
      title: interviewData.title,
      content: interviewData.content,
    };
    postDatas(body);
  };

  const postDatas = async (body: any) => {
    console.log(body);
  };

  const handleChange = (e: any) => {
    setInterviewData({ ...interviewData, [e.target.name]: e.target.value });
  };

  const handleContentChange = (newContent: any) => {
    setInterviewData({ ...interviewData, content: newContent });
  };

  const config = {
    readonly: false,
    uploader: {
      insertImageAsBase64URI: true,
    },
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-1 gap-10 mb-4">
        <ImageUploader
          title={"Drop Interview Thumbnail image here..."}
          setImageUrl={setImage}
          imageUrl={image}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        <CustomInput
          type="text"
          placeholder=""
          value={interviewData.title}
          name="title"
          label="Title"
          required
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-center mt-5">
        <button
          type="submit"
          className="btn-blue px-12 rounded-md"
          disabled={loading}
        >
          {loading ? (
            <span className="animate-pulse">Loading...</span>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
};

export default AddInterview;
