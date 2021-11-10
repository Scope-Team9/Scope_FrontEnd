import React from "react";
import { Grid, Button, Input, Text } from "../elements/Index";
import styled from "styled-components";
import { Dialog } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";

const EmailAuth = props => {
  const { modal, setModal } = props;
  const modalClose = () => {
    setModal(false);
  };
  return (
    <Dialog maxWidth={"sm"} scroll="paper" open={modal}>
      <ModalWrap>
        <Grid>
          {/* 헤더 */}
          <Grid
            width="100%"
            height="15%"
            bg="#B29CF4"
            position="relative"
            textAlign="center"
            padding="10px 0 10px 0"
          >
            <Grid
              position="absolute"
              top="0px"
              right="20px"
              width="20px"
              padding="10px"
            >
              <CloseIcon fontSize="large" onClick={modalClose} />
            </Grid>
            <Grid>
              <Text size="20px" bold color="#fff">
                이메일 인증
              </Text>
            </Grid>
          </Grid>
          {/* 내용작성 */}
          <Grid height="75%">
            <Input></Input>
          </Grid>
        </Grid>
      </ModalWrap>
    </Dialog>
  );
};

const ModalWrap = styled.div`
  width: 500px;
  height: 350px;
`;

export default EmailAuth;
