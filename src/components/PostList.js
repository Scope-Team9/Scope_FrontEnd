/* eslint-disable */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";
import PostTest from "./PostTest";
import { postActions } from "../redux/modules/post";
import styled from "styled-components";

const PostList = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(postActions.getPostAPI());
  }, []);

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
      projectStatus: "마감",
      startDate: "2020/02/20",
      endDate: "2021/03/20",
      isBookmarkCheckde: false,
    },
    {
      postId: 2,
      title: "이승민 구합니다",
      techStack: ["javscript", "react"],
      summary: "호호입니다",
      totalMember: 3,
      recruitmentMember: "신청자 a",
      projectStatus: "진행중",
      startDate: "2020/02/20",
      endDate: "2021/03/20",
      isBookmarkCheckde: false,
    },
  ];

  return (
    <React.Fragment>
      {/* <div>
        {product_list.map((p, idx) => (
          <Post key={idx} {...p} />
        ))}
      </div> */}
      <PostWrap>
        {dummyData.map((item, index) => {
          return <Post key={index} {...item} />;
        })}
      </PostWrap>
    </React.Fragment>
  );
};

const PostWrap = styled.div`
  max-width: 1300px;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 40px;
`;

export default PostList;
