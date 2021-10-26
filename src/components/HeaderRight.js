import React from "react";
import styled from "styled-components";

import { Grid, Text, Image, Button } from "../elements/Index";
import userImage from "../images/임시로고.jpg";
import LoginModal from "./LoginModal";

const HeaderRight = props => {
  const [showModal, setShowModal] = React.useState(false);
  const modalOpen = () => {
    setShowModal(true);
  };
  return (
    <Grid
      display='flex'
      justifyContent='space-around'
      alignItems='center'
      height='auto'
    >
      <HeaderWrapper>
        <Grid display='flex' alignItems='center' margin='0 10px'>
          <Image src={userImage} />
          <Text>사용자</Text>
        </Grid>
        <Button
          backgroundColor='#111'
          width='100px'
          text='로그인'
          _onClick={modalOpen}
        ></Button>
        <LoginModal showModal={showModal} setShowModal={setShowModal} />
      </HeaderWrapper>
    </Grid>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-right: 36px;
  justify-content: space-evenly;
  /* @media screen and (max-width: 595px) {
    display: none; */
  /* } ; */
`;

export default HeaderRight;
