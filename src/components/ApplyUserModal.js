/* eslint-disable */
import React from "react";
import { Grid, Input, Text, Button } from "../elements/Index";
import { Dialog } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { applyCreators } from "../redux/modules/applyProject";
import CloseIcon from "@mui/icons-material/Close";

const ApplyUserModal = (props) => {
  const dispatch = useDispatch();
  const { applyUserModal, setApplyUserModal, applyValue, postId } = props;
  const [comment, setComment] = React.useState();

  const modalClose = () => {
    setApplyUserModal(false);
  };

  const apply = () => {
    console.log(postId);
    const applyComment = {
      comment: comment,
    };
    console.log(applyComment);
    dispatch(applyCreators.applyProjectAPI(postId, applyComment));
  };

  const cancel = () => {
    dispatch(applyCreators.cancelProjectAPI(postId));
  };

  return (
    <>
      <Dialog maxWidth={"sm"} scroll="paper" open={applyUserModal}>
        {applyValue === "apply" ? (
          <ModalWrap>
            <Grid height="10%" bg="#eee" position="relative">
              <Grid
                position="absolute"
                top="0px"
                right="10px"
                width="20px"
                padding="10px"
              >
                <CloseIcon fontSize="large" onClick={modalClose} />
              </Grid>
              <Grid alignItems="center">
                <Text margin="0 0 0 20px" bold>
                  지원신청
                </Text>
              </Grid>
            </Grid>
            <Grid display="flex" height="200px" justifyContent="center">
              <Grid>
                <Input
                  backgroundColor="#fff"
                  placeholder="신청자분을 간단히 소개해주세요!"
                  _onChange={(e) => {
                    console.log(e.target.value);
                    setComment(e.target.value);
                  }}
                ></Input>
                <Button _onClick={apply}>지원신청</Button>
              </Grid>
            </Grid>
          </ModalWrap>
        ) : (
          <ModalWrap>
            <Grid height="10%" bg="#eee" position="relative">
              <Grid
                position="absolute"
                top="0px"
                right="10px"
                width="20px"
                padding="10px"
              >
                <CloseIcon fontSize="large" onClick={modalClose} />
              </Grid>
              <Grid alignItems="center">
                <Text margin="0 0 0 20px" bold>
                  지원취소
                </Text>
              </Grid>
            </Grid>
            <Grid display="flex" height="85%" justifyContent="center">
              <Grid>
                <Button _onClick={cancel}>지원취소</Button>
              </Grid>
            </Grid>
          </ModalWrap>
        )}
      </Dialog>
    </>
  );
};

const ModalWrap = styled.div`
  width: 550px;
  height: 300px;
`;

export default ApplyUserModal;
