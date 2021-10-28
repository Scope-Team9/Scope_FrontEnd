import React, { useState } from "react";
import { Grid, Input, Text, Button, Image } from "../elements/Index";
import { Dialog } from "@material-ui/core";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { userCreators } from "../redux/modules/user";
import StartLoginPage from "./StartLoginPage";
import LastLoginPage from "./LastLoginPage";

const LoginModal = props => {
  const dispatch = useDispatch();

  //모달
  const { showModal, setShowModal } = props;
  const modalClose = () => {
    setShowModal(false);
  };

  //페이지전환
  const [pageState, setPageState] = useState(1);
  const pageDown = () => {
    if (pageState > 1) {
      setPageState(pageState - 1);
    }
  };
  const pageUp = () => {
    if (pageState < 3) {
      setPageState(pageState + 1);
    }
  };
  const pageReset = () => {
    setPageState(1);
  };

  return (
    <Dialog maxWidth={"md"} scroll="paper" open={showModal}>
      <ModalWrap>
        <Grid
          className="모달컨테이너"
          backgroundColor="#fff"
          borderRadius="0 0 5px 5px"
          position="relative"
          width="100%"
          height="100%"
        >
          <Grid
            position="absolute"
            top="-10px"
            right="20px"
            color="black"
            width="20px"
            padding="10px"
          >
            <Button text="닫기" _onClick={modalClose} />
          </Grid>
          <StartLoginPage />
          <LastLoginPage />

          <hr color="#eee" />
        </Grid>
      </ModalWrap>
    </Dialog>
  );
};

const ModalWrap = styled.div`
  overflow: hidden;
  width: 500px;
`;

export default LoginModal;
