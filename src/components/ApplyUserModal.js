import React from "react";
import { Grid, Input, Text, Button } from "../elements/Index";
import { Dialog } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { applyCreators } from "../redux/modules/applyProject";
import CloseIcon from "@mui/icons-material/Close";

const ApplyUserModal = props => {
  const dispatch = useDispatch();
  const { applyUserModal, setApplyUserModal, postId } = props;
  const [comment, setComment] = React.useState();
  // let postId = props.match.params.id;

  const modalClose = () => {
    setApplyUserModal(false);
  };

  const apply = () => {
    const applyComment = {
      comment: comment,
    };
    console.log("여기?");
    dispatch(applyCreators.applyProjectMW(applyComment));
  };

  return (
    <>
      <Dialog maxWidth={"sm"} scroll="paper" open={applyUserModal}>
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
          <Grid display="flex" height="85%" justifyContent="center">
            <Grid>
              <Input
                multiLine
                backgroundColor="#fff"
                row="2"
                placeholder="신청자분을 간단히 소개해주세요!"
                _onChange={e => {
                  setComment(e.target.value);
                }}
              ></Input>
              <Button _onClick={apply()}>지원신청</Button>
            </Grid>
          </Grid>
        </ModalWrap>
      </Dialog>
    </>
  );
};

const ModalWrap = styled.div`
  width: 550px;
  height: 500px;
`;

export default ApplyUserModal;
