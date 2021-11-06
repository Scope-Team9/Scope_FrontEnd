// PostDetail.js
// import를 한다.
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { postDetailActions } from "../redux/modules/postdetail";
import { apis } from "../lib/axios";
import { useHistory } from "react-router";
import { postActions } from "../redux/modules/post";
import { Grid, Text, Image, Input, Button } from "../elements/Index";
import ApplyStatusModal from "../components/ApplyStatusModal";
import ApplyUserModal from "../components/ApplyUserModal";
import { history } from "../redux/configureStore";

// PostDetail의 함수형 컴포넌트를 만든다.
const PostDetail = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [checkPost, setCheckPost] = React.useState();
  const [bookmark, setBookmark] = React.useState(false);
  const [applyStatusModal, setApplyStatusModal] = React.useState(false); //신청현황
  const [applyUserModal, setApplyUserModal] = React.useState(false); //지원취소
  const [applyValue, setApplyValue] = React.useState();

  const applyStatusModalOpen = () => {
    setApplyStatusModal(true);
  };

  const applyUserModalOpen = value => {
    setApplyValue(value);
    setApplyUserModal(true);
  };
  let post_id = props.match.params.id;
  console.log("프로젝트제발", post_id);

  const userId = useSelector(state => state.user.userId); //로그인 유저아이디
  const postUserId = checkPost?.data.data.post.userId;
  console.log(userId, postUserId);

  //북마크 토글
  const ToggleBookMark = () => {
    dispatch(postDetailActions.bookMarkAPI(post_id));
  };

  React.useEffect(() => {
    dispatch(postActions.isMainPage(false));
    dispatch(postActions.whatPage("postDetail"));
    const CheckPost = async () => {
      try {
        const result = await apis.detailPost(post_id);
        setCheckPost(result);
        console.log(result.data.data.bookmarkChecked);
      } catch (err) {
        console.log(err);
      }
    };
    CheckPost();
  }, []);
  const passedData = checkPost?.data["data"].post;
  const passdedMenber = checkPost?.data["data"].members[0];
  console.log(passedData);
  return (
    <React.Fragment>
      <Grid
        width="550px"
        padding="16px"
        margin="40px auto"
        border="2px solid #8B3FF8"
        borderRadius="30px"
        position="relative"
      >
        {userId !== postUserId && (
          <Grid width="50px" position="absolute" top="20px" right="20px">
            <Button _onClick={ToggleBookMark}>
              {!passedData?.bookmarkChecked ? "관심없음" : "관심있음"}
            </Button>
          </Grid>
        )}
        <Title>{passedData?.title}</Title>
        <Grid margin="10px auto">
          <Text>{passedData?.summary}</Text>
        </Grid>

        <Grid>
          <Text>게시자 정보</Text>
          <Grid display="column">
            <Image />
            <Text>{passdedMenber?.nickname}</Text>
          </Grid>
          <Grid margin="10px auto">
            <Text>프로젝트 인원</Text>
            <Grid display="flex">
              <Grid display="column">
                <Image />
                <Grid display="column">
                  <Text>{passedData?.recruitmentMember}</Text>
                  <Text>({passdedMenber?.userPropensityType})</Text>
                </Grid>
              </Grid>
            </Grid>
            {userId === postUserId && (
              <Grid position="relative" width="100%">
                <Grid
                  position="absolute"
                  right="20px"
                  width="100px"
                  padding="10px"
                >
                  <Button
                    postion="absolute"
                    width="100%"
                    borderRadius="10px"
                    _onClick={applyStatusModalOpen}
                  >
                    신청현황 확인
                  </Button>
                  <ApplyStatusModal
                    applyStatusModal={applyStatusModal}
                    setApplyStatusModal={setApplyStatusModal}
                    postId={post_id}
                    userId={userId}
                  />
                </Grid>
              </Grid>
            )}

            <Grid display="flex" margin="10px auto">
              <Text margin="auto 10px auto 0px">프로젝트 기간 :</Text>
              <Text>
                {passedData?.startDate} ~ {passedData?.endDate}
              </Text>
            </Grid>
            <Grid display="flex" margin="10px auto">
              <Text margin="auto 10px auto 0px">기술스택</Text>
              {passedData?.techStack.map((item, index) => {
                return (
                  <Text margin="auto 5px" key={index}>
                    {item}
                  </Text>
                );
              })}
            </Grid>
            <Grid display="flex">
              <Text margin="auto 10px auto 0px">프로젝트 상태</Text>
              <Text>{passedData?.projectStatus}</Text>
            </Grid>
            <Grid>
              <Content>{passedData?.contents}</Content>
            </Grid>
            <Grid padding="16px">
              {userId === postUserId ? (
                <Grid>
                  <Button width="100px" height="30px" margin="auto 10px">
                    모집완료
                  </Button>
                  <Button
                    width="100px"
                    height="30px"
                    margin="auto 10px"
                    _onClick={() => {
                      history.push({ pathname: `/postedit/${post_id}` });
                    }}
                  >
                    포스트수정
                  </Button>
                  <Button width="100px" height="30px" margin="auto 10px">
                    포스트삭제
                  </Button>
                </Grid>
              ) : (
                <Grid>
                  <Button
                    isValue="apply"
                    _onClick={e => {
                      console.log(e);
                      applyUserModalOpen(e.target.value);
                    }}
                    width="100px"
                    height="30px"
                    margin="auto 10px"
                  >
                    지원신청
                  </Button>
                  <ApplyUserModal
                    applyUserModal={applyUserModal}
                    setApplyUserModal={setApplyUserModal}
                    applyValue={applyValue}
                    postId={post_id}
                  />
                  <Button
                    isValue="cancel"
                    _onClick={e => {
                      applyUserModalOpen(e.target.value);
                    }}
                    width="100px"
                    height="30px"
                    margin="auto 10px"
                  >
                    지원취소
                  </Button>
                  <Button
                    isValue="teamExit"
                    _onClick={e => {
                      applyUserModalOpen(e.target.value);
                    }}
                    width="100px"
                    height="30px"
                    margin="auto 10px"
                  >
                    팀탈퇴
                  </Button>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

// styled-components를 사용한다.
const Title = styled.h1``;

const Content = styled.h3`
  width: 500px;
  height: 300px;
  padding: 10px;
  border: 1px solid orange;
  border-radius: 5px;
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default PostDetail;
