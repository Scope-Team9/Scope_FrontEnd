/* eslint-disable */
import React from "react";
import { Dialog } from "@material-ui/core";
import { Grid, Input, Text, Button } from "../elements/Index";
import { useDispatch, useSelector } from "react-redux";
import {
  Apply,
  Cancel,
  TeamExit,
  SubmitUrl,
  Liked,
} from "./applyUserModal/ApplyIndex";
const ApplyUserModal = props => {
  const {
    applyUserModal,
    setApplyUserModal,
    applyValue,
    postId,
    passdedMenber,
    passedUserStatus,
    projectStatus,
    statusCheck,
    myPage,
    toggleModal,
    applyUserModalOpen,
  } = props;
  const isMe = useSelector(state => state.user.userId);
  const [page, setPage] = React.useState(1);

  const modalClose = status => {
    if (
      status === "종료" ||
      status === "신청" ||
      status === "취소" ||
      status === "탈퇴" ||
      status === "제출"
    ) {
      statusCheck(status);

      return setApplyUserModal(false);
    }

    setApplyUserModal(false);

    return;
  };

  return (
    <Grid _onClick={e => e.stopPropagation()}>
      <Dialog
        maxWidth={"sm"}
        scroll="paper"
        open={applyUserModal}
        onClose={e => {
          e.stopPropagation();
          modalClose();
        }}
      >
        {applyValue === "apply" && (
          <Apply modalClose={modalClose} postId={postId} />
        )}{" "}
        {applyValue === "cancel" && (
          <Cancel modalClose={modalClose} postId={postId} />
        )}
        {applyValue === "teamExit" && (
          <TeamExit modalClose={modalClose} postId={postId} />
        )}
        {applyValue === "end" && page === 1 && (
          <Liked
            modalClose={modalClose}
            postId={postId}
            passdedMenber={passdedMenber}
            projectStatus={projectStatus}
            isMe={isMe}
            page={page}
            setPage={setPage}
            statusCheck={statusCheck}
            doSetAssessment={props.doSetAssessment}
            checkMydata={props.checkMydata}
          />
        )}
        {applyValue === "submit" && passdedMenber[0].userId === isMe && (
          <SubmitUrl modalClose={modalClose} postId={postId} />
        )}
        {applyValue === "starterLiked" && (
          <Liked
            modalClose={modalClose}
            postId={postId}
            passdedMenber={passdedMenber}
            isMe={isMe}
            page={page}
            setPage={setPage}
            myPage={myPage}
            doSetAssessment={props.doSetAssessment}
          />
        )}
        {applyValue === "memberLiked" && (
          <Liked
            modalClose={modalClose}
            postId={postId}
            passdedMenber={passdedMenber}
            isMe={isMe}
            page={page}
            setPage={setPage}
            myPage={myPage}
            toggleModal={toggleModal}
            doSetAssessment={props.doSetAssessment}
          />
        )}
      </Dialog>
    </Grid>
  );
};

export default React.memo(ApplyUserModal);
