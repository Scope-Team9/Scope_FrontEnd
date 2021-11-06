import { Container } from "@material-ui/core";
import ReactMarkdown from "react-markdown";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";
import { useSelector, useDispatch } from "react-redux";
import { apis } from "../lib/axios";

import React from "react";
import styled from "styled-components";

function ContentPage(props) {
  const [mydata, setMydata] = React.useState();
  // console.log(props);
  const userId = props[0];
  // console.log(userId);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apis.getMypage(userId);
        console.log(result);
        setMydata(result.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const data = mydata?.user.introduction;

  return (
    <>
      {data && (
        <>
          <MarkdownWrap>
            <Viewer initialValue={data} />
          </MarkdownWrap>
        </>
      )}
    </>
  );
}
const MarkdownWrap = styled.div`
  width: 50%;
  margin: auto;
`;
export default ContentPage;
