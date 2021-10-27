/* eslint-disable */

import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { history } from "../redux/configureStore";

const Product = (props) => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <ProductContainer
        onClick={() => {
          history.push(`/product/${props.id}`);
        }}
      >
        <ProductImgWrap>
          <img src={props.image} />
        </ProductImgWrap>
        <ProductTitle>{props.name}</ProductTitle>
        <CostBox>
          <ProductPrice>{props.price} 원</ProductPrice>
        </CostBox>
        <ProductSubTitle>{props.description}</ProductSubTitle>
      </ProductContainer>
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
  overflow: hidden;
  position: relative;
  width: 338px;
  height: 435px;
  & img {
    width: 338px;
    height: 435px;
    margin: 0px;
    padding: 0px;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    -ms-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
    &:hover {
      transform: scale(1.05);
      -webkit-transform: scale(1.05);
      -moz-transform: scale(1.05);
      -ms-transform: scale(1.05);
      -o-transform: scale(1.05);
    }
  }
`;

export default Product;
