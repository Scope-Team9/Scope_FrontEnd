/* eslint-disable */
import React from "react";
import { Grid, Input, Text, Button } from "../../elements/Index";
import { useDispatch } from "react-redux";
import { applyCreators } from "../../redux/modules/applyProject";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

const SubmitUrl = (props) => {
  const dispatch = useDispatch();
  const [front, setFront] = React.useState();
  const [back, setBack] = React.useState();
  const { modalClose, postId } = props;
  let regex =
    /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

  const submitUrl = () => {
    if (regex.test(front) && regex.test(back)) {
      const github = {
        frontUrl: front,
        backUrl: back,
      };
      dispatch(applyCreators.submitUrlAPI(postId, github));
      modalClose("제출");
      return;
    }

    return window.alert("올바른 URL 주소가 필요합니다.");
  };

  return (
    <ModalWrap>
      <Grid height="10%" position="relative">
        <Grid
          position="absolute"
          top="0px"
          right="10px"
          width="20px"
          padding="10px"
        >
          <CloseIcon fontSize="large" onClick={modalClose} />
        </Grid>
      </Grid>
      <Grid
        margin="auto"
        height="90%"
        width="90%"
        alignItems="center"
        textAlign="center"
      >
        <Grid height="10%" textAlign="center">
          <Text bold="bold" size="30px">
            프로젝트 소개
          </Text>
        </Grid>
        <Grid height="10%" margin="10px 0">
          <Text size="14px">
            완료된 프로젝트를 소개해주시겠어요? <br />
          </Text>
        </Grid>
        <Grid display="flex" height="40%" width="90%" margin="auto">
          <Grid
            display="flex"
            flexDirection="column"
            height="80%"
            width="30%"
            margin="auto"
          >
            <Grid
              display="flex"
              alignItems="center"
              justifyContent="center"
              margin="0 0 2px 0"
              bg="#878787"
            >
              <Text color="#fff">프론트엔드</Text>
            </Grid>
            <Grid
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="#878787"
            >
              <Text color="#fff">백엔드</Text>
            </Grid>
          </Grid>
          <Grid
            display="flex"
            flexDirection="column"
            height="80%"
            width="70%"
            margin="auto auto auto 2px"
            alignItems="center"
          >
            <Grid margin="0 0 2px 0">
              <Input
                border="1px solid #878787"
                height="100%"
                padding="0 0 0 10px"
                placeholder="프론트엔드 깃허브 주소를 입력해주세요!"
                _onChange={(e) => {
                  setFront(e.target.value);
                }}
              ></Input>
            </Grid>
            <Grid>
              <Input
                border="1px solid #878787"
                height="100%"
                padding="0 0 0 10px"
                placeholder="백엔드 깃허브 주소를 입력해주세요!"
                _onChange={(e) => {
                  setBack(e.target.value);
                }}
              ></Input>
            </Grid>
          </Grid>
        </Grid>
        <Grid display="flex" height="15%" margin="20px auto" width="70%">
          <Grid>
            <Button borderRadius="25px" _onClick={submitUrl}>
              제출하기
            </Button>
          </Grid>
          <Grid>
            <Button borderRadius="25px" _onClick={modalClose}>
              다음에제출
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </ModalWrap>
  );
};

const ModalWrap = styled.div`
  width: 550px;
  height: 400px;
  position: relative;
`;

export default SubmitUrl;
