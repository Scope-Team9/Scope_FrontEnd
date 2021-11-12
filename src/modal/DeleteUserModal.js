/* eslint-disable */
import React from "react";
import { Grid, Button, Input, Text } from "../elements/Index";
import styled from "styled-components";
import { Dialog } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import { apis } from "../lib/axios";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { userCreators } from "../redux/modules/user";
import { useHistory } from "react-router";
const EmailAuth = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { modal, setModal } = props;
  const modalClose = () => {
    setModal(false);
  };
  console.log(props);

  const UserDelete = () => {
    const fetchData = async () => {
      const result = await apis.deleteUser(props.userId);
      try {
        console.log(result);
        // window.alert(result.data.msg);
        setModal(false);
        deleteCookie("ScopeUser");
        dispatch(userCreators.logOut());
        history.replace("/");
        Swal.fire(`${result.data.msg}`, "T.T", "info");
      } catch (err) {
        console.log(err.response);
      }
    };
    fetchData();
  };
  return (
    <Dialog maxWidth={"sm"} scroll="paper" open={modal}>
      <ModalWrap>
        <Grid>
          {/* 헤더 */}
          <Grid
            width="100%"
            height="13%"
            // bg="#B29CF4"
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
            <Grid margin="20px 0 0 0">
              <Text size="30px" bold color="#08061D">
                회원 탈퇴
              </Text>
            </Grid>
          </Grid>
          {/* 내용작성 */}
          <Grid height="45%">
            <Dec>정말 탈퇴하시겠..</Dec>

            <Grid margin="10px 0 0 18%" width="320px"></Grid>

            <Button
              width="320px"
              height="50px"
              margin="-90px 0 0 18%"
              _onClick={() => {
                UserDelete();
              }}
            >
              회원 탈퇴하기
            </Button>
          </Grid>
        </Grid>
      </ModalWrap>
    </Dialog>
  );
};

const ModalWrap = styled.div`
  width: 500px;
  height: 300px;
  border-radius: 20px;
`;
const Dec = styled.p`
  color: #08061d;
  font-size: 14px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

export default EmailAuth;
