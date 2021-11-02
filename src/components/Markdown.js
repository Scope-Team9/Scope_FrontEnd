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
import { apis } from "../lib/axios";
import { result } from "lodash";
export default function Writer(props) {
  // const editorRef = createRef();
  const editorRef = useRef();

  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imgBase64, setImgBase64] = React.useState([]); // 파일 base64
  const [imgData, setImageData] = React.useState();
  const [imgurl, setImgurl] = React.useState();

  React.useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().removeHook("addImageBlobHook");
      editorRef.current
        .getInstance()
        .addHook("addImageBlobHook", (blob, callback) => {
          (async () => {
            try {
              // console.log(blob);
              let reader = new FileReader();
              reader.readAsDataURL(blob); // 1. 파일을 읽어 버퍼에 저장합니다.
              // 파일 상태 업데이트
              reader.onloadend = () => {
                // 2. 읽기가 완료되면 아래코드가 실행됩니다.
                const base64 = reader.result;

                //await이 중괄호 안에 쓰일 수 없기 때문에 async사용
                const upload = async () => {
                  // console.log("2차 관문", base64);
                  // 서버로부터 이미지 주소 받아옴
                  const url = await apis.addMyImage(base64);
                  const resulturl = `http://15.165.159.211${url.data.data.imageUrl}`;
                  setImgurl(resulturl);
                  console.log(resulturl);
                  callback(resulturl, "alt text");
                  return resulturl;
                };
                upload();
                // callback(resulturl, "alt text");
              };
            } catch (err) {
              console.log(err.response);
            }
          })();
          return false;
        });
    }
    return () => {};
  }, [editorRef]);

  // const uploadImage = (blob) => {
  //   let reader = new FileReader();
  //   reader.readAsDataURL(blob); // 1. 파일을 읽어 버퍼에 저장합니다.
  //   // 파일 상태 업데이트
  //   reader.onloadend = () => {
  //     // 2. 읽기가 완료되면 아래코드가 실행됩니다.
  //     const base64 = reader.result;
  //     // console.log(base64);
  //     setImgBase64(base64);
  //     console.log("1차 관문", imgBase64);

  //     const upload = async () => {
  //       // console.log("2차 관문", base64);
  //       // 서버로부터 이미지 주소 받아옴
  //       const url = await apis.addMyImage(base64);

  //       const resulturl = `![](http://localhost:8080${url.data.data.imageUrl})`;
  //       setImgurl(resulturl);
  //       console.log(resulturl);
  //       resulturl.setMarkdown();
  //       return resulturl;
  //     };
  //     upload();
  //   };
  // };

  // const uploadImage = (blob) => {
  //   let reader = new FileReader();
  //   reader.readAsDataURL(blob); // 1. 파일을 읽어 버퍼에 저장합니다.
  //   // 파일 상태 업데이트
  //   reader.onloadend = () => {
  //     // 2. 읽기가 완료되면 아래코드가 실행됩니다.
  //     const base64 = reader.result;
  //     // console.log(base64);
  //     // setImgBase64(base64);
  //     apis
  //       .addMyImage(base64)
  //       .then((res) => {
  //         const result = res.data.data.imageUrl;
  //         // console.log(result);
  //         setImgurl(`![](http://localhost:8080${result})`);
  //         const resulturl = `![](http://localhost:8080${result})`;
  //         console.log(resulturl);
  //         return resulturl;
  //       })
  //       .catch((err) => {
  //         console.log(err.response);
  //       });
  //   };
  // };

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
      hooks={{
        addImageBlobHook: async (blob, callback) => {
          // uploadImage(blob);
          // callback(img_url, "alt_text");
        },
      }}
    ></Editor>
  );
}
