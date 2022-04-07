// LogoButton.js(element 공통 컴포넌트)
/* eslint-disable */
import React from "react";
import styled from "styled-components";
const LogoButton = (props) => {
  return (
    <BorderRadius>
      <IMGS
        id={props.item.id}
        src={props.item.img}
        active={props.item.active}
        title={props.item.title}
        onClick={() => {
          props.onClick();
        }}
      ></IMGS>
    </BorderRadius>
  );
};
const BorderRadius = styled.div`
  border-radius: 250px;
  margin: auto;
`;

const IMGS = styled.img`
  cursor: pointer;
  width: 68px;
  margin: 10px 15px;
  opacity: ${(props) => (props.active ? 1 : 0.2)};
  transition: all 0.1s linear;
  :hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 750px) {
    width: 30px;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다
export default LogoButton;
