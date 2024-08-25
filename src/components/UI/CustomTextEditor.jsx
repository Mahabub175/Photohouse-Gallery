import { base_url } from "../../configs";
import { Editor } from "@tinymce/tinymce-react";

const CustomTextEditor = ({ value, onChange }) => {
  const handleEditorChange = (content, editor) => {
    onChange(content);
  };

  return (
    <Editor
      apiKey="wsmoxt8fne8cotbs9f98y3v488g8wi73umknooj3k1v5b3mp"
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
        images_upload_handler: (blobInfo, success, failure, progress) => {
          const formData = new FormData();
          formData.append("image", blobInfo.blob(), blobInfo.filename());

          const xhr = new XMLHttpRequest();
          xhr.open("POST", `${base_url}/upload`, true);

          xhr.upload.onprogress = function (e) {
            if (e.lengthComputable) {
              const percent = Math.round((e.loaded / e.total) * 100);
              progress(percent);
            }
          };

          xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
              const data = JSON.parse(xhr.responseText);
              if (data.url) {
                const imageUrl = `${base_url}/${data.url}`;
                success(imageUrl);
              } else {
                failure("Image upload failed: No URL returned");
              }
            } else {
              failure(
                "Image upload failed: Server responded with status " +
                  xhr.status
              );
            }
          };

          xhr.onerror = function () {
            failure("Image upload failed: Network error");
          };

          xhr.send(formData);
        },
      }}
    />
  );
};

export default CustomTextEditor;
