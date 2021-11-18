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
  } = props;
  const isMe = useSelector(state => state.user.userId);
  const [page, setPage] = React.useState(1);

  const modalClose = () => {
    setApplyUserModal(false);
  };

  return (
    <>
      <Dialog
        maxWidth={"sm"}
        scroll="paper"
        open={applyUserModal}
        onClose={e => {
          // e.stopPropagation();
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
            isMe={isMe}
            page={page}
            setPage={setPage}
          />
        )}
        {applyValue === "end" && page === 2 && (
          <SubmitUrl modalClose={modalClose} postId={postId} />
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
          />
        )}
      </Dialog>
    </>
  );
};

export default React.memo(ApplyUserModal);
