import dynamic from "next/dynamic";
import { useState, ChangeEvent, FormEvent } from "react";
import CustomInput from "../UI/CustomInput";
import "react-quill/dist/quill.snow.css";
import ImageUploader from "./ImageUploader";
import { formats, modules } from "../../utils/helpers";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface InterviewData {
  title: string;
  content: string;
  short_description: string;
}

const AddInterview = () => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [interviewData, setInterviewData] = useState<InterviewData>({
    title: "",
    content: "",
    short_description: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const body = {
      image,
      title: interviewData?.title,
      content: interviewData?.content,
      short_description: interviewData?.short_description,
    };
    setLoading(true);
    await postDatas(body);
    setLoading(false);
  };

  const postDatas = async (body: InterviewData & { image: string | null }) => {
    console.log(body);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInterviewData({ ...interviewData, [e.target.name]: e.target.value });
  };

  const handleContentChange = (newContent: string) => {
    setInterviewData((prevData) => ({
      ...prevData,
      content: newContent,
    }));
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
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Content</label>
        <ReactQuill
          value={interviewData.content}
          onChange={handleContentChange}
          modules={modules}
          formats={formats}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <CustomInput
          type="text"
          placeholder=""
          value={interviewData.title}
          name="title"
          label="Title"
          required
          onChange={handleChange}
        />
        <CustomInput
          type="text"
          placeholder=""
          value={interviewData.title}
          name="short_description"
          label="Short Description"
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
