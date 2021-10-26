import React from "react";
import { Grid, Image, Text } from "../elements/Index";
import userImage from "../images/임시로고.jpg";

const SideBar = () => {
  return (
    <React.Fragment>
      <Grid
        position="fixed"
        top="100px"
        left="0"
        width="100px"
        height="auto"
        padding="16px 0 20% 0"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        bg="#f0f2f5"
        zIndex="0"
        marginRight="100px"
      >
        <Grid padding="0 10px">
          <Grid
            width="90%"
            height="46px"
            display="flex"
            alignItems="center"
            padding="0 8px"
            hover="rgba(0, 0, 0, 0.05)"
            borderRadius="10px"
          >
            <Image src={userImage} size="32" />
            <Text size="0.93rem" margin="0 0 0 7px">
              홈
            </Text>
          </Grid>
        </Grid>
        <Grid padding="0 10px">
          <Grid
            width="90%"
            height="46px"
            display="flex"
            alignItems="center"
            padding="0 8px"
            hover="rgba(0, 0, 0, 0.05)"
            borderRadius="10px"
          >
            <Image src={userImage} size="32" />
            <Text size="0.93rem" margin="0 0 0 7px">
              추천프로젝트
            </Text>
          </Grid>
        </Grid>
        <Grid height="calc(80vh - 36px)" padding="0 10px">
          <Grid
            width="90%"
            height="46px"
            display="flex"
            alignItems="center"
            padding="0 8px"
            hover="rgba(0, 0, 0, 0.05)"
            borderRadius="10px"
          >
            <Image src={userImage} size="32" />
            <Text size="0.93rem" margin="0 0 0 7px">
              마이페이지
            </Text>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default SideBar;
