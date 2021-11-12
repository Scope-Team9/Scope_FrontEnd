// PostDetail.js
// import를 한다.
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { postDetailActions } from "../redux/modules/postdetail";
import { apis } from "../lib/axios";
import { useHistory } from "react-router";
import { postActions } from "../redux/modules/post";
import { Grid, Text, Button } from "../elements/Index";
import Img from "../images/PostDetail.png";
import UserList from "../components/UserList";
import ApplyStatusModal from "../components/ApplyStatusModal";
import ApplyUserModal from "../components/ApplyUserModal";
import ProjectJoinUser from "../components/ProjectJoinUser";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

// PostDetail의 함수형 컴포넌트를 만든다.
const PostDetail = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [checkPost, setCheckPost] = React.useState();
  const [bookmark, setBookmark] = React.useState(false);
  const [applyStatusModal, setApplyStatusModal] = React.useState(false); //신청현황
  const [applyUserModal, setApplyUserModal] = React.useState(false); //지원취소/팀탈퇴/프로젝트마감

  const [applyValue, setApplyValue] = React.useState();

  const applyStatusModalOpen = () => {
    setApplyStatusModal(true);
  };

  const applyUserModalOpen = value => {
    setApplyValue(value);
    setApplyUserModal(true);
  };

  // 상태변경
  const edit_status = data => {
    const editstatus = {
      projectStatus: data,
    };
    console.log("상태야", projectStatused[0].value);
    console.log("상태입니다.");
    dispatch(postDetailActions.statusPostAPI(post_id, editstatus));
  };

  // 게시글 작성(프로젝트 상태)
  const projectStatused = [
    { value: "모집중", label: "모집중" },
    { value: "진행중", label: "진행중" },
    { value: "종료", label: "종료" },
  ];

  let post_id = props.match.params.id;
  const userId = useSelector(state => state.user.userId); //로그인 유저아이디
  const postUserId = checkPost?.data.data.post.userId;

  //북마크 토글
  const ToggleBookMark = () => {
    setBookmark(!bookmark);
    dispatch(postDetailActions.bookMarkAPI(post_id));
  };

  React.useEffect(() => {
    dispatch(postActions.isMainPage(false));
    dispatch(postActions.whatPage("postDetail"));
    const CheckPost = async () => {
      try {
        const result = await apis.detailPost(post_id);
        setCheckPost(result);
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    };
    CheckPost();
  }, [bookmark]);

  const passedData = checkPost?.data["data"].post;
  const passdedMenber = checkPost?.data["data"].members;

  console.log(passdedMenber);
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
        <SideBarImg src={Img} style={{ maxWidth: "650px", height: "100%" }} />
        <Grid margin="20px 20px auto 20px" position="relative">
          {userId !== postUserId && (
            <Grid width="50px" position="absolute" top="20px" right="50px">
              <Grid _onClick={ToggleBookMark} cursor="pointer">
                {!passedData?.bookmarkChecked ? (
                  <BookmarkBorderIcon sx={{ color: "#b29cf4", fontSize: 60 }} />
                ) : (
                  <BookmarkIcon sx={{ color: "#b29cf4", fontSize: 60 }} />
                )}
              </Grid>
            </Grid>
          )}
          <Title>Scoope</Title>
          {/* 제목 */}
          <Grid>
            <Text color="#C4C4C4" size="20px" bold>
              <span style={{ color: "black" }}>제목</span> : {passedData?.title}
              <hr width="92%" />
            </Text>
          </Grid>
          {/* 소개 */}
          <Grid margin="10px auto">
            <Text color="#C4C4C4" size="20px" bold>
              <span style={{ color: "black" }}>소개 : </span>{" "}
              {passedData?.summary}
              <hr width="92%" />
            </Text>
          </Grid>
          <Grid margin="20px auto">
            <Grid>
              <Text size="18px">프로젝트 게시자</Text>
              <Grid
                width="60px"
                height="60px"
                borderRadius="50%"
                backgroundColor="#C4C4C4"
                margin="10px 0px 0px"
              >
                <UserList list={passedData?.propensityType}></UserList>
              </Grid>
              <Text size="20px">{passedData?.nickname}</Text>
              <Grid>({passedData?.propensityType})</Grid>
            </Grid>
            <Grid margin="20px auto ">
              <Text size="18px">모집인원</Text>
              <Grid display="flex" margin="10px auto">
                {passdedMenber?.map((item, index) => (
                  <ProjectJoinUser key={index} {...item} />
                ))}
              </Grid>
              {userId === postUserId && (
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

              <Grid display="flex" margin="10px auto">
                <Text margin="auto 10px auto 0px">기술스택 :</Text>
                {passedData?.techStack.map((item, index) => {
                  return (
                    <Text margin="auto 5px" key={index}>
                      <span
                        style={{
                          color: "white",
                          textAlign: "center",
                          padding: "4px 10px",
                          border: "1px solid #E6DDF2",
                          background: "#E6DDF2",
                          borderRadius: "10px",
                        }}
                      >
                        {item}
                      </span>
                    </Text>
                  );
                })}
              </Grid>
              <Grid display="flex" margin="20px auto">
                <Text margin="auto 10px auto 0px">프로젝트 기간 :</Text>
                <Text>
                  <span
                    style={{
                      color: "black",
                      textAlign: "center",
                      padding: "4px 10px",
                      border: "1px solid #E6DDF2",
                      borderRadius: "10px",
                    }}
                  >
                    {passedData?.startDate} ~ {passedData?.endDate}
                  </span>
                </Text>
              </Grid>
              <Grid display="flex">
                <Text margin="auto 10px auto 0px">프로젝트 상태 :</Text>
                <Text>{passedData?.projectStatus}</Text>
              </Grid>
              <Grid>
                <Content>{passedData?.contents}</Content>
              </Grid>
              <Grid>
                {userId === postUserId ? (
                  <Grid display="flex" justifyContent="center">
                    {passedData?.projectStatus === "진행중" && (
                      <Button
                        common
                        width="140px"
                        height="35px"
                        isValue="end"
                        _onClick={e => {
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
                    <Button
                      common
                      width="120px"
                      isValue="apply"
                      _onClick={e => {
                        console.log(e);
                        applyUserModalOpen(e.target.value);
                      }}
                      margin="auto 10px"
                      border="1px solid #b29cf4"
                      borderRadius="50px"
                    >
                      지원신청
                    </Button>
                    <ApplyUserModal
                      applyUserModal={applyUserModal}
                      setApplyUserModal={setApplyUserModal}
                      applyValue={applyValue}
                      postId={post_id}
                      passdedMenber={passdedMenber}
                    />
                    <Button
                      common
                      width="120px"
                      isValue="cancel"
                      _onClick={e => {
                        applyUserModalOpen(e.target.value);
                      }}
                      width="120px"
                    >
                      지원취소
                    </Button>
                    <Button
                      common
                      width="120px"
                      isValue="teamExit"
                      _onClick={e => {
                        applyUserModalOpen(e.target.value);
                      }}
                    >
                      팀탈퇴
                    </Button>
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

const SideBarImg = styled.img`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default PostDetail;
