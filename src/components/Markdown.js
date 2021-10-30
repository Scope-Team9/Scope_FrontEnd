// import Prism from "prismjs";
// // 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
// import "prismjs/themes/prism.css";

// import "@toast-ui/editor/dist/toastui-editor.css";
// import { Editor } from "@toast-ui/react-editor";

// import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
// import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";

// import "tui-color-picker/dist/tui-color-picker.css";
// import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
// import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

// import React, { useState, useRef, createRef } from "react";
// import { Button } from "@material-ui/core";
// import { withRouter } from "react-router";

// export default function WriteContentPage(props) {
//   const editorRef = createRef();

//   const onChangeEditorTextHandler = () => {
//     console.log(editorRef.current.getInstance().getMarkdown());
//   };

//   return (
//     <>
//       <Editor
//         previewStyle="vertical"
//         height="79vh"
//         initialEditType="마크다운으로 내용을 입력하세요."
//         ref={editorRef}
//         plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
//         onChange={onChangeEditorTextHandler}
//       />
//       <Button variant="primary" type="submit" className="submitBtn">
//         Post
//       </Button>
//       <Button variant="primary" className="cancelBtn">
//         Cancle
//       </Button>
//     </>
//   );
// }

// export default withRouter(WriteContentPage);

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
export default function Writer(props) {
  // const editorRef = createRef();
  const editorRef = useRef();

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
