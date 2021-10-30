/* eslint-disable */
import Prism from "prismjs";
// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import "prismjs/themes/prism.css";

import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";

import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import React, { useState, useRef, createRef } from "react";
import AWS from "aws-sdk";
export default function Writer(props) {
  // const editorRef = createRef();
  const editorRef = useRef();

  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  // React.useEffect(() => {
  //   if (editorRef.current) {
  //     editorRef.current.getInstance.removeHook("addImageBlobHook");
  //     editorRef.current
  //       .getInstance()
  //       .addHook("addImageBlobHook", (blob, callback) => {});
  //   }
  // }, []);

  React.useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().removeHook("addImageBlobHook");
      editorRef.current
        .getInstance()
        .addHook("addImageBlobHook", (blob, callback) => {
          (async () => {
            let formData = new FormData();
            formData.append("file", blob);

            axios.defaults.withCredentials = true;
            const { data: url } = await axios.post(
              `${backUrl}image.do`,
              formData,
              {
                header: { "content-type": "multipart/formdata" },
              }
            );
            callback(url, "alt text");
          })();

          return false;
        });
    }

    return () => {};
  }, [editorRef]);

  const onChangeEditorTextHandler = () => {
    console.log(editorRef.current.getInstance().getMarkdown());
  };

  return (
    <Editor
      previewStyle="vertical"
      plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
      onChange={onChangeEditorTextHandler}
      ref={editorRef}
      height="79vh"
    />
  );
}
