import { useState, ChangeEvent, FormEvent } from "react";
import CustomInput from "../UI/CustomInput";
import CustomImageUploader from "./CustomImageUploader";
import toast from "react-hot-toast";
import { base_url } from "../../configs";
import CustomTextEditor from "../UI/CustomTextEditor";

interface InterviewData {
  title: string;
  content: string;
  interviewee_name: string;
  interviewee_instagram_link?: string;
  interviewee_facebook_link?: string;
  interviewee_other_link?: string;
  interviewer_name: string;
  interviewer_instagram_link?: string;
  interviewer_facebook_link?: string;
}

const AddInterview = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [interviewData, setInterviewData] = useState<InterviewData>({
    title: "",
    content: "",
    interviewee_name: "",
    interviewee_instagram_link: "",
    interviewee_facebook_link: "",
    interviewee_other_link: "",
    interviewer_name: "",
    interviewer_instagram_link: "",
    interviewer_facebook_link: "",
  });
  const [contentError, setContentError] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!interviewData.content.trim()) {
      setContentError("Content cannot be empty.");
      toast.error("Please Enter Content!");
      return;
    } else {
      setContentError("");
    }

    const body = new FormData();
    if (imageFile) {
      body.append("thumbnail_image", imageFile as Blob);
    }
    Object.entries(interviewData).forEach(([key, value]) => {
      body.append(key, value);
    });

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
      setInterviewData({
        title: "",
        content: "",
        interviewee_name: "",
        interviewee_instagram_link: "",
        interviewee_facebook_link: "",
        interviewee_other_link: "",
        interviewer_name: "",
        interviewer_instagram_link: "",
        interviewer_facebook_link: "",
      });
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

  const handleContentChange = (content: string) => {
    setInterviewData((prevData) => ({
      ...prevData,
      content,
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
      <div className="grid md:grid-cols-1 gap-10 mt-10">
        <CustomInput
          type="text"
          placeholder=""
          value={interviewData.title}
          name="title"
          label="Title"
          required={true}
          onChange={handleChange}
        />
      </div>
      <div className="grid md:grid-cols-1 gap-10 mt-10">
        <CustomInput
          type="text"
          placeholder=""
          value={interviewData.interviewee_name}
          name="interviewee_name"
          label="Interviewee Name"
          required={true}
          onChange={handleChange}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-10 mt-10">
        <CustomInput
          type="text"
          placeholder=""
          value={interviewData.interviewee_instagram_link || ""}
          name="interviewee_instagram_link"
          label="Interviewee Instagram Link"
          required={false}
          onChange={handleChange}
        />
        <CustomInput
          type="text"
          placeholder=""
          value={interviewData.interviewee_facebook_link || ""}
          name="interviewee_facebook_link"
          label="Interviewee Facebook Link"
          required={false}
          onChange={handleChange}
        />
        <CustomInput
          type="text"
          placeholder=""
          value={interviewData.interviewee_other_link || ""}
          name="interviewee_other_link"
          label="Interviewee Other Link"
          required={false}
          onChange={handleChange}
        />
      </div>
      <div className="grid md:grid-cols-1 gap-10 mt-10">
        <CustomInput
          type="text"
          placeholder=""
          value={interviewData.interviewer_name}
          name="interviewer_name"
          label="Interviewer Name"
          required={true}
          onChange={handleChange}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <CustomInput
          type="text"
          placeholder=""
          value={interviewData.interviewer_instagram_link || ""}
          name="interviewer_instagram_link"
          label="Interviewer Instagram Link"
          required={false}
          onChange={handleChange}
        />
        <CustomInput
          type="text"
          placeholder=""
          value={interviewData.interviewer_facebook_link || ""}
          name="interviewer_facebook_link"
          label="Interviewer Facebook Link"
          required={false}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Content</label>
        <CustomTextEditor
          value={interviewData.content}
          onChange={handleContentChange}
        />
        {contentError && <p className="text-red-500">{contentError}</p>}
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
