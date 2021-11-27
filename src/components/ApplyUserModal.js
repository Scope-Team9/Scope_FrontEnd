/* eslint-disable */
import React from "react";
import { Dialog } from "@material-ui/core";
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
  } = props;
  const isMe = useSelector(state => state.user.userId);
  const [page, setPage] = React.useState(1);

  const modalClose = status => {
    console.log("야호", status);
    if (status === "종료") {
      statusCheck(status);
      return setApplyUserModal(false);
    }
    setApplyUserModal(false);
    return;
  };

  return (
    <>
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
          />
        )}
        {/* {applyValue === "end" && page === 2 && (
          <SubmitUrl modalClose={modalClose} postId={postId} />
        )} */}
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
          />
        )}
      </Dialog>
    </>
  );
};

export default React.memo(ApplyUserModal);
