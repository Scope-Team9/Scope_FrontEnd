// PostDetail.js
// import를 한다.
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { postDetailActions } from "../redux/modules/postdetail";
import { apis } from "../lib/axios";
import { useHistory } from "react-router";
import { postActions } from "../redux/modules/post";
import { Grid, Button } from "../elements/Index";

import ApplyStatusModal from "../components/ApplyStatusModal";
import ApplyUserModal from "../components/ApplyUserModal";
import LeftBanner from "../components/postDetail/LeftBanner";
import TitleDetail from "../components/postDetail/rightContents/TitleDetail";
import SummaryDetail from "../components/postDetail/rightContents/SummaryDetail";
import PosterDetail from "../components/postDetail/rightContents/PosterDetail";
import ApplicantDetail from "../components/postDetail/rightContents/ApplicantDetail";
import StackDetail from "../components/postDetail/rightContents/StackDetail";
import DateDetail from "../components/postDetail/rightContents/DateDetail";
import StatusDetail from "../components/postDetail/rightContents/StatusDetail";
import ContentDetail from "../components/postDetail/rightContents/ContentDetail";
import BookMark from "../components/postDetail/rightContents/BookMark";

// PostDetail의 함수형 컴포넌트를 만든다..
const PostDetail = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [checkPost, setCheckPost] = React.useState();
  const [bookmark, setBookmark] = React.useState(false);
  const [applyStatusModal, setApplyStatusModal] = React.useState(false); //신청현황
  const [applyUserModal, setApplyUserModal] = React.useState(false); //지원취소/팀탈퇴/프로젝트마감
  const [recruitmentFinish, setRecruitmentFinish] = React.useState();

  const [applyValue, setApplyValue] = React.useState();
  const [isme, setIsme] = React.useState(null);

  const myUserId = useSelector((state) => state.user.userId);

  const applyStatusModalOpen = () => {
    setApplyStatusModal(true);
  };

  const applyUserModalOpen = (value) => {
    setApplyValue(value);
    setApplyUserModal(true);
  };

  // 상태변경
  const edit_status = (data) => {
    const editstatus = {
      projectStatus: data,
    };
    const statusDoing = async () => {
      try {
        const result = await apis.statusPost(post_id, editstatus);
        setRecruitmentFinish(!recruitmentFinish);
      } catch (err) {
        console.log(err);
      }
    };
    statusDoing();
    // dispatch(postDetailActions.statusPostAPI(post_id, editstatus));
  };

  // 게시글 작성(프로젝트 상태)
  const projectStatused = [
    { value: "모집중", label: "모집중" },
    { value: "진행중", label: "진행중" },
    { value: "종료", label: "종료" },
  ];

  let post_id = props.match.params.id;
  const userId = useSelector((state) => state.user.userId); //로그인 유저아이디
  const postUserId = checkPost?.data.data.post.userId;

  //북마크 토글
  const ToggleBookMark = () => {
    const bookMark = async () => {
      try {
        const result = await apis.bookMarkChecked(post_id);
        setBookmark(!bookmark);
      } catch (err) {
        console.log(err);
      }
    };
    bookMark();
    // dispatch(postDetailActions.bookMarkAPI(post_id));
  };

  React.useEffect(() => {
    dispatch(postActions.isMainPage(false));
    dispatch(postActions.whatPage("postDetail"));
    const CheckPost = async () => {
      try {
        const result = await apis.detailPost(post_id);
        setCheckPost(result);
        console.log(result);
        setIsme(result.data.data.userStatus);
      } catch (err) {
        console.log(err);
      }
    };
    CheckPost();
  }, [bookmark, applyStatusModal, recruitmentFinish]);

  const passedData = checkPost?.data["data"].post;
  const passedUserStatus = checkPost?.data["data"].userStatus;
  const passdedMenber = checkPost?.data["data"].members;

  const DeletePost = async () => {
    try {
      const deletePost = await apis.deletePost(post_id);
      console.log("삭제", deletePost);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <Grid
        display="flex"
        justifyContent="center"
        maxWidth="1920px"
        height="100%"
        border="1px solid #C4C4C4"
        margin="auto"
      >
        <LeftBanner />
        <Grid margin="20px 20px auto 20px" position="relative">
          <BookMark
            userId={userId}
            postUserId={postUserId}
            ToggleBookMark={ToggleBookMark}
            passedData={passedData}
          />
          <Title>Scoope</Title>
          <TitleDetail passedData={passedData} />

          <SummaryDetail passedData={passedData} />
          <Grid margin="20px auto">
            <PosterDetail passedData={passedData} />
            <Grid margin="20px auto ">
              <ApplicantDetail passdedMenber={passdedMenber} />
              {userId === postUserId && passedData?.projectStatus === "모집중" && (
                <Grid position="relative" width="100%">
                  <Grid
                    position="absolute"
                    right="20px"
                    width="120px"
                    padding="10px"
                  >
                    <Button
                      postion="absolute"
                      common
                      _onClick={applyStatusModalOpen}
                    >
                      신청현황 확인
                    </Button>
                    <ApplyStatusModal
                      applyStatusModal={applyStatusModal}
                      setApplyStatusModal={setApplyStatusModal}
                      postId={post_id}
                    />
                  </Grid>
                </Grid>
              )}

              <StackDetail passedData={passedData} />
              <DateDetail passedData={passedData} />
              <StatusDetail passedData={passedData} />
              <ContentDetail passedData={passedData} />
              <Grid>
                {userId === postUserId ? (
                  <Grid display="flex" justifyContent="center">
                    {passedData?.projectStatus === "진행중" && (
                      <Button
                        common
                        width="140px"
                        height="35px"
                        isValue="end"
                        _onClick={(e) => {
                          applyUserModalOpen(e.target.value);
                        }}
                      >
                        프로젝트 마감하기
                      </Button>
                    )}
                    <ApplyUserModal
                      applyUserModal={applyUserModal}
                      setApplyUserModal={setApplyUserModal}
                      applyValue={applyValue}
                      postId={post_id}
                      passdedMenber={passdedMenber}
                    />
                    {passedData?.projectStatus === "모집중" && (
                      <Button
                        common
                        width="140px"
                        height="35px"
                        _onClick={() => {
                          edit_status("진행중");
                        }}
                      >
                        모집완료
                      </Button>
                    )}
                    {passedData.projectStatus === "종료" && <div></div>}

                    {passedData.projectStatus === "진행중" && (
                      <Button
                        common
                        width="140px"
                        height="35px"
                        _onClick={() => {
                          history.push({ pathname: `/postedit/${post_id}` });
                        }}
                      >
                        포스트수정
                      </Button>
                    )}

                    {passedData.projectStatus === "모집중" && (
                      <Button
                        common
                        width="140px"
                        height="35px"
                        _onClick={() => {
                          history.push({ pathname: `/postedit/${post_id}` });
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
                ) : (
                  <Grid textAlign="center">
                    {passedData?.projectStatus === "모집중" && (
                      <Grid>
                        {isme === "user" && (
                          <>
                            <Button
                              common
                              width="120px"
                              isValue="apply"
                              _onClick={(e) => {
                                console.log(e);
                                applyUserModalOpen(e.target.value);
                              }}
                              margin="auto 10px"
                              border="1px solid #b29cf4"
                              borderRadius="50px"
                            >
                              지원신청
                            </Button>
                          </>
                        )}

                        {isme === "applicant" && (
                          <Button
                            common
                            width="120px"
                            isValue="cancel"
                            _onClick={(e) => {
                              applyUserModalOpen(e.target.value);
                            }}
                            width="120px"
                          >
                            지원취소
                          </Button>
                        )}

                        {isme === "member" && (
                          <Button
                            common
                            width="120px"
                            isValue="teamExit"
                            _onClick={(e) => {
                              applyUserModalOpen(e.target.value);
                            }}
                          >
                            팀탈퇴
                          </Button>
                        )}
                      </Grid>
                    )}

                    <ApplyUserModal
                      applyUserModal={applyUserModal}
                      setApplyUserModal={setApplyUserModal}
                      applyValue={applyValue}
                      postId={post_id}
                      passdedMenber={passdedMenber}
                    />
                    {passedData?.projectStatus === "종료" &&
                      passedUserStatus === "member" && (
                        <Grid>
                          <Button
                            common
                            width="120px"
                            isValue="memberLiked"
                            _onClick={(e) => {
                              console.log(e);
                              applyUserModalOpen(e.target.value);
                            }}
                            margin="auto 10px"
                            border="1px solid #b29cf4"
                            borderRadius="50px"
                          >
                            지원신청
                          </Button>
                        </Grid>
                      )}
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

// styled-components를 사용한다.
const Title = styled.h1`
  margin: "auto 20px";
  color: #c4c4c4;
  font-size: 40px;
`;

const Content = styled.h3`
  width: 96%;
  height: 180px;
  padding: 10px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  overflow: scroll;
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 35px;
  border: 1px solid #b29cf4;
  border-radius: 50px;
  color: #fff;
  background: white;
  color: #b29cf4;
  margin: 10px 4px 10px 4px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #b29cf4;
    border: 1px solid;
    transition-duration: 1s;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default PostDetail;
