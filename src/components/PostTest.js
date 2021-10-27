/* eslint-disable */

import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { history } from "../redux/configureStore";
import { Grid, Image } from "../elements/Index";

const PostTest = (props) => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <ProductImgWrap
        onClick={() => {
          history.push(`/product/${props.id}`);
        }}
      >
        <p>제목</p>
        <p>이 프로젝트는 리액트를 기반으로 하는 모집...</p>
        <p>진행중</p>
        <p>제목</p>
        w제목 이름을
        <p>가나다</p>
      </ProductImgWrap>
    </React.Fragment>
  );
};

const CostBox = styled.span`
  display: block;
  padding-top: 7px;
  font-size: 18px;
  line-height: 29px;
  :after,
  :before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const ProductPrice = styled.span`
  font-weight: 800;
  color: #333;
  letter-spacing: 0;
  font-size: 18px;
  line-height: 29px;
`;

const ProductSubTitle = styled.p`
  display: block;
  padding-top: 8px;
  font-size: 13px;
  color: #999;
  line-height: 19px;
  font-weight: 400;
  margin: 0;
`;

const ProductTitle = styled.p`
  overflow: hidden;
  max-height: 58px;
  font-weight: 500;
  font-size: 20px;
  color: #333;
  line-height: 29px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  letter-spacing: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

const ProductContainer = styled.div`
  height: 643px;
  cursor: pointer;
`;

const ProductImgWrap = styled.div`
  background-color: white;
  width: 60vw;
  max-width: 350px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 2px 5px rgba(0, 0, 0, 0.24);
  @media (max-width: 750px) {
    width: 100%;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export default PostTest;
