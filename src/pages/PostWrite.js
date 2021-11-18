// PostWrite.js
/* eslint-disable */
import React from "react";
import AddPost from "../components/AddPost";
import { postActions } from "../redux/modules/post";
import { useDispatch } from "react-redux";

const PostWrite = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(postActions.isMainPage(false));
  }, []);

  return (
    <React.Fragment>
      <AddPost />
    </React.Fragment>
  );
};

export default PostWrite;
