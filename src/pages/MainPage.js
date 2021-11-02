/* eslint-disable */
import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { Grid } from "../elements/Index";
import Carousel from "../components/Carousel";
import SideBar from "../components/SideBar";
import Infinity from "../shared/Infinity";
import Stack from "../components/Stack";
import PostList from "../components/PostList";
import { postActions } from "../redux/modules/post";
import { useSelector, useDispatch } from "react-redux";

const MainPage = () => {
  const dispatch = useDispatch();
  const is_clicked = useSelector((state) => state.stack.stack);

  const is_loading = useSelector((state) => state.post.is_loading);
  const paging = useSelector((state) => state.post.paging);
  console.log(paging);

  React.useEffect(() => {
    dispatch(postActions.getPostAPI());
  }, [is_clicked]);

  const callNext = () => {
    dispatch(postActions.getPostAPI());
    console.log("??");
  };

  return (
    <>
      <Grid height="100%" bg="#ffff" padding="0px 0px 10px 0"></Grid>
      {/* <ResponsiveSidebar>
        <SideBar />
      </ResponsiveSidebar> */}
      <Grid margin="-10px 0 0 0 ">
        <Inside>
          <Carousel />
          <Stacks>
            <Stack />
          </Stacks>
          <Infinity
            paging={paging}
            is_loading={is_loading}
            callNext={callNext}
            is_next={paging.next < 5 ? true : false}
          >
            <InsideCard>
              <PostList></PostList>
            </InsideCard>
          </Infinity>
        </Inside>
      </Grid>
    </>
  );
};

const ResponsiveSidebar = styled.div`
  @media screen and (max-width: 750px) {
    display: none;
  } ;
`;

const Inside = styled.div`
  @media screen and (max-width: 750px) {
    /* margin-left: -100px; */
  } ;
`;

const InsideCard = styled.div`
  @media screen and (max-width: 750px) {
    margin-left: 18px;
  } ;
`;

const Stacks = styled.div`
  display: flex;
  font-size: 50px;
  margin-top: 20px;
`;

export default MainPage;
