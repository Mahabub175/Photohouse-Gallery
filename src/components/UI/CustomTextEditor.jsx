// components/CustomTextEditor.jsx
import { useRef } from "react";
import dynamic from "next/dynamic";
import { base_url } from "../../configs";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const CustomTextEditor = ({ value, onChange }) => {
  const editorRef = useRef(null);

  const config = {
    readonly: false,
    theme: "dark",
    uploader: {
      insertImageAsBase64URI: false,
      url: `${base_url}/upload`,
      format: "json",
      method: "POST",
      filesVariableName: () => "image",
      withCredentials: false,
      isSuccess: (resp) => {
        return resp && resp.url;
      },
      process: (resp) => {
        if (resp && resp.url) {
          const imageUrl = `${base_url}/${resp.url}`;

          return {
            files: [{ url: imageUrl }],
            baseurl: "",
            path: imageUrl,
          };
        }
        return resp;
      },
      error: (e) => console.error("Error uploading image:", e),
    },
    buttons: [
      "source",
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "|",
      "fontsize",
      "ul",
      "ol",
      "|",
      "outdent",
      "indent",
      "|",
      "font",
      "fontsize",
      "brush",
      "paragraph",
      "|",
      "image",
      "table",
      "link",
      "|",
      "align",
      "undo",
      "redo",
      "|",
      "hr",
      "eraser",
      "copyformat",
      "|",
      "fullsize",
      "selectall",
      "print",
      "|",
      "video",
      "cut",
      "copy",
      "paste",
      "find",
    ],
    placeholder: "Start typing...",
  };

  return (
    <JoditEditor
      ref={editorRef}
      value={value}
      config={config}
      onBlur={(newContent) => onChange(newContent)}
    />
  );
};

export default CustomTextEditor;
