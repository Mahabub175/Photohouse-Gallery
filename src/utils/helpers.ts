export const helperTesting = () => {
  return console.log("working!");
};

export const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { header: "3" }, { font: [] }],
    [{ size: ["small", "medium", "large", "huge"] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    ["link", "image", "video"],
    ["blockquote", "code-block"],
    [{ script: "sub" }, { script: "super" }],
    [{ direction: "rtl" }],
    ["clean"],
  ],
};

export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "indent",
  "align",
  "color",
  "background",
  "link",
  "image",
  "video",
  "blockquote",
  "code-block",
  "script",
  "direction",
  "clean",
];
