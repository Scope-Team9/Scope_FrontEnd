import React from "react";
import { Grid } from "../elements/Index";
import HeaderLeft from "../components/HeaderLeft";
import UserInfoModal from "./UserInfoModal";

const Header = () => {
  return (
    <>
      <Grid
        width='100vw'
        height='50px'
        boxShadow='rgba(0, 0, 0, 0.1) 0px 2px 12px;'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        position='fixed'
        top='0'
        left='0'
        bg='#fff'
        padding='0 0px 0 12px'
      >
        <Grid>
          <HeaderLeft />
        </Grid>
        <Grid>
          <UserInfoModal />
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
