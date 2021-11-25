/* eslint-disable */
import React from "react";
import { Grid, Button } from "../elements/Index";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ImgType from "../shared/ImgType";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import { history } from "../redux/configureStore";

const Footer = (props) => {
  const userType = props.userInfo.userPropensityType;
  const userId = props.userInfo.userId;
  const isToken = document.cookie;
  const goToMypage = () => {
    history.push(`/mypage/${userId}`);
  };
  const goToAddPost = () => {
    history.push("/postadd");
  };
  const goToHome = () => {
    history.push("/");
  };

  return (
    <Wrap>
      <Grid display="flex" bg="#fff" boxShadow="0 0 3px #aaa">
        <FooterBtn onClick={goToHome}>
          <HomeIcon sx={{ color: "#17334A", fontSize: 40 }} />
        </FooterBtn>
        <FooterBtn
          onClick={() => {
            if (!isToken) {
              window.alert("로그인 후 작성 가능합니다.");
            } else {
              goToAddPost();
            }
          }}
        >
          <AddIcon sx={{ color: "#17334A", fontSize: 40 }} />
        </FooterBtn>
        {userType && isToken && (
          <FooterBtn onClick={goToMypage}>
            <div
              _onClick={() => {
                history.push(`/mypage/${userInfo.userId}`);
              }}
            >
              <ImgType type={userType} />
            </div>
          </FooterBtn>
        )}
      </Grid>
    </Wrap>
  );
};
const Wrap = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    width: 100vw;
    margin: auto;
    height: 6%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0);
    z-index: 10;
    position: fixed;
    bottom: 0;
  }
`;

const FooterBtn = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export default Footer;
