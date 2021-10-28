import React from "react";
import { Grid, Input, Text, Button, Image } from "../elements/Index";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { userCreators } from "../redux/modules/user";

const StartLoginPage = props => {
  return (
    <Grid padding="20px 0">
      <Grid alignItems="center" position="relative">
        <Text
          padding="0 0 5px 20px"
          size="40px"
          bold="800"
          margin="-10px 0"
          justifyContent="center"
        >
          Welcome to Scope!
        </Text>
        <Grid display="flex" flexDirection="column">
          <GithubBtn
            onClick={() => {
              window.location.href =
                "https://github.com/login/oauth/authorize?client_id=e479ff8fd436197619e4&scope=repo:status read:repo_hook user:email&redirect_uri=http://localhost:3000/user/github/callback";
            }}
          >
            깃허브로그인
          </GithubBtn>
          <KakaoBtn
            onClick={() => {
              window.location.href =
                "https://kauth.kakao.com/oauth/authorize?client_id=2f892c61e0552c3f50223077e2fc5c6c&redirect_uri=http://localhost:3000/user/kakao/callback&response_type=code";
            }}
          >
            카카오로그인
          </KakaoBtn>
          <NaverBtn
            onClick={() => {
              window.location.href =
                "https://kauth.kakao.com/oauth/authorize?client_id=2f892c61e0552c3f50223077e2fc5c6c&redirect_uri=http://localhost:3000/user/kakao/callback&response_type=code";
            }}
          >
            네이버로그인
          </NaverBtn>
        </Grid>
      </Grid>
    </Grid>
  );
};

const GithubBtn = styled.div`
  display: inline-block;
  width: 300px;
  height: 40px;
  margin: 5px auto;
  padding-top: 12px;
  border: 0.5px solid #555555;
  box-sizing: border-box;
  border-radius: 22.5px;
  font-size: 14px;
  text-align: center;
  color: #555555;
  cursor: pointer;
`;

const KakaoBtn = styled.div`
  display: inline-block;
  width: 300px;
  height: 40px;
  margin: 5px auto;
  padding-top: 12px;
  border: 0.5px solid #555555;
  box-sizing: border-box;
  border-radius: 22.5px;
  font-size: 14px;
  text-align: center;
  color: #555555;
  cursor: pointer;
`;

const NaverBtn = styled.div`
  display: inline-block;
  width: 300px;
  height: 40px;
  margin: 5px auto;
  padding-top: 12px;
  border: 0.5px solid #555555;
  box-sizing: border-box;
  border-radius: 22.5px;
  font-size: 14px;
  text-align: center;
  color: #555555;
  cursor: pointer;
`;

export default StartLoginPage;
