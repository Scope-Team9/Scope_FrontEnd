// PostDetail.js

// import를 한다.
import React from "react";

import DetailList from "../components/DetailList";
import DetailWrite from "../components/DetailWrite";

// PostWrite의 함수형 컴포넌트를 만든다.
const PostDetail = (props) => {
  return (
    <React.Fragment>
      <DetailList />
      <DetailWrite />
    </React.Fragment>
  );
};

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default PostDetail;
