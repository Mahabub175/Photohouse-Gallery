import dynamic from "next/dynamic";
import { useState, ChangeEvent, FormEvent } from "react";
import CustomInput from "../UI/CustomInput";
import "react-quill/dist/quill.snow.css";
import CustomImageUploader from "./CustomImageUploader";
import { formats, modules } from "../../utils/helpers";
import toast from "react-hot-toast";
import { base_url } from "../../configs";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface InterviewData {
  title: string;
  content: string;
  short_descriptions: string;
}

const AddInterview = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [interviewData, setInterviewData] = useState<InterviewData>({
    title: "",
    content: "",
    short_descriptions: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const body = new FormData();
    body.append("thumbnail_image", imageFile as Blob);
    body.append("title", interviewData?.title);
    body.append("content", interviewData?.content);
    body.append("short_descriptions", interviewData?.short_descriptions);
    body.append("category", "4");

    setLoading(true);
    await postDatas(body);
    setLoading(false);
  };

  const postDatas = async (body: FormData) => {
    try {
      const response = await fetch(`${base_url}/interviews`, {
        method: "POST",
        body,
      });

      if (!response.ok) {
        toast.error("Something went wrong! Please try again!");
        throw new Error("Failed to submit interview data");
      }

      await response.json();
      setInterviewData({ title: "", content: "", short_descriptions: "" });
      setImageFile(null);
      setImageUrl(null);
      toast.success("Successfully Added Interview!");
    } catch (error) {
      console.error("Error:", error);
    }
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

  const handleImageUrlChange = (url: string | null, file: File | null) => {
    setImageFile(file);
    setImageUrl(url);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-1 gap-10 mb-4">
        <CustomImageUploader
          title="Drop Interview Thumbnail image here..."
          setImageUrl={handleImageUrlChange}
          imageUrl={imageUrl}
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
          value={interviewData.short_descriptions}
          name="short_descriptions"
          label="Short Descriptions"
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
