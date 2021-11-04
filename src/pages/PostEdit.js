// PostDetail.js

// import를 한다.
import React from "react";
import styled from "styled-components";
import { Grid, Text, Image, Button, Input } from "../elements/Index";

import { useDispatch } from "react-redux";

import { postActions as postActions } from "../redux/modules/postdetail";
import { apis } from "../lib/axios";

// PostDetail의 함수형 컴포넌트를 만든다.
const PostDetail = (props) => {
  const dispatch = useDispatch();
  const [checkPost, setCheckPost] = React.useState();

  //게시글 수정
  // const editPost = () => {
  //   if (postId) {
  //     const edited_post = {
  //       title: title,
  //       summary: summary,
  //       techStackList: techStackList,
  //       startDate: startDate,
  //       endDate: endDate,
  //       totalMember: totalMember,
  //       projectStatus: projectStatus,
  //       contents: contents,
  //     };
  //     dispatch(postActions.editPostAPI(edited_post));
  //   }
  // };

  //   const postId = props.location.state.postId;
  //   let post_id = props.match.params.id;

  React.useEffect(() => {
    const CheckPost = async () => {
      try {
        const result = await apis.detailPost(2013);
        setCheckPost(result);
      } catch (err) {
        console.log(err);
      }
    };
    CheckPost();
  }, []);

  const passedData = checkPost?.data["data"].post;
  const passdedMenber = checkPost?.data["data"].members[0];

  const [title, setTitle] = React.useState("");

  React.useEffect(() => {
    setTitle(passedData?.title);
  });

  return (
    <React.Fragment>
      <input
        defultValue={title}
        onChange={(e) => {
          setTitle(e.target.value);
          console.log("a", e.target.value);
        }}
      ></input>
      <Grid
        width="550px"
        padding="16px"
        margin="40px auto"
        border="2px solid #8B3FF8"
        borderRadius="30px"
      >
        <Title>{passedData?.title}</Title>
        <Grid margin="10px auto">
          <Text>{passedData?.summary}</Text>
        </Grid>
        <Grid>
          <Text>게시자 정보</Text>
          <Grid display="column">
            <Image />
            <Text>{passdedMenber?.userId}</Text>
          </Grid>
          <Grid margin="10px auto">
            <Text>프로젝트 인원</Text>
            <Grid display="flex">
              <Grid display="column">
                <Image />
                <Grid display="column">
                  <Text>{passedData?.recruitmentMember}</Text>
                  <Text>({passdedMenber?.userPropensityType})</Text>
                </Grid>
              </Grid>
            </Grid>
            <Grid display="flex" margin="10px auto">
              <Text margin="auto 10px auto 0px">프로젝트 기간 :</Text>
              <Text>
                {passedData?.startDate} ~ {passedData?.endDate}
              </Text>
            </Grid>
            <Grid display="flex" margin="10px auto">
              <Text margin="auto 10px auto 0px">기술스택</Text>
              {passedData?.techStack.map((item, index) => {
                return (
                  <Text margin="auto 5px" key={index}>
                    {item}
                  </Text>
                );
              })}
            </Grid>
            <Grid display="flex">
              <Text margin="auto 10px auto 0px">프로젝트 상태</Text>
              <Text>{passedData?.projectStatus}</Text>
            </Grid>
            <Grid>
              <Content>{passedData?.contents}</Content>
            </Grid>
            <Grid padding="16px">
              <Button width="100px" height="30px" margin="auto 10px">
                모집완료
              </Button>
              <Button width="100px" height="30px" margin="auto 10px">
                포스트수정
              </Button>
              <Button width="100px" height="30px" margin="auto 10px">
                포스트삭제
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

// styled-components를 사용한다.
const Title = styled.h1``;

const Content = styled.h3`
  width: 500px;
  height: 300px;
  padding: 10px;
  border: 1px solid orange;
  border-radius: 5px;
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default PostDetail;
