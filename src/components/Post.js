/* eslint-disable */
import React from "react";
import styled from "styled-components";
import PostStacks from "./PostStacks";
import ApplyUserModal from "./ApplyUserModal";
import { useSelector, useDispatch } from "react-redux";
import { apis } from "../lib/axios";
import { history } from "../redux/configureStore";
import { Grid, Text, Button } from "../elements/Index";

// Post의 함수형 컴포넌트를 만든다.
const Post = (props) => {
  // console.log(props);
  // console.log(props);
  const dispatch = useDispatch();
  const myPage = useSelector((state) => state.post.whatPage.now);
  // const myUserId = useSelector((state) => state.user.userId);
  const userId = Number(props.userId.id);
  const myUserId = Number(props.myUserId);
  const [applyUserModal, setApplyUserModal] = React.useState(false); //지원취소/팀탈퇴/프로젝트마감
  const [applyValue, setApplyValue] = React.useState();
  const [member, setMember] = React.useState();
  const [assessment, setAssessment] = React.useState(
    props.memberIdAndAssessment[myUserId]
  );

  let totalmember = props.totalMember;
  let recruitmentMember = props.recruitmentMember;
  let isWriter = props.writerEquals;

  const modalOpen = (value, postId) => {
    setApplyValue(value);
    setApplyUserModal(!applyUserModal);
  };

  const toggleModal = () => {
    setApplyUserModal(!applyUserModal);
  };

  React.useLayoutEffect(() => {
    if (myPage !== "myPage") {
      return;
    }
    let postId = props.postId;
    const getMembers = async () => {
      try {
        const result = await apis.getMember(postId);
        setMember(result.data.data);
      } catch (err) {}
    };
    getMembers();
  }, [assessment, props.assessment]);

  React.useLayoutEffect(() => {}, [assessment]);
  // let as = member?.find((e) => e.userId === myUserId);

  const didAssessment = (e) => {
    e.stopPropagation();
    modalOpen(e.target.value, props.postId);
  };

  return (
    <React.Fragment>
      <ProductImgWrap
        onClick={() => {
          history.push({
            pathname: `/postdetail/${props.postId}`,
          });
        }}
      >
        {props.mypage &&
          userId === myUserId &&
          props.projectStatus === "종료" &&
          !isWriter &&
          !assessment && (
            <Grid
              bg="#111"
              width="100%"
              position="absolute"
              zIndex="11"
              borderRadius="20px"
              opacity="0.8"
              display="flex"
            >
              <Button
                isValue="memberLiked"
                backgroundColor="#fff"
                width="50%"
                color="#111"
                hoverBg="#2699FB"
                hoverCl="#fff"
                _onClick={(e) => {
                  didAssessment(e);
                }}
              >
                팀원평가하기
              </Button>
              <Grid width="0px" height="0px">
                <ApplyUserModal
                  applyUserModal={applyUserModal}
                  setApplyUserModal={setApplyUserModal}
                  applyValue={applyValue}
                  passdedMenber={member}
                  postId={props.postId}
                  myPage={props.mypage}
                  toggleModal={toggleModal}
                  doSetAssessment={props.doSetAssessment}
                  checkMydata={props.checkMydata}
                />
              </Grid>
            </Grid>
          )}
        {/* 전체크기 */}
        <DDescriptionBox>
          <CardHeader
            projectStatus={props.projectStatus}
            id="headerOne"
            className="headerOne"
          >
            <Grid>{/* <TitleDate>D-2</TitleDate> */}</Grid>
            <Grid
              position="relative"
              zIndex="10"
              display="flex"
              width="80%"
              margin="auto"
            >
              {props.techStack.map((p, idx) => {
                return (
                  <Grid margin="4% 0 0 -1% " width="20%" key={idx}>
                    <PostStacks stack={p}></PostStacks>
                  </Grid>
                );
              })}
            </Grid>
          </CardHeader>

          <DescriptionBox>
            <ProjectState projectStatus={props.projectStatus}>
              <Text>{props.projectStatus}</Text>
            </ProjectState>

            <Title>{props.title}</Title>
            <Date>
              {props.startDate} ~ {props.endDate}
            </Date>

            {/* 프로그래스바 */}
            <Grid
              display="flex"
              width="100%"
              justifyContent="space-between"
              height="20%"
            >
              <ProgressBar projectStatus={props.projectStatus}>
                <HighLight
                  projectStatus={props.projectStatus}
                  width={(recruitmentMember / totalmember) * 100 + "%"}
                />
              </ProgressBar>
              <Grid width="43%" textAlign="right">
                <Text size="12px" margin="0 0 0 10px" bold="500">
                  {recruitmentMember + "/" + totalmember} 명 참여중
                </Text>
              </Grid>
            </Grid>
            {/* 프로그래스바까지 */}
          </DescriptionBox>
        </DDescriptionBox>
      </ProductImgWrap>
    </React.Fragment>
  );
};

