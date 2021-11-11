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
import Img from "../images/DetailImg.png";
import UserList from "../components/UserList";
import ApplyStatusModal from "../components/ApplyStatusModal";
import ApplyUserModal from "../components/ApplyUserModal";
import { history } from "../redux/configureStore";
import { borderRadius } from "@mui/system";
import ProjectJoinUser from "../components/ProjectJoinUser";

// PostDetail의 함수형 컴포넌트를 만든다.
const PostDetail = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [checkPost, setCheckPost] = React.useState();
  const [bookmark, setBookmark] = React.useState(false);
  const [applyStatusModal, setApplyStatusModal] = React.useState(false); //신청현황
  const [applyUserModal, setApplyUserModal] = React.useState(false); //지원취소
  const [applyValue, setApplyValue] = React.useState();
  const [projectStatus, setProjectstatus] = React.useState(""); // 프로젝트 상태

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
    console.log("상태야", projectStatused[0].value);
    console.log("상태입니다.");
    dispatch(postDetailActions.statusPostAPI(post_id, editstatus));
  };

  // 게시글 작성(프로젝트 상태)
  const projectStatused = [
    { value: "done", label: "모집중" },
    { value: "doing", label: "진행중" },
    { value: "ready", label: "종료" },
  ];

  let post_id = props.match.params.id;
  const userId = useSelector((state) => state.user.userId); //로그인 유저아이디
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
        margin="-100px auto 0 auto"
        border="1px solid #C4C4C4"
        alignItems="center"
      >
        <SideBarImg src={Img} style={{ maxWidth: "100%", height: "100%" }} />
        <Grid margin="100px 20px auto 20px" position="relative">
          {userId !== postUserId && (
            <Grid width="50px" position="absolute" top="20px" right="20px">
              <Button _onClick={ToggleBookMark}>
                {!passedData?.bookmarkChecked ? "관심없음" : "관심있음"}
              </Button>
            </Grid>
          )}
          {/* <Title>Scoope</Title> */}
          <Text color="#C4C4C4" size="20px" bold>
            <span style={{ color: "black" }}>제목</span> : {passedData?.title}
            <hr width="92%" />
          </Text>
          <Grid margin="10px auto">
            <Text color="#C4C4C4" size="20px" bold>
              <span style={{ color: "black" }}>소개 : </span>{" "}
              {passedData?.summary}
              <hr width="92%" />
            </Text>
          </Grid>
          <Grid margin="10px auto">
            <Text>게시자 정보</Text>
            <Grid display="column">
              <Grid width="45px" borderRadius="50%" backgroundColor="#C4C4C4">
                <UserList list={passedData?.propensityType}></UserList>
              </Grid>
              <Text>{passedData?.nickname}</Text>
              <Grid>({passedData?.propensityType})</Grid>
            </Grid>
            <Grid margin="10px auto">
              <Text>프로젝트 인원</Text>
              <Grid display="flex">
                <Grid display="flex">
                  {passdedMenber?.map((item, index) => (
                    <ProjectJoinUser key={index} {...item} />
                  ))}
                </Grid>
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
                      width="100%"
                      height="40px"
                      borderRadius="50px"
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
                <Text margin="auto 10px auto 0px">프로젝트 기간 :</Text>
                <Text>
                  {passedData?.startDate} ~ {passedData?.endDate}
                </Text>
              </Grid>
              <Grid display="flex" margin="10px auto">
                <Text margin="auto 10px auto 0px">기술스택 :</Text>
                {passedData?.techStack.map((item, index) => {
                  return (
                    <Text margin="auto 5px" key={index}>
                      <span
                        style={{
                          color: "black",
                          textAlign: "center",
                          padding: "4px",
                          backgroundColor: "#B29CF4",
                          borderRadius: "20px",
                        }}
                      >
                        {item}
                      </span>
                    </Text>
                  );
                })}
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
                    {checkPost.data.data.post.projectStatus === "진행중" && (
                      <Btn
                        onClick={() => {
                          edit_status("done");
                        }}
                      >
                        프로젝트 마감하기
                      </Btn>
                    )}

                    {checkPost.data.data.post.projectStatus === "모집중" && (
                      <Btn
                        onClick={() => {
                          edit_status("doing");
                        }}
                      >
                        모집완료
                      </Btn>
                    )}
                    <Btn
                      onClick={() => {
                        history.push({ pathname: `/postedit/${post_id}` });
                      }}
                    >
                      포스트수정
                    </Btn>
                    <Btn
                      onClick={() => {
                        DeletePost();
                        window.alert("삭제되었습니다.");
                      }}
                    >
                      포스트삭제
                    </Btn>
                  </Grid>
                ) : (
                  <Grid>
                    <Button
                      isValue="apply"
                      _onClick={(e) => {
                        console.log(e);
                        applyUserModalOpen(e.target.value);
                      }}
                      width="120px"
                      height="40px"
                      margin="auto 10px"
                      borderRadius="50px"
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
                      _onClick={(e) => {
                        applyUserModalOpen(e.target.value);
                      }}
                      width="120px"
                      height="40px"
                      margin="auto 10px"
                      borderRadius="50px"
                    >
                      지원취소
                    </Button>
                    <Button
                      isValue="teamExit"
                      _onClick={(e) => {
                        applyUserModalOpen(e.target.value);
                      }}
                      width="120px"
                      height="40px"
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
  height: 300px;
  padding: 10px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 35px;
  border: none;
  border-radius: 50px;
  color: #fff;
  background: linear-gradient(
    0deg,
    rgba(83, 201, 253, 1) 0%,
    rgba(182, 161, 240, 1) 69%,
    rgba(231, 170, 250, 1) 100%,
    rgba(240, 247, 254, 1) 100%
  );
  cursor: pointer;
  margin: auto 10px;
`;

const SideBarImg = styled.img`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default PostDetail;
