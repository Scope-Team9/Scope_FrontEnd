import React, { useState } from "react";
import { Dialog } from "@material-ui/core";
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
import { useSelector, useDispatch } from "react-redux";
import { Grid, Button, Image } from "../../elements/Index";
import { userCreators } from "../../redux/modules/user";

const PropensityTest = (props) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);

  //스텝별로 스테이트 변화값에 따라 텍스트가 바뀌는지 먼저 확인
  const [page, setpage] = useState(1);

  // 최종 장소
  const [userPropensityType, setUserPropensityType] = useState([]);
  const [memberPropensityType, setMemberPropensityType] = useState([]);
  //임시 장소
  const [preUserPropensityType, setPreUserPropensityType] = useState("");
  const [preMemberPropensityType, setPreMemberPropensityType] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  //자식요소의 밸류값을 가져와 임시에 저장
  const handleUserCreate = (answer) => {
    setPreUserPropensityType(answer);
    console.log("나의항목 임시저장", answer);
  };
  const handleMemberCreate = (answer) => {
    setPreMemberPropensityType(answer);
    console.log("상대방의 항목 임시저장", answer);
  };

  //스테이트값에 변화를 버튼에 달아줌
  //다음버튼 누를시에 변화된 값을 스테이트에 담아줌
  const nextStep = () => {
    setpage((page) => page + 1);

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
    setpage((page) => page - 1);

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
    console.log(_snsId);
    console.log(typeof _snsId);

    const registerInfo = {
      snsId: _snsId,
      email: userInfo.email,
      nickname: userInfo.nickName,
      techStack: userInfo.techStack,
      userPropensityType: userPropensityType,
      memberPropensityType: memberPropensityType,
    };
    console.log(registerInfo);
    dispatch(userCreators.signupMiddleware(registerInfo));
  };

  return (
    <Grid width="400px" height="350px">
      {/* 프로그래스바 */}
      <div>
        <progress max="9" value={page} />
      </div>

      {/* 컨텐츠자리 */}
      <Grid>
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

      <Grid display="flex" width="100%">
        {/* 5.다음결과값이 없을때 페이지처리 */}
        {page !== 1 && (
          <Button
            backgroundColor="#007BFF"
            borderRadius="30px"
            width="47%"
            margin="5px"
            _onClick={preStep}
          >
            이전버튼
          </Button>
        )}
        {page !== 9 && (
          <Button
            backgroundColor="#007BFF"
            borderRadius="30px"
            width="47%"
            margin="5px"
            _onClick={nextStep}
          >
            다음버튼
          </Button>
        )}
        {page == 9 && (
          <Button
            backgroundColor="#007BFF"
            borderRadius="30px"
            width="47%"
            margin="5px"
            _onClick={register}
          >
            제출하기
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

const ModalWrap = styled.div`
  overflow: hidden;
  width: 500px;
`;

export default PropensityTest;