const DescriptionBox = styled.div`
  position: relative;
  margin: 25px 20px;
  padding: 10px;
  height: 60%;
`;
const DDescriptionBox = styled.div`
  /* background-color: #fff5f9; */
  border-radius: 21px;
  margin: auto;
  position: relative;
  height: 100%;
  width: 100%;
`;

//카드 헤더
const CardHeader = styled.div`
  position: relative;
  width: 100%;
  height: 55px;
  border-radius: 21px 21px 0px 0px;
  background-color: #ecc0f1;
  ${(props) =>
    props.projectStatus === "모집중" && `background-color: #17334A;`};
  ${(props) =>
    props.projectStatus === "진행중" && `background-color: #17334A;`};
  ${(props) => props.projectStatus === "종료" && `background-color: #878787;`};
`;
//
const Title = styled.span`
  margin-top: 8%;
  margin-bottom: 14%;
  font-size: 20px;
  width: 100%;
  font-weight: 500;
  white-space: normal;
  line-height: 1.2;
  height: 2.4em;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  /* -webkit-line-clamp: 3; */
  -webkit-box-orient: vertical;
  @media (max-width: 375px) {
    font-size: 18px;

    line-height: 1.1;
  }
`;

const Date = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 8% auto 15% auto;
  width: 100%;
  font-size: 14px;
  text-overflow: ellipsis;
  @media (max-width: 750px) {
    font-size: 14px;
    margin-left: 0%;
  }
  @media (max-width: 450px) {
    font-size: 10px;
    margin: 0% auto 1% auto;
  }
`;

const ProjectState = styled.div`
  color: #fff;
  border-radius: 15px;
  width: 58px;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 24px;
  margin: 4% 0;
  padding: 1% 0 0 0;
  font-size: 13px;
  ${(props) =>
    props.projectStatus === "모집중" && `background-color: #2699FB;`};
  ${(props) =>
    props.projectStatus === "진행중" && `background-color: #15B915;`};
  ${(props) => props.projectStatus === "종료" && `background-color: #878787;`};
  @media (max-width: 450px) {
    margin: 0 0 10% 0;
  }
`;

const ProductImgWrap = styled.div`
  cursor: pointer;
  z-index: 1;
  position: relative;
  background-color: white;
  width: 330px;
  height: 330px;
  max-width: 350px;
  margin: 30px auto;
  border-radius: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 2px 5px rgba(0, 0, 0, 0.24);
  transition: all 0.2s linear;
  :hover {
    transform: scale(1.03);
  }

  @media (max-width: 450px) {
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    width: 270px;
    height: 270px;
  }
`;
//프로그래스바
const ProgressBar = styled.div`
  border: 1px solid #111;
  background: #f6f4f6;
  width: 55%;
  height: 15px;
  border: none;
  ${(props) =>
    props.projectStatus === "모집중" && `background-color: #BCE0FD;`};
  ${(props) =>
    props.projectStatus === "진행중" && `background-color: #DFDFDF;`};
  ${(props) => props.projectStatus === "종료" && `background-color: #DFDFDF;`};
`;

const HighLight = styled.div`
  transition: 1s;
  width: ${(props) => props.width};
  ${(props) =>
    props.projectStatus === "모집중" && `background-color: #2699FB;`};
  ${(props) =>
    props.projectStatus === "진행중" && `background-color: #878787 ;`};
  ${(props) => props.projectStatus === "종료" && `background-color: #878787;`};
  height: 15px;
`;

//프로그래스바 까지
export default Post;
