// Text.js(element 공통 컴포넌트)
/* eslint-disable */
import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const {
    children,
    color,
    bg,
    size,
    bold,
    align,
    margin,
    padding,
    underline,
    family,
    border,
    borderRadius,
    decoration,
    _onClick,
    cursor,
    hover,
  } = props;
  const styles = {
    color,
    bg,
    size,
    bold,
    align,
    margin,
    padding,
    underline,
    decoration,
    family,
    border,
    borderRadius,
    cursor,
  };
  return (
    <ElText {...styles} onClick={_onClick}>
      {children}
    </ElText>
  );
};

Text.defaultProps = {
  children: null,
  color: null,
  bg: null,
  size: null,
  bold: false,
  align: null,
  underline: null,
  decoration: null,
  margin: false,
  padding: false,
  family: false, //폰트 타입
  border: null,
  borderRadius: null,
  _onClick: () => {},
  cursor: null,
};

const ElText = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.bold};
  text-align: ${(props) => props.align};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  family: ${(props) => props.family};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.bg};
  cursor: ${(props) => props.cursor};
  font-family: "GmarketSans";
  line-height: 1.2;
  text-decoration: ${(props) => props.decoration};
  letter-spacing: 0.002em;
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다
export default Text;
