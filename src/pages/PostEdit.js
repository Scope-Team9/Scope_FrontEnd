/* eslint-disable */
import React, { useCallback } from "react";
import styled from "styled-components";
import { Grid, Text, Image, Button, Input } from "../elements/Index";
import { useDispatch } from "react-redux";
import { apis } from "../lib/axios";

const PostEdit = (props) => {
  const dispatch = useDispatch();
  const [checkPost, setCheckPost] = React.useState();

  let post_id = props.match.params.id;

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

  const onChange = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  React.useEffect(() => {
    setTitle(passedData?.title);
  });
  console.log("냥냥", title);
  return (
    <React.Fragment>
      <input type="text" value={title} onChange={onChange}></input>
      <Input
        type="text"
        value={title}
        _onChange={(e) => {
          setTitle(e.target.value);
          console.log("냥냥", e.target.value);
        }}
      />
      <button
        onClick={() => {
          setTitle();
        }}
      >
        확인
      </button>
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

const Title = styled.h1``;

const Content = styled.h3`
  width: 500px;
  height: 300px;
  padding: 10px;
  border: 1px solid orange;
  border-radius: 5px;
`;

export default PostEdit;
