/* eslint-disable */
import React from "react";
import { Grid, Button, Input, Text } from "../elements/Index";
import styled from "styled-components";
import { Dialog } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import { apis } from "../lib/axios";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { userCreators } from "../redux/modules/user";
import { deleteCookie } from "../shared/Cookie";
import { useHistory } from "react-router";
const EmailAuth = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { modal, setModal } = props;
  const modalClose = () => {
    setModal(false);
  };

  const UserDelete = () => {
    const fetchData = async () => {
      const result = await apis.deleteUser(props.userId);
      try {
        Swal.fire(`${result.data.msg}`, "", "info");
        deleteCookie("ScopeUser");
        history.push("/");

        dispatch(userCreators.logOut());
        setModal(false);
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
          <Grid margin="60px 0 0 0">
            <Dec>정말 탈퇴 하시겠습니까?</Dec>
            <Dec>게시자가 회원 탈퇴시 작성된 포스트는 모두 제거됩니다.</Dec>
            <Dec>지원한 프로젝트는 모두 탈퇴됩니다.</Dec>

            <Button
              width="320px"
              margin="50px 0 0 21%"
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
  width: 550px;
  height: 350px;
  border-radius: 20px;
  overflow: hidden;
`;
const Dec = styled.p`
  color: #08061d;
  font-size: 14px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export default EmailAuth;
