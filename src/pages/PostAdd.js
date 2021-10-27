// PostAdd.js

// import를 한다.
import React from "react";
import styled from "styled-components";

import PostList from "../components/PostList";
import PostWrite from "../components/PostWrite";

// PostAdd의 함수형 컴포넌트를 만든다.
const PostAdd = (props) => {
  return (
    <React.Fragment>
      <PostList />
      <PostWrite />
    </React.Fragment>
  );
};

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default PostAdd;
