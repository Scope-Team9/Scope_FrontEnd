import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Input, Text, Button, Image } from "../elements/Index";
import { Dialog } from "@material-ui/core";
import { userCreators } from "../redux/modules/user";

const LastLoginpage = props => {
  const { showModal, setShowModal } = props;
  const dispatch = useDispatch();

  const [nickName, setNickName] = useState();
  const [email, setEmail] = useState();
  const [techStack, setTeckstack] = useState([]);

  //미들웨어전송
  const register = props => {
    const registerInfo = {
      email: email,
      nickname: nickName,
      techStack: [techStack],
    };
    console.log(registerInfo);
    dispatch(userCreators.signupMiddleware(registerInfo));
    props.modalClose();
  };

  return (
    <Dialog maxWidth={"md"} scroll="paper" open={setShowModal(true)}>
      <ModalWrap>
        <Text>회원가입</Text>
        <Input
          type="텍스트"
          _onChange={e => {
            setNickName(e.target.value);
          }}
        >
          닉네임
        </Input>
        <Input
          type="텍스트"
          onChange={e => {
            setEmail(e.target.value);
          }}
        >
          이메일
        </Input>
        <Input type="텍스트">기술스택</Input>
        <Button
          _onClick={() => {
            register();
          }}
        ></Button>
      </ModalWrap>
    </Dialog>
  );
};

const ModalWrap = styled.div`
  overflow: hidden;
  width: 500px;
`;

export default LastLoginpage;
