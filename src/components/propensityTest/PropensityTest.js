/* eslint-disable */
import React from "react";
import { userCreators } from "../../redux/modules/user";
import { history } from "../../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { Grid, Button, Image, Text } from "../../elements/Index";
import TestResult from "./TestResult";
import Test from "./Test";
import TestData from "./Testdata.json";
import Progress from "./Progress";
import SocialButtonGroup from "./SocialButtonGroup";

import CloseIcon from "@mui/icons-material/Close";

const PropensityTest = props => {
  const isToken = document.cookie.split("=")[1];
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.user);
  const userType = useSelector(state => state.user.userPropensityType);

  //스텝별 페이지네이션
  const [page, setpage] = React.useState(1);
  // 최종 답변 결과값
  const [userAnswer, setUserAnswer] = React.useState([]);
  const [memberAnswer, setMemberAnswer] = React.useState([]);
  // 임시 답변 결과값
  const [preUserAnswer, setPreUserAnswer] = React.useState("");
  const [preMemberAnswer, setPreMemberAnswer] = React.useState("");

  //자식요소의 밸류값을 가져와 임시 state에 저장
  const handleUserCreate = answer => {
    setPreUserAnswer(answer);
  };
  const handleMemberCreate = answer => {
    setPreMemberAnswer(answer);
  };

  //다음버튼 누를시에 변화된 값을 최종답변 스테이트에 담아줌
  const nextStep = () => {
    let preMe = userAnswer;
    let preYou = memberAnswer;
    if (preUserAnswer === "" || preMemberAnswer === "") {
      return window.alert("문항을 선택해주세요!");
    } else {
      setpage(page => page + 1);
      setPreUserAnswer("");
      setPreMemberAnswer("");
      preMe.push(preUserAnswer);
      setUserAnswer(preMe);
      preYou.push(preMemberAnswer);
      setMemberAnswer(preYou);
    }
  };

  //이전버튼 누를시에 마지막으로 저장된값을 스테이트에 삭제함
  const preStep = () => {
    setpage(page => page - 1);
    // 이전으로가면 마지막항목 제거 (나의것)
    let toPopMe = userAnswer;
    toPopMe.pop();
    setUserAnswer(toPopMe);
    //이전으로 가면 마지막 항목 제거 (상대방의 것)
    let toPopYou = memberAnswer;
    toPopYou.pop();
    setMemberAnswer(toPopYou);
  };

  //회원가입
  const register = () => {
    setPreUserAnswer("");
    setPreMemberAnswer("");
    //나에대한 항목
    let preMe = userAnswer;
    preMe.push(preUserAnswer);
    setUserAnswer(preMe);

    //상대에 다한 항목
    let preYou = memberAnswer;
    preYou.push(preMemberAnswer);
    setMemberAnswer(preYou);

    let realSnsId = String(userInfo.snsId);
    let realUserId = userInfo.userId;

    //비유저일경우 회원가입, 유저일경우 타입수정
    if (isToken) {
      const testUpdateInfo = {
        userPropensityType: userAnswer,
        memberPropensityType: memberAnswer,
      };
      dispatch(userCreators.editTestMiddleware(realUserId, testUpdateInfo));
      return setpage(page => page + 1);
    } else {
      const registerInfo = {
        snsId: realSnsId,
        email: userInfo.email,
        nickname: userInfo.nickName,
        techStack: userInfo.techStack,
        userPropensityType: userAnswer,
        memberPropensityType: memberAnswer,
      };
      dispatch(userCreators.signupMiddleware(registerInfo));
      setpage(page => page + 1);
    }
  };
  //테스트 실행 위치
  const exitResult = () => {
    if (!props.mypage) {
      dispatch(userCreators.modal());
      history.push("/");
      return props.TestClose();
    }
    dispatch(userCreators.modal());
    props.TestClose();
  };

  return (
    <Grid>
      {/* 상단헤더 */}
      <Header>
        <CloseBox
          position="absolute"
          top="5px"
          right="10px"
          width="20px"
          padding="10px"
          height="100%"
          bg="111"
        >
          <CloseIcon
            sx={{ color: "#fff", fontSize: 30 }}
            onClick={() => {
              props.TestClose();
            }}
            cursor="pointer"
          />
        </CloseBox>
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Text size="20px" bold color="#fff">
            협업테스트
          </Text>
        </Grid>
      </Header>
      {/* 프로그래스바 */}
      <Grid width="70%" margin="15px auto" height="10%">
        <Progress page={page} />
      </Grid>
      {/* 이미지결과 */}
      <StepImgBox>
        {TestData.teststep.map(step => {
          if (step.step === page) {
            return <TestImg key={step.step} src={step.img} />;
          }
        })}
        {page === 10 &&
          TestData.testresult.map(result => {
            if (result.type === userType) {
              return <img key={result.type} width="40%" src={result.img} />;
            }
          })}
      </StepImgBox>
      {/* 컨텐츠자리 */}
      <Grid width="90%" margin="auto" height="42%">
        {page <= 9 && (
          <Test
            page={page}
            handleUserCreate={handleUserCreate}
            handleMemberCreate={handleMemberCreate}
          />
        )}
        {page === 10 && <TestResult userType={userType} />}
      </Grid>
      {/* 소셜공유버튼 */}
      {page == 10 && (
        <Grid>
          <SocialButtonGroup />
        </Grid>
      )}
      {/* 버튼 */}
      <Grid
        display="flex"
        width="90%"
        justifyContent="center"
        height="6%"
        margin="30px auto"
      >
        {/* 페이지에따른 버튼렌더링 */}
        {page !== 1 && page !== 10 && (
          <Button width="40%" margin="5px" _onClick={preStep}>
            이전버튼
          </Button>
        )}
        {page < 9 && (
          <Button width="40%" margin="5px" _onClick={nextStep}>
            다음버튼
          </Button>
        )}
        {page == 9 && (
          <Button width="40%" margin="5px" _onClick={register}>
            제출하기
          </Button>
        )}
        {page == 10 && (
          <Button
            common
            fontSize="11px"
            width="80%"
            margin="5px"
            _onClick={exitResult}
          >
            내 성향에 맞는 팀원을 찾으러 가볼까요?
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

const StepImgBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  height: 25%;
  @media (max-width: 650px) {
    height: 15%;
  }
`;

const TestImg = styled.img`
  width: 40%;
  height: 40%;
  @media (max-width: 650px) {
    width: 30%;
    height: 100%;
  }
`;

const Header = styled.div`
  height: 50px;
  background-color: #17334a;
  position: relative;
  text-align: center;
  padding: 10px 0 10px 0;
  @media (max-width: 650px) {
    height: 25px;
  }
`;

const CloseBox = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  width: 20px;
  padding: 10px;
  height: 100%;
  @media (max-width: 650px) {
    top: -4px;
  }
`;

export default PropensityTest;
