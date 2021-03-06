/* eslint-disable */
import React from "react";
import { Grid, Text, Button } from "../../elements/Index";
import { useDispatch } from "react-redux";
import { applyCreators } from "../../redux/modules/applyProject";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

const Cancel = (props) => {
  const dispatch = useDispatch();
  const { modalClose, postId } = props;
  const cancel = () => {
    dispatch(applyCreators.cancelProjectAPI(postId));
    modalClose("취소");
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

      <Contents
        margin="auto"
        height="90%"
        width="320px"
        alignItems="center"
        textAlign="center"
      >
        <Grid height="20%">
          <Text size="30px" bold>
            지원취소
          </Text>
        </Grid>
        <Grid height="25%" margin="10px 0">
          <Text size="14px">지원취소를 원하시면 아래 버튼을 클릭해주세요</Text>
        </Grid>
        <Grid height="10%">
          <Button borderRadius="25px" _onClick={cancel}>
            지원취소
          </Button>
        </Grid>
      </Contents>
    </ModalWrap>
  );
};

const ModalWrap = styled.div`
  width: 550px;
  height: 300px;
  position: relative;
  @media (max-width: 620px) {
    margin: auto;
    margin-top: 20px;
    width: 90%;
  }
`;
const Contents = styled.div`
  margin: auto;
  height: 90%;
  width: 320px;

  text-align: center;
  @media (max-width: 620px) {
    margin: auto;
    margin-top: 30px;
    width: 90%;
  }
`;

export default Cancel;
