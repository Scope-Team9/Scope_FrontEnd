/* eslint-disable */
import React from "react";
import styled from "styled-components";
import PostStacks from "./PostStacks";
import ApplyUserModal from "./ApplyUserModal";
import { useSelector, useDispatch } from "react-redux";
import { applyCreators } from "../redux/modules/applyProject";
import { apis } from "../lib/axios";
import { history } from "../redux/configureStore";
import { Grid, Image, Text, Button } from "../elements/Index";

// Post의 함수형 컴포넌트를 만든다.
const Post = props => {
  const dispatch = useDispatch();
  const is_mainPage = useSelector(state => state.post.mainpage);
  const myUserId = useSelector(state => state.user.userId);
  const [stacks, setStacks] = React.useState();
  const [applyUserModal, setApplyUserModal] = React.useState(false); //지원취소/팀탈퇴/프로젝트마감
  const [applyValue, setApplyValue] = React.useState();
  const [member, setMember] = React.useState();

  let totalmember = props.totalMember;
  let recruitmentMember = props.recruitmentMember;

  console.log(props.postId, props.mypage, props.projectStatus);

  const modalOpen = (value, postId) => {
    setApplyValue(value);
    setApplyUserModal(true);
  };

  // React.useEffect(() => {
  //   let postId = props.postId;
  //   dispatch(applyCreators.getMemberAPI(postId));
  // }, [props.mypage]);

  React.useEffect(() => {
    let postId = props.postId;
    const getMembers = async () => {
      try {
        const result = await apis.getMember(postId);
        // console.log(result);
        setMember(result.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMembers();
  }, []);

  // console.log(member);
  let as = member?.find(e => e.userId === myUserId);
  // console.log(as);

  return (
    <React.Fragment>
      <ProductImgWrap
        onClick={e => {
          e.preventDefault();
          history.push({
            pathname: `/postdetail/${props.postId}`,
          });
        }}
      >
        {member &&
          props.mypage &&
          props.projectStatus === "종료" &&
          member[0].assessment === true &&
          as.assessment === false && (
            <Grid
              bg="#111"
              width="100%"
              position="absolute"
              zIndex="11"
              borderRadius="34px"
              opacity="0.8"
              display="flex"
            >
              <Button
                isValue="memberLiked"
                backgroundColor="#fff"
                width="50%"
                color="#111"
                hoverBg="#b29cf4"
                hoverCl="#fff"
                _onClick={e => {
                  e.stopPropagation();
                  console.log(e.target.value, props.postId);
                  modalOpen(e.target.value, props.postId);
                }}
              >
                팀원평가하기
              </Button>
              <ApplyUserModal
                applyUserModal={applyUserModal}
                setApplyUserModal={setApplyUserModal}
                applyValue={applyValue}
                passdedMenber={member}
                postId={props.postId}
              />
            </Grid>
          )}
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
                  <Grid width="30%" key={idx}>
                    <PostStacks stack={p}></PostStacks>
                  </Grid>
                );
              })}
            </Grid>
            <CardHeaderTwo
              projectStatus={props.projectStatus}
              id="headerTwo"
              className="headerTwo"
            />
          </CardHeader>

          <Grid
            borderRadius="64px 54px 54px 54px"
            bg="#fff"
            height="100px"
            position="absolute"
          ></Grid>
          <DescriptionBox>
            <ProjectState projectStatus={props.projectStatus}>
              {props.projectStatus}
            </ProjectState>

            <Title>{props.title}</Title>
            {/* <Summary>{props.summary}</Summary> */}
            <Date>
              <Grid width="87%">
                {props.startDate} ~ {props.endDate}
              </Grid>
            </Date>
            <Line />
            {/* 프로그래스바 */}
            <Grid display="flex" width="100%" justifyContent="space-between">
              <Grid width="100%">
                <Grid margin="10px 0">
                  <Grid
                    display="flex"
                    justifyContent="space-between"
                    margin="5px 0"
                  >
                    <Text> 참여율</Text>
                    <Text margin="0 0 0 10px">
                      {recruitmentMember + "/" + totalmember} 명
                    </Text>
                  </Grid>
                  <Grid>
                    <ProgressBar projectStatus={props.projectStatus}>
                      <HighLight
                        projectStatus={props.projectStatus}
                        width={(recruitmentMember / totalmember) * 100 + "%"}
                      />
                    </ProgressBar>
                  </Grid>
                </Grid>
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
  margin: 5px 20px;
  padding: 20px;
`;
const DDescriptionBox = styled.div`
  /* background-color: #fff5f9; */
  border-radius: 54px;
  margin: auto;
  position: relative;
  height: 100%;
`;

//카드 헤더
const CardHeader = styled.div`
  position: relative;
  width: 100%;
  height: 63px;
  border-radius: 94px 84px 84px 54px;
  background-color: #ecc0f1;
  ${props => props.projectStatus === "모집중" && `background-color: #49CBFD;`};
  ${props => props.projectStatus === "진행중" && `background-color: #B29CF4;`};
  ${props => props.projectStatus === "종료" && `background-color: #ECC0F1;`};
`;

const CardHeaderTwo = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 70%;
  height: 160px;
  border-radius: 43px 54px 54px 54px;
  background-color: #ecc0f1;
  ${props => props.projectStatus === "모집중" && `background-color: #49CBFD;`};
  ${props => props.projectStatus === "진행중" && `background-color: #B29CF4;`};
  ${props => props.projectStatus === "종료" && `background-color: #ECC0F1;`};
`;

//헤더 까지

const Title = styled.h1`
  margin-top: 18%;
  margin-bottom: 10px;
  font-size: 20px;
  width: 100%;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #606060; */
  white-space: normal;
  line-height: 1.2;
  height: 2.4em;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Date = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 13% auto 1px auto;
  width: 100%;
  text-overflow: ellipsis;

  @media (max-width: 750px) {
    font-size: 15px;
    margin-left: 0%;
  }
  @media (max-width: 360px) {
    font-size: 15px;
    margin-left: 0%;
  }
`;

const Line = styled.hr`
  width: 100%;
  margin: 6px 0 -1px 0;
  border: 1px solid #eeee;
`;

const ProjectState = styled.div`
  position: absolute;
  top: 29px;
  right: 15px;
  color: #fff;
  border-radius: 15px;
  width: 58px;
  text-align: center;
  height: 24px;
  margin: auto 0;
  ${props => props.projectStatus === "모집중" && `background-color: #49CBFD;`};
  ${props => props.projectStatus === "진행중" && `background-color: #B29CF4;`};
  ${props => props.projectStatus === "종료" && `background-color: #ECC0F1;`};
`;

const ProductImgWrap = styled.div`
  z-index: 1;
  position: relative;
  background-color: white;
  width: 330px;
  height: 330px;
  max-width: 350px;
  margin: 30px auto;

  border-radius: 54px 32px 35px 35px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 2px 5px rgba(0, 0, 0, 0.24);
  @media (max-width: 1700px) {
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  @media (max-width: 1300px) {
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  @media (max-width: 450px) {
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;
//프로그래스바
const ProgressBar = styled.div`
  border: 1px solid #ecc0f1;
  border-radius: 25px;
  background: #f6f4f6;
  width: 100%;
  height: 15px;
  ${props => props.projectStatus === "모집중" && `border: 1px solid #49CBFD`};
  ${props => props.projectStatus === "진행중" && `border: 1px solid #B29CF4;`};
  ${props => props.projectStatus === "종료" && `border: 1px solid #ECC0F1;`};
`;

const HighLight = styled.div`
  border-radius: 25px;
  transition: 1s;
  width: ${props => props.width};
  ${props => props.projectStatus === "모집중" && `background-color: #49CBFD;`};
  ${props => props.projectStatus === "진행중" && `background-color: #B29CF4;`};
  ${props => props.projectStatus === "종료" && `background-color: #ECC0F1;`};
  height: 15px;
`;

//프로그래스바 까지

export default Post;
