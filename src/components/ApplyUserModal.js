/* eslint-disable */
import React from "react";
import { Grid, Input, Text, Button } from "../elements/Index";
import { Dialog } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { applyCreators } from "../redux/modules/applyProject";
import CloseIcon from "@mui/icons-material/Close";

const ApplyUserModal = props => {
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

  const exitTeam = () => {
    const _postId = {
      postId: postId,
    };
    console.log(_postId);
    dispatch(applyCreators.exitTeamAPI(_postId));
  };
  return (
    <>
      <Dialog maxWidth={"sm"} scroll="paper" open={applyUserModal}>
        {applyValue === "apply" && (
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
              // justifyContent="center"
              width="320px"
              alignItems="center"
            >
              <Grid height="20%" textAlign="center">
                <Text size="30px" bold>
                  지원신청
                </Text>
              </Grid>
              <Grid height="25%" margin="10px 0" textAlign="center">
                <Input
                  border="1px solid #eee"
                  height="100%"
                  backgroundColor="#fff"
                  placeholder="신청자분을 간단히 소개해주세요!"
                  _onChange={e => {
                    console.log(e.target.value);
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
        )}{" "}
        {applyValue === "cancel" && (
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
              // justifyContent="center"
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
                <Text size="14px">
                  지원취소를 원하시면 아래 버튼을 클릭해주세요
                </Text>
              </Grid>
              <Grid height="10%">
                <Button borderRadius="25px" _onClick={cancel}>
                  지원취소
                </Button>
              </Grid>
            </Grid>
          </ModalWrap>
        )}
        {applyValue === "teamExit" && (
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
              // justifyContent="center"
              width="320px"
              alignItems="center"
              textAlign="center"
            >
              <Grid height="20%" textAlign="center">
                <Text size="30px" bold>
                  팀탈퇴
                </Text>
              </Grid>
              <Grid height="25%" margin="10px 0">
                <Text size="14px">
                  정말로 탈퇴하시겠습니까? <br /> 한번 탈퇴하면 다시 신청이
                  불가능할 수 있습니다.
                </Text>
              </Grid>
              <Grid height="10%">
                <Button borderRadius="25px" _onClick={exitTeam}>
                  팀탈퇴
                </Button>
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
  height: 250px;
  position: relative;
`;

export default ApplyUserModal;
