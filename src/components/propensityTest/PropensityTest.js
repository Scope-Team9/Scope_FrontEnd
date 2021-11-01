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

const PropensityTest = props => {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.user);

  const { showModal, setShowModal } = props;

  //1.스텝별로 스테이트 변화값에 따라 텍스트가 바뀌는지 먼저 확인
  const [page, setpage] = useState(1);

  const [userPropensityType, setUserPropensityType] = useState([]);
  const [memberPropensityType, setMemberPropensityType] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  console.log(userPropensityType);
  console.log(memberPropensityType);

  //3.스테이트값에 변화를 버튼에 달아줌
  const nextStep = () => {
    if (page === 10) return;
    setpage(page => page + 1);
  };

  const preStep = () => {
    setpage(page => page - 1);
  };

  const handleUserCreate = answer => {
    setUserPropensityType(userPropensityType.concat(answer));
  };

  const handleMemberCreate = answer => {
    setMemberPropensityType(memberPropensityType.concat(answer));
  };

  //체크박스 선택
  // const handleCheck = (type, newData) => {};

  // const checkedAnswerHandler = (answer, isChecked) => {
  //   if (isChecked) {
  //     userPropensityType.add(answer);
  //   }
  // };

  //회원가입
  const register = () => {
    console.log(userInfo);
    const registerInfo = {
      snsId: userInfo.snsId,
      email: userInfo.email,
      nickname: userInfo.nickName,
      techStack: userInfo.techStack,
      userPropensityType: userPropensityType,
      memberPropensityType: memberPropensityType,
    };
    console.log(registerInfo);
    // dispatch(userCreators.signupMiddleware(registerInfo));
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

//2.스테이트별로 변화를 넣어줄 컴포넌트들 만들기

const ModalWrap = styled.div`
  overflow: hidden;
  width: 500px;
`;

export default PropensityTest;
