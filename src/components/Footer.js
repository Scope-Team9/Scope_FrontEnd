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
  const nowPage = useSelector((state) => state.post.whatPage.now);

  const goToMypage = () => {
    history.push(`/`);
    setTimeout(() => {
      history.push(`/mypage/${userId}`);
    }, 50);
  };
  const goToAddPost = () => {
    history.push("/postadd");
  };
  const goToHome = () => {
    if (nowPage === "mainPage") {
      window.scrollTo({
        behavior: "smooth",
        left: 0,
        top: 0,
      });
    }
    history.push("/");
  };

  React.useLayoutEffect(() => {}, [userType]);
  return (
    <Wrap>
      <Grid display="flex" boxShadow="0 0 3px #aaa">
        {userType && isToken && (
          <FooterBtn onClick={goToHome}>
            <HomeIcon sx={{ color: "#17334a", fontSize: 40 }} />
          </FooterBtn>
        )}

        {userType && isToken && (
          <FooterBtn
            onClick={() => {
              if (!isToken) {
                window.alert("로그인 후 작성 가능합니다.");
              } else {
                goToAddPost();
              }
            }}
          >
            <AddIcon sx={{ color: "#17334a", fontSize: 40 }} />
          </FooterBtn>
        )}

        {!userType ||
          (!isToken && (
            <FooterHomeBtn onClick={goToHome}>
              <HomeIcon sx={{ color: "white", fontSize: 40 }} />
            </FooterHomeBtn>
          ))}

        {userType && isToken && (
          <FooterBtn onClick={goToMypage}>
            <ImgType type={userType} />
          </FooterBtn>
        )}
      </Grid>
    </Wrap>
  );
};
const Wrap = styled.div`
  display: none;
  background-color: white;
  border-radius: 10px 10px 0 0;
  box-shadow: 0px 0px 10px #ddd;
  @media screen and (max-width: 767px) {
    width: 100vw;
    margin: auto;
    height: 7%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: rgba(255, 255, 255, 0); */
    z-index: 10;
    position: fixed;
    bottom: 0;
  }
`;

const FooterHomeBtn = styled.div`
  width: 12.5%;
  height: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #17334a;
  border-radius: 50px;
  box-shadow: 0px 0px 10px #17334a;
`;

const FooterBtn = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export default Footer;
