import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { base_url } from "../../configs";

interface TinyMCEEditorProps {
  value: string;
  onChange: (content: string) => void;
}

const CustomTextEditor: React.FC<TinyMCEEditorProps> = ({
  value,
  onChange,
}) => {
  const handleEditorChange = (content: string, editor: any) => {
    onChange(content);
  };

  return (
    <Editor
      apiKey="dajkwpjb9npr838chiefeizimuu30tecabiqbnlcl0eyrtw3"
      value={value}
      onEditorChange={handleEditorChange}
      init={{
        skin: "oxide-dark",
        content_css: "dark",
        plugins:
          "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
        toolbar:
          "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
        tinycomments_mode: "embedded",
        tinycomments_author: "Author name",
        mergetags_list: [
          { value: "First.Name", title: "First Name" },
          { value: "Email", title: "Email" },
        ],
        images_upload_url: `${base_url}/upload`,
        automatic_uploads: true,
        file_picker_types: "image",
        file_picker_callback: (cb, value, meta) => {
          const input = document.createElement("input");
          input.setAttribute("type", "file");
          input.setAttribute("accept", "image/*");
          input.onchange = function () {
            const file = input.files?.[0];
            if (file) {
              const formData = new FormData();
              formData.append("image", file);

              fetch(`${base_url}/upload`, {
                method: "POST",
                body: formData,
              })
                .then((response) => response.json())
                .then((result) => {
                  if (result.url) {
                    const imageUrl = `${base_url}/${result.url}`;
                    cb(imageUrl, { title: file.name });
                  } else {
                    console.error("Error: No URL in response");
                  }
                })
                .catch((error) => {
                  console.error("Error uploading image:", error);
                });
            }
          };
          input.click();
        },
        images_upload_handler: async (blobInfo, success, failure) => {
          const formData = new FormData();
          formData.append("image", blobInfo.blob(), blobInfo.filename());

          try {
            const response = await fetch(`${base_url}/upload`, {
              method: "POST",
              body: formData,
            });

            if (!response.ok) {
              throw new Error("Failed to upload image");
            }

            const data = await response.json();

            if (data.url) {
              const imageUrl = `${base_url}/${data.url}`;
              success({ src: imageUrl });
            } else {
              failure("Image upload failed: No URL returned");
            }
          } catch (error: any) {
            failure(`Image upload failed: ${error.message}`);
          }
        },
      }}
    />
  );
};

export default CustomTextEditor;
