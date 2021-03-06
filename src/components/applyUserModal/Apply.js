import React from "react";
import { Grid, Input, Text, Button } from "../../elements/Index";
import { useDispatch } from "react-redux";
import { applyCreators } from "../../redux/modules/applyProject";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

const Apply = props => {
  const dispatch = useDispatch();
  const [comment, setComment] = React.useState();
  const { modalClose, postId } = props;
  const apply = () => {
    const applyComment = {
      comment: comment,
    };
    dispatch(applyCreators.applyProjectAPI(postId, applyComment));
    modalClose("신청");
  };
  return (
    <React.Fragment>
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
        <Grid margin="auto" height="90%" width="80%" alignItems="center">
          <Grid height="20%" textAlign="center">
            <Text size="30px" bold>
              지원신청
            </Text>
          </Grid>
          <Grid height="22%" margin="10px 0" textAlign="center">
            <Input
              padding="0 0 0 20px"
              borderRadius="25px"
              border="1px solid #eee"
              height="100%"
              backgroundColor="#fff"
              placeholder="간단한 본인의 기술스택 및 자기소개"
              _onChange={e => {
                setComment(e.target.value);
              }}
            ></Input>
          </Grid>
          <Grid height="10%">
            <Button borderRadius="25px" _onClick={apply}>
              지원신청
            </Button>
          </Grid>
        </Grid>
      </ModalWrap>
    </React.Fragment>
  );
};

const ModalWrap = styled.div`
  width: 550px;
  height: 300px;
  position: relative;
  @media (max-width: 400px) {
    width: 300px;
  }
`;

export default Apply;
