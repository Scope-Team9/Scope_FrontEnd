/* eslint-disable */
import React from "react";
import { Grid, Input, Text, Button, Image } from "../../elements/Index";
import { Dialog } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router";
import { applyCreators } from "../../redux/modules/applyProject";

import CloseIcon from "@mui/icons-material/Close";
import { apis } from "../../lib/axios";
const ExileUserModal = props => {
  const dispatch = useDispatch();
  const applyUsers = useSelector(state => state.apply.applyUsers);
  const [applyedUsers, setApplyUsers] = React.useState();
  const [acceptButton, setAcceptButton] = React.useState();
  const { applyStatusModal, setApplyStatusModal, postId, postUserId } = props;
  const history = useHistory();

  const modalClose = () => {
    setApplyStatusModal(false);
  };

  React.useEffect(() => {
    // console.log(applyedUsers);
    const fetchData = async () => {
      try {
        const result = await apis.serachTeamUser(postId);
        // console.log(result);
        setApplyUsers(result.data.data);
      } catch (err) {
        // console.log(err);
      }
    };
    fetchData();

    // dispatch(applyCreators.applyUserAPI(postId));
  }, [applyStatusModal, acceptButton]);

  const exile = userId => {
    // console.log(userId);
    const fetchData = async () => {
      try {
        const result = await apis.exileUser(postId, userId);
        // console.log(result);
        setAcceptButton(result);
      } catch (err) {
        // console.log(err.response);
      }
    };
    fetchData();
  };

  return (
    <>
      {applyedUsers && (
        <Dialog
          maxWidth={"sm"}
          scroll="paper"
          open={applyStatusModal}
          onClose={modalClose}
        >
          <ModalWrap>
            <Grid
              height="10%"
              bg="#554475"
              position="relative"
              textAlign="center"
              padding="10px 0 10px 0"
              boxShadow="0px 0px 10px #554475"
            >
              <Grid
                position="absolute"
                top="0px"
                right="10px"
                width="20px"
                padding="10px"
              >
                <CloseIcon
                  sx={{ color: "#fff", fontSize: 35 }}
                  fontSize="large"
                  cursor="pointer"
                  onClick={modalClose}
                />
              </Grid>
              <Text size="40px" bold color="#fff">
                팀원강퇴
              </Text>
            </Grid>
            {applyedUsers == "" && (
              <Grid height="0%" justifyContent="center">
                <Grid
                  justifyContent="center"
                  alignItems="center"
                  width="70%"
                  textAlign="center"
                  margin="auto"
                >
                  <Grid height="50%" margin="40px auto">
                    <img width="100%" src="/img/step9.png" />
                  </Grid>
                  <Grid margin="250px 0">지원자가 아직 없습니다!</Grid>
                </Grid>
              </Grid>
            )}

            <Grid display="flex" height="85%" justifyContent="center">
              <Grid width="90%" margin="10px 0">
                {applyedUsers.map((user, idx) => (
                  <Grid
                    margin="10px auto"
                    height="100px"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                    padding="10px"
                    width="90%"
                    borderRadius="10px"
                    boxShadow="0px 0px 10px #554475"
                    key={user.userId}
                    {...user}
                  >
                    <Grid
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      margin="auto"
                      width="100px"
                      _onClick={() => {
                        history.push(`/mypage/${user.userId}`);
                      }}
                    >
                      {applyedUsers[idx].userPropensityType === "LVG" && (
                        <UserImg src="/img/호랑이.png"></UserImg>
                      )}
                      {applyedUsers[idx].userPropensityType === "LVP" && (
                        <UserImg src="/img/늑대.png"></UserImg>
                      )}
                      {applyedUsers[idx].userPropensityType === "LHG" && (
                        <UserImg src="/img/여우.png"></UserImg>
                      )}
                      {applyedUsers[idx].userPropensityType === "LHP" && (
                        <UserImg src="/img/판다.png"></UserImg>
                      )}
                      {applyedUsers[idx].userPropensityType === "FVG" && (
                        <UserImg src="/img/토끼.png"></UserImg>
                      )}
                      {applyedUsers[idx].userPropensityType === "FVP" && (
                        <UserImg src="/img/개.png"></UserImg>
                      )}
                      {applyedUsers[idx].userPropensityType === "FHG" && (
                        <UserImg src="/img/고양이.png"></UserImg>
                      )}
                      {applyedUsers[idx].userPropensityType === "FHP" && (
                        <UserImg src="/img/물개.png"></UserImg>
                      )}
                    </Grid>
                    <Grid width="70%" margin="auto">
                      <Grid
                        display="flex"
                        margin="auto"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        {/* <Grid height="100%" textAlign="center">
                            <Texts bg="#eee" height="50%">
                              닉네임
                            </Texts>
                            <Texts bg="#aaa" height="50%">
                              성향
                            </Texts>
                          </Grid> */}

                        <ModalMedia>
                          <Grid margin="auto">
                            <Grid
                              bg="#55447561"
                              width="110px"
                              height="50%"
                              display="flex"
                              justifyContent="center"
                              alignItems="center"
                              color="#fff"
                              borderRadius="20px"
                              borderRadius="10px 10px 0 0"
                            >
                              <Text size="12px">
                                닉네임 | {applyedUsers[idx].nickname}
                              </Text>
                            </Grid>
                            <Grid
                              bg="#f5f5f5"
                              height="50%"
                              display="flex"
                              justifyContent="center"
                              alignItems="center"
                              borderRadius="0 0 10px 10px"
                            >
                              <Text size="12px">
                                성향타입 |{" "}
                                {applyedUsers[idx].userPropensityType}
                              </Text>
                            </Grid>
                          </Grid>
                        </ModalMedia>

                        <BtnWrap>
                          <Grid width="100%" position="relative" right="0">
                            {applyedUsers[idx].userId !== postUserId && (
                              <Button
                                borderRadius="50%"
                                width="70px"
                                height="70px"
                                common
                                isValue={applyedUsers[idx].userId}
                                _onClick={e => {
                                  window.confirm("추방하시겠습니까?");
                                  exile(e.target.value);
                                }}
                              >
                                추방
                              </Button>
                            )}
                          </Grid>
                        </BtnWrap>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </ModalWrap>
        </Dialog>
      )}
    </>
  );
};
const ModalMedia = styled.div`
  height: 80%;
  margin: auto auto auto 0;
  @media screen and (max-width: 600px) {
  } ;
`;

const ModalWrap = styled.div`
  width: 550px;
  height: 500px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const BtnWrap = styled.div`
  margin: 0 auto 0 40%;
  height: auto;
  width: 80px;
  @media screen and (max-width: 600px) {
    width: 80px;
    margin: auto auto auto 2px;
  } ;
`;

const Texts = styled.p`
  height: 50%;
  width: 50px;
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const CommentBubble = styled.div`
  position: relative;
  background: #f1f9ff;
  height: 40%;
  /* border: #b29cf4 solid 1px; */
  border-radius: 10px;
  padding: 0 12px;
  ::after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 10px 15px 0;
    border-color: #f1f9ff transparent;
    display: block;
    width: 0;
    z-index: 1;
    top: 10px;
    left: -15px;
  }
`;

const UserImg = styled.img`
  object-fit: cover;
  width: 90%;
  border-radius: 12px;
  background-color: #ececec;
  cursor: pointer;
`;

const Wrap = styled.div`
  display: flex;
  height: 60%;
  margin: auto;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    height: 40%;
  } ;
`;

export default ExileUserModal;
