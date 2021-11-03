// PostList.js

// import를 한다.
/* eslint-disable */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";
import PostTest from "./PostTest";
import { postActions } from "../redux/modules/post";
import styled from "styled-components";

// PostList의 함수형 컴포넌트를 만든다.
const PostList = () => {
  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(postActions.getPostAPI());
  // }, []);

  const product_list = useSelector((state) => state.post);

  const dummyData = [
    {
      postId: 0,
      title: "개발자 구합니다",
      techStack: ["javscript", "react"],
      summary: "안녕하세요. 쏴리질러입니다.",
      totalMember: 3,
      recruitmentMember: "신청자 a",
      projectStatus: "모집중",
      startDate: "2020/02/20",
      endDate: "2021/03/20",
      isBookmarkCheckde: false,
    },
    {
      postId: 1,
      title: "프론트엔드 개발자구합니다",
      techStack: ["javscript", "react"],
      summary: "스코프 프로젝트를 진행하려고하는데 설명 참고 부탁드립니다.",
      totalMember: 3,
      recruitmentMember: "신청자 a",
      projectStatus: "모집중",
      startDate: "2020/02/20",
      endDate: "2021/03/20",
      isBookmarkCheckde: false,
    },
    {
      postId: 2,
      title: "이승민 구합니다",
      techStack: ["spring", "python"],
      summary: "호호입니다",
      totalMember: 3,
      recruitmentMember: "신청자 a",
      projectStatus: "모집중",
      startDate: "2020/02/20",
      endDate: "2021/03/20",
      isBookmarkCheckde: false,
    },
  ];

  return (
    <React.Fragment>
      <PostWrap>
        {dummyData.map((item, index) => {
          return <PostTest key={index} {...item} />;
        })}
      </PostWrap>
    </React.Fragment>
  );
};

// styled-components를 사용한다.
const PostWrap = styled.div`
  max-width: 1300px;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 40px;
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default PostList;
