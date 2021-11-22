import React from "react";
import { Grid, Button } from "../../../elements/Index";

import ApplyUserModal from "../../ApplyUserModal";
import { useHistory } from "react-router";
import { apis } from "../../../lib/axios";

const PosterButton = (props) => {
  const history = useHistory();

  const DeletePost = async () => {
    try {
      const deletePost = await apis.deletePost(props.post_id);
      console.log("삭제", deletePost);
    } catch (err) {
      console.log(err);
    }
  };

  console.log("프로젝트 상테", props);

  return (
    <React.Fragment>
      <Grid display="flex" justifyContent="center">
        {props.passedData?.projectStatus === "진행중" && (
          <Button
            common
            width="140px"
            height="35px"
            isValue="end"
            _onClick={(e) => {
              props.applyUserModalOpen(e.target.value);
            }}
          >
            프로젝트 마감하기
          </Button>
        )}
        <ApplyUserModal
          applyUserModal={props.applyUserModal}
          setApplyUserModal={props.setApplyUserModal}
          applyValue={props.applyValue}
          postId={props.post_id}
          passdedMenber={props.passdedMenber}
        />
        {props.passedData?.projectStatus === "모집중" && (
          <Button
            common
            width="140px"
            height="35px"
            _onClick={() => {
              props.edit_status("진행중");
            }}
          >
            모집완료
          </Button>
        )}
        {props.passedData?.projectStatus === "종료" && (
          <Button
            common
            width="140px"
            height="35px"
            isValue="submit"
            _onClick={(e) => {
              props.applyUserModalOpen(e.target.value);
            }}
          >
            깃허브제출
          </Button>
        )}

        {props.passedData?.projectStatus === "종료" && <div></div>}

        {props.passedData?.projectStatus === "진행중" && (
          <Button
            common
            width="140px"
            height="35px"
            _onClick={() => {
              history.push({ pathname: `/postedit/${props.post_id}` });
            }}
          >
            포스트수정
          </Button>
        )}

        {props.passedData?.projectStatus === "모집중" && (
          <Button
            common
            width="140px"
            height="35px"
            _onClick={() => {
              history.push({ pathname: `/postedit/${props.post_id}` });
            }}
          >
            포스트수정
          </Button>
        )}
        <Button
          common
          width="140px"
          height="35px"
          _onClick={() => {
            DeletePost();
            window.alert("삭제되었습니다.");
          }}
        >
          포스트삭제
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default PosterButton;
