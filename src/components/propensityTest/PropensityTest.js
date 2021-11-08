/* eslint-disable */
import React, { useState } from "react";
import { Dialog } from "@material-ui/core";
import Symbol from "../../images/tiger.jpg";
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
import Progress from "./Progress";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Button, Image, Text } from "../../elements/Index";
import { userCreators } from "../../redux/modules/user";
import { history } from "../../redux/configureStore";

const PropensityTest = props => {
  const is_token = document.cookie.split("=")[1];
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.user);

  //스텝별로 스테이트 변화값에 따라 텍스트가 바뀌는지 먼저 확인
  const [page, setpage] = useState(1);

  // 최종 장소
  const [userPropensityType, setUserPropensityType] = useState([]);
  const [memberPropensityType, setMemberPropensityType] = useState([]);
  //임시 장소
  const [preUserPropensityType, setPreUserPropensityType] = useState("");
  const [preMemberPropensityType, setPreMemberPropensityType] = useState("");

  //자식요소의 밸류값을 가져와 임시에 저장
  const handleUserCreate = answer => {
    setPreUserPropensityType(answer);
    console.log("나의항목 임시저장", answer);
  };
  const handleMemberCreate = answer => {
    setPreMemberPropensityType(answer);
    console.log("상대방의 항목 임시저장", answer);
  };

  //스테이트값에 변화를 버튼에 달아줌
  //다음버튼 누를시에 변화된 값을 스테이트에 담아줌
  const nextStep = () => {
    setpage(page => page + 1);

    setPreUserPropensityType("");
    setPreMemberPropensityType("");
    //나에대한 항목
    let preMy = userPropensityType;
    preMy.push(preUserPropensityType);
    setUserPropensityType(preMy);
    console.log("내꺼 잘 들어감?", userPropensityType);

    //상대에 다한 항목
    let preYou = memberPropensityType;
    preYou.push(preMemberPropensityType);
    setMemberPropensityType(preYou);
    console.log("너꺼 잘 들어감?", memberPropensityType);
  };

  //이전버튼 누를시에 마지막으로 저장된값을 스테이트에 삭제함
  const preStep = () => {
    setpage(page => page - 1);

    // 이전으로가면 마지막항목 제거 (나의것)
    let toPopMy = userPropensityType;
    toPopMy.pop();
    setUserPropensityType(toPopMy);
    console.log("마지막 항목이 사라짐?", userPropensityType);
    //이전으로 가면 마지막 항목 제거 (상대방의 것)
    let topopYou = memberPropensityType;
    topopYou.pop();
    setMemberPropensityType(topopYou);
    console.log("마지막 항목이 사라짐?", memberPropensityType);
  };

  //회원가입
  const register = () => {
    setpage(page => page + 1);

    setPreUserPropensityType("");
    setPreMemberPropensityType("");
    //나에대한 항목
    let preMy = userPropensityType;
    preMy.push(preUserPropensityType);
    setUserPropensityType(preMy);
    console.log("내꺼 잘 들어감?", userPropensityType);

    //상대에 다한 항목
    let preYou = memberPropensityType;
    preYou.push(preMemberPropensityType);
    setMemberPropensityType(preYou);
    console.log("너꺼 잘 들어감?", memberPropensityType);

    let _snsId = String(userInfo.snsId);

    const registerInfo = {
      snsId: _snsId,
      email: userInfo.email,
      nickname: userInfo.nickName,
      techStack: userInfo.techStack,
      userPropensityType: userPropensityType,
      memberPropensityType: memberPropensityType,
    };
    console.log(registerInfo);
    if (userPropensityType.length === 9 && memberPropensityType === 9) {
      dispatch(userCreators.signupMiddleware(registerInfo));
    } else {
      window.alert("설문지가 정확히 작성되지 않았습니다!");
      return false;
    }
  };

  const editTest = () => {
    setpage(page => page + 1);
    const testInfo = {
      userPropensityType: userPropensityType,
      memberPropensityType: memberPropensityType,
    };
    console.log(testInfo);
    dispatch(userCreators.editTestMiddleware(testInfo));
  };

  return (
    <Grid>
      {/* 상단헤더 */}
      <Grid
        height="10%"
        bg="#170184"
        position="relative"
        textAlign="center"
        padding="10px 0 10px 0"
      >
        <Grid>
          <Text size="20px" bold color="#fff">
            협업테스트
          </Text>
        </Grid>
      </Grid>
      {/* 프로그래스바 */}
      <Grid width="70%" margin="20px auto">
        <Progress page={page} />
      </Grid>
      <Grid display="flex" justifyContent="center" margin="10px 0">
        <img width="40%" src={Symbol} />
      </Grid>

      {/* 컨텐츠자리 */}
      <Grid height="15%" width="90%" margin="auto">
        {page === 1 && (
          <TestOne
            userPropensityType={userPropensityType}
            handleUserCreate={handleUserCreate}
            memberPropensityType={memberPropensityType}
            handleMemberCreate={handleMemberCreate}
          />
        )}
        {page === 2 && (
          <TestTwo
            userPropensityType={userPropensityType}
            handleUserCreate={handleUserCreate}
            memberPropensityType={memberPropensityType}
            handleMemberCreate={handleMemberCreate}
          />
        )}
        {page === 3 && (
          <TestThree
            userPropensityType={userPropensityType}
            handleUserCreate={handleUserCreate}
            memberPropensityType={memberPropensityType}
            handleMemberCreate={handleMemberCreate}
          />
        )}
        {page === 4 && (
          <TestFour
            userPropensityType={userPropensityType}
            handleUserCreate={handleUserCreate}
            memberPropensityType={memberPropensityType}
            handleMemberCreate={handleMemberCreate}
          />
        )}
        {page === 5 && (
          <TestFive
            userPropensityType={userPropensityType}
            handleUserCreate={handleUserCreate}
            memberPropensityType={memberPropensityType}
            handleMemberCreate={handleMemberCreate}
          />
        )}
        {page === 6 && (
          <TestSix
            userPropensityType={userPropensityType}
            handleUserCreate={handleUserCreate}
            memberPropensityType={memberPropensityType}
            handleMemberCreate={handleMemberCreate}
          />
        )}
        {page === 7 && (
          <TestSeven
            userPropensityType={userPropensityType}
            handleUserCreate={handleUserCreate}
            memberPropensityType={memberPropensityType}
            handleMemberCreate={handleMemberCreate}
          />
        )}
        {page === 8 && (
          <TestEight
            userPropensityType={userPropensityType}
            handleUserCreate={handleUserCreate}
            memberPropensityType={memberPropensityType}
            handleMemberCreate={handleMemberCreate}
          />
        )}
        {page === 9 && (
          <TestNine
            userPropensityType={userPropensityType}
            handleUserCreate={handleUserCreate}
            memberPropensityType={memberPropensityType}
            handleMemberCreate={handleMemberCreate}
          />
        )}
        {page === 10 && <TestResult />}
      </Grid>

      <Grid
        display="flex"
        width="90%"
        justifyContent="space-between"
        height="100%"
        margin="30px auto"
      >
        {/* 5.다음결과값이 없을때 페이지처리 */}
        {page !== 1 && (
          <Button
            width="40%"
            margin="5px"
            _onClick={preStep}
            backgroundColor="#555"
          >
            이전버튼
          </Button>
        )}
        {page !== 9 && (
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
            width="90%"
            margin="5px"
            _onClick={() => {
              history.goBack("/");
            }}
          >
            내 성향에 맞는 팀원을 찾으러 가볼까요?
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default PropensityTest;
