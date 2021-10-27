/* eslint-disable */

import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { history } from "../redux/configureStore";
import { Grid, Image } from "../elements/Index";

import Img from "../images/flutter.png";

const PostTest = (props) => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <ProductImgWrap
        onClick={() => {
          history.push(`/product/${props.id}`);
        }}
      >
        <Grid backgroundColor="#E7E1FF" borderRadius="30px">
          <Grid
            width="350px"
            height="50px"
            backgroundColor="#8B3FF8"
            borderRadius="20px 20px 20px 0px"
          >
            <Grid>
              <TitleDate>D-3</TitleDate>
            </Grid>

            <Grid
              display="flex"
              width="50px"
              borderRadius="50%"
              backgroundColor="white"
              margin="-26px 25px"
            >
              <Image src={Img} />
            </Grid>
          </Grid>
          <DescriptionBox>
            <Title>타이틀</Title>
            <Description>한줄설명입니다.</Description>
            <Date>2021.10.11 ~ 2021.10.12</Date>
            <Line />
            <ProjectState>진행중</ProjectState>
          </DescriptionBox>
        </Grid>
      </ProductImgWrap>
    </React.Fragment>
  );
};

const TitleDate = styled.div`
  width: 50px;
  text-align: center;
  border-radius: 10px;
  color: black;
  background-color: white;
  margin-left: 280px;
`;

const DescriptionBox = styled.div`
  margin: 30px 20px;
`;

const Title = styled.h1`
  font-size: 20px;
`;

const Description = styled.div`
  font-size: 14px;
  color: gray;
  margin-bottom: 80px;
`;

const Date = styled.div`
  margin-left: 134px;
`;

const Line = styled.hr`
  width: 300px;
  color: black;
`;

const ProjectState = styled.div`
  margin-left: 260px;
  margin-bottom: 10px;
`;

const ProductImgWrap = styled.div`
  background-color: white;
  width: 60vw;
  max-width: 350px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 30px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 2px 5px rgba(0, 0, 0, 0.24);
  @media (max-width: 750px) {
    width: 100%;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export default PostTest;
