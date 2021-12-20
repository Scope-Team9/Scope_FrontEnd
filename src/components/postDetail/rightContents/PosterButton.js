// PosterButton.js
/* eslint-disable */

// import를 한다.
import React from "react";
import styled from "styled-components";
import { Grid, Button } from "../../../elements/Index";
import ApplyUserModal from "../../ApplyUserModal";
import { useHistory } from "react-router";
import { apis } from "../../../lib/axios";

// PosterButton의 함수형 컴포넌트를 만든다..
const PosterButton = (props) => {
  const history = useHistory();
  const DeletePost = async () => {
    try {
      const deletePost = await apis.deletePost(props.post_id);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <Grid display="flex" justifyContent="center">
        <ContentMedia>
          <Grid width="0px" height="0px">
            <ApplyUserModal
              applyUserModal={props.applyUserModal}
              setApplyUserModal={props.setApplyUserModal}
              applyValue={props.applyValue}
              postId={props.post_id}
              passdedMenber={props.passdedMenber}
              statusCheck={props.statusCheck}
            />
          </Grid>
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

          {props.passedData?.projectStatus === "종료" && <div></div>}
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
              마감하기
            </Button>
          )}
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
        </ContentMedia>
      </Grid>
    </React.Fragment>
  );
};

// styled-components
const ContentMedia = styled.div`
  @media screen and (max-width: 360px) {
    width: 300px;
    height: 50px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 800px) {
    display: flex;
    width: 300px;
    font-size: 10px;
    margin-bottom: 10px;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default PosterButton;
