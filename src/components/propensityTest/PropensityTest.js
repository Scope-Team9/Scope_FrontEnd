/* eslint-disable */
import React, { useState } from "react";
import styled from "styled-components";
import {
  TestOne,
  TestTwo,
  TestThree,
  TestFour,
  TestFive,
  TestSix,
  TestSeven,
  TestEight,
  TestNine,
  TestResult,
} from "./TestIndex";
import TestData from "./Testdata.json";
import Progress from "./Progress";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Button, Image, Text } from "../../elements/Index";
import { userCreators } from "../../redux/modules/user";
import { history } from "../../redux/configureStore";
import ImgType from "../../shared/ImgType";
import CloseIcon from "@mui/icons-material/Close";

const PropensityTest = props => {
  const isToken = document.cookie.split("=")[1];
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.user);
  const userType = useSelector(state => state.user.userPropensityType);
  const memberType = useSelector(state => state.user.memberPropensityType);
  // const [active, setActive] = React.useState(preUserPropensityType);
  const [isChecked, setIsChecked] = React.useState("#fff");
  const ToggleButton = answer => {
    isChecked === "#fff" ? setIsChecked("#170184") : setIsChecked("#fff");
  };

  //스텝별로 스테이트 변화값에 따라 텍스트가 바뀌는지 먼저 확인
  const [page, setpage] = useState(1);
  // console.log(page, TestData.teststep);

  // 최종 장소
  const [userPropensityType, setUserPropensityType] = useState([]);
  const [memberPropensityType, setMemberPropensityType] = useState([]);
  //임시 장소
  const [preUserPropensityType, setPreUserPropensityType] = useState("");
  const [preMemberPropensityType, setPreMemberPropensityType] = useState("");

  //자식요소의 밸류값을 가져와 임시에 저장
  const handleUserCreate = answer => {
    setPreUserPropensityType(answer);
    // console.log("나의항목 임시저장", answer);
  };
  const handleMemberCreate = answer => {
    setPreMemberPropensityType(answer);
    // console.log("상대방의 항목 임시저장", answer);
  };

  //스테이트값에 변화를 버튼에 달아줌
  //다음버튼 누를시에 변화된 값을 스테이트에 담아줌
  const nextStep = () => {
    //나에대한 항목
    let preMy = userPropensityType;
    let preYou = memberPropensityType;
    // console.log(preUserPropensityType, preMemberPropensityType);

    if (preUserPropensityType === "" || preMemberPropensityType === "") {
      return window.alert("문항을 선택해주세요!");
      // Swal.fire(
      //   '문항을 선택해주세요!',
      //   '',
      //   'info'
      // )
    } else {
      setpage(page => page + 1);
      setPreUserPropensityType("");
      setPreMemberPropensityType("");
      preMy.push(preUserPropensityType);
      setUserPropensityType(preMy);
      // console.log("내꺼 잘 들어감?", userPropensityType);
      //상대에 다한 항목

      preYou.push(preMemberPropensityType);
      setMemberPropensityType(preYou);
      // console.log("너꺼 잘 들어감?", memberPropensityType);
    }
  };

  //이전버튼 누를시에 마지막으로 저장된값을 스테이트에 삭제함
  const preStep = () => {
    setpage(page => page - 1);

    // 이전으로가면 마지막항목 제거 (나의것)
    let toPopMy = userPropensityType;
    toPopMy.pop();
    setUserPropensityType(toPopMy);
    // console.log("마지막 항목이 사라짐?", userPropensityType);
    //이전으로 가면 마지막 항목 제거 (상대방의 것)
    let topopYou = memberPropensityType;
    topopYou.pop();
    setMemberPropensityType(topopYou);
    // console.log("마지막 항목이 사라짐?", memberPropensityType);
  };

  //회원가입
  const register = () => {
    setPreUserPropensityType("");
    setPreMemberPropensityType("");
    //나에대한 항목
    let preMy = userPropensityType;
    preMy.push(preUserPropensityType);
    setUserPropensityType(preMy);
    // console.log("내꺼 잘 들어감?", userPropensityType);

    //상대에 다한 항목
    let preYou = memberPropensityType;
    preYou.push(preMemberPropensityType);
    setMemberPropensityType(preYou);
    // console.log("너꺼 잘 들어감?", memberPropensityType);

    let realSnsId = String(userInfo.snsId);
    let realUserId = userInfo.userId;

    const registerInfo = {
      snsId: realSnsId,
      email: userInfo.email,
      nickname: userInfo.nickName,
      techStack: userInfo.techStack,
      userPropensityType: userPropensityType,
      memberPropensityType: memberPropensityType,
    };
    const testUpdateInfo = {
      userPropensityType: userPropensityType,
      memberPropensityType: memberPropensityType,
    };

    if (isToken) {
      dispatch(userCreators.editTestMiddleware(realUserId, testUpdateInfo));
      return setpage(page => page + 1);
    } else {
      dispatch(userCreators.signupMiddleware(registerInfo));
      setpage(page => page + 1);
    }
  };

  const exitResult = () => {
    if (!props.mypage) {
      console.log("여기1");
      dispatch(userCreators.modal());
      history.push("/");
    }
    console.log("여기2");
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
        {page === 1 && (
          <TestOne
            handleUserCreate={handleUserCreate}
            handleMemberCreate={handleMemberCreate}
          />
        )}
        {page === 2 && (
          <TestTwo
            handleUserCreate={handleUserCreate}
            handleMemberCreate={handleMemberCreate}
          />
        )}
        {page === 3 && (
          <TestThree
            handleUserCreate={handleUserCreate}
            handleMemberCreate={handleMemberCreate}
          />
        )}
        {page === 4 && (
          <TestFour
            handleUserCreate={handleUserCreate}
            handleMemberCreate={handleMemberCreate}
          />
        )}
        {page === 5 && (
          <TestFive
            handleUserCreate={handleUserCreate}
            handleMemberCreate={handleMemberCreate}
          />
        )}
        {page === 6 && (
          <TestSix
            handleUserCreate={handleUserCreate}
            handleMemberCreate={handleMemberCreate}
          />
        )}
        {page === 7 && (
          <TestSeven
            handleUserCreate={handleUserCreate}
            handleMemberCreate={handleMemberCreate}
          />
        )}
        {page === 8 && (
          <TestEight
            handleUserCreate={handleUserCreate}
            handleMemberCreate={handleMemberCreate}
          />
        )}
        {page === 9 && (
          <TestNine
            handleUserCreate={handleUserCreate}
            handleMemberCreate={handleMemberCreate}
          />
        )}
        {page === 10 && <TestResult userType={userType} />}
      </Grid>
      {/* 버튼 */}
      <Grid
        display="flex"
        width="90%"
        justifyContent="center"
        height="8%"
        margin="30px auto"
      >
        {/* 5.다음결과값이 없을때 페이지처리 */}
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
