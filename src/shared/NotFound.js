/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";

const NotFound = () => {
  return (
    <div style={{ alignItems: "center" }}>
      <NotFoundImg src="/img/소개글너구리.png" alt="img" />
      <NoIntroductionText>주소가 올바르지 않습니다.</NoIntroductionText>
      <Exit
        onClick={() => {
          history.goBack();
        }}
      >
        뒤로가기
      </Exit>
    </div>
  );
};

const Exit = styled.button`
  margin: 0px auto 15px 45%;
  height: 40px;
  width: 132px;
  background-color: white;
  border: 1px solid #d1d1d1;
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    color: black;
    background-color: #d1d1d1;
    opacity: 0.7;
  }
`;

const NoIntroductionText = styled.p`
  color: #737373;
  font-size: 25px;
  width: auto;
  align-items: center;
  display: flex;
  justify-content: center;
`;
const NotFoundImg = styled.img`
  width: 50%;
  height: 50%;
  object-fit: cover;
  position: relative;
  margin-left: 20%;
  display: flex;
  justify-content: center;
`;
export default NotFound;
