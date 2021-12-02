/* eslint-disable */
import React from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Dialog } from "@material-ui/core";
import styled from "styled-components";

import { Grid, Input, Text, Button, Image } from "../elements/Index";

import { apis } from "../lib/axios";
import { applyCreators } from "../redux/modules/applyProject";
import CloseIcon from "@mui/icons-material/Close";

const ApplyStatusModal = props => {
  const dispatch = useDispatch();
  const [applyedUsers, setApplyUsers] = React.useState();
  const [acceptButton, setAcceptButton] = React.useState();
  const { applyStatusModal, setApplyStatusModal, postId } = props;
  const history = useHistory();

  const modalClose = () => {
    setApplyStatusModal(false);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apis.applyUser(postId);
        setApplyUsers(result.data.data);
      } catch (err) {}
    };
    fetchData();
  }, [applyStatusModal, acceptButton]);

  const acceptOffer = acceptUser => {
    const acceptInfo = {
      userId: acceptUser,
      accept: true,
    };
    // console.log(acceptInfo);

    const fetchData = async () => {
      try {
        const result = await apis.aceeptOffer(postId, acceptInfo);
        // console.log(result);
        setAcceptButton(result);
        // window.alert("신청을 수락하였습니다.");
      } catch (err) {
        // console.log(err);
      }
    };
    fetchData();
    // dispatch(applyCreators.acceptOfferAPI(postId, acceptInfo));
  };

  const cancelOffer = cancelUser => {
    const acceptInfo = {
      userId: cancelUser,
      accept: false,
    };
    // console.log(acceptInfo);
    dispatch(applyCreators.acceptOfferAPI(postId, acceptInfo));
    // window.alert("신청을 취소하였습니다.");
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
              height="12%"
              bg="#17334a"
              position="relative"
              textAlign="center"
              padding="10px 0 0 0"
              boxShadow="0px 0px 10px #17334a"
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
                  onClick={modalClose}
                  cursor="pointer"
                />
              </Grid>

              <Text size="40px" bold color="#fff">
                신청현황
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
                    height="auto"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                    padding="10px"
                    width="90%"
                    key={user.userId}
                    borderRadius="10px"
                    boxShadow="0px 0px 10px #17334a"
                    {...user}
                  >
                    <Grid
                      display="flex"
                      justifyContent="center"
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
                      {applyedUsers[idx].userPropensityType === "FHP" && (
                        <UserImg src="/img/너구리.png"></UserImg>
                      )}
                    </Grid>
                    <Grid height="100%" width="70%">
                      <Wrap>
                        <Grid
                          margin="auto"
                          height="50px"
                          display="flex"
                          justifyContent="space-between"
                        >
                          {/* <Grid height="100%" textAlign="center">
                            <Grid bg="#eee" height="50%">
                              닉네임
                            </Grid>
                            <Grid bg="#aaa" height="50%">
                              성향
                            </Grid>
                          </Grid> */}
                          <ModalMedia>
                            <Grid height="100%">
                              <Grid
                                bg="#17334a"
                                width="150px"
                                height="50%"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                color="#fff"
                                borderRadius="20px"
                                borderRadius="10px 10px 0 0"
                              >
                                닉네임 | {applyedUsers[idx].nickname}
                              </Grid>
                              <Grid
                                bg="#f5f5f5"
                                height="50%"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                borderRadius="0 0 10px 10px"
                              >
                                성향타입 |{" "}
                                {applyedUsers[idx].userPropensityType}
                              </Grid>
                            </Grid>
                          </ModalMedia>
                        </Grid>
                        <ButtonMedia>
                          <Grid display="flex">
                            <Grid margin="auto" height="auto" width="70px">
                              <Button
                                height="40px"
                                common
                                isValue={applyedUsers[idx].userId}
                                _onClick={e => {
                                  acceptOffer(e.target.value);
                                }}
                              >
                                수락
                              </Button>
                            </Grid>
                            <Grid
                              margin="auto auto auto 3px"
                              height="auto"
                              width="70px"
                            >
                              <Button
                                height="40px"
                                common
                                isValue={applyedUsers[idx].userId}
                                _onClick={e => {
                                  cancelOffer(e.target.value);
                                }}
                              >
                                취소
                              </Button>
                            </Grid>
                          </Grid>
                        </ButtonMedia>
                      </Wrap>
                      <Grid margin="10px 0px 0px">
                        <CommentBubble>
                          {applyedUsers[idx].comment}
                        </CommentBubble>
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
  @media screen and (max-width: 600px) {
  } ;
`;

const ButtonMedia = styled.div`
  @media screen and (max-width: 600px) {
    width: 150px;
    height: 45px;
    background-color: white;
    border: none;
  } ;
`;

const ModalWrap = styled.div`
  width: 550px;
  height: 500px;
  @media screen and (max-width: 600px) {
    width: 300px;
  } ;
`;
const CommentBubble = styled.div`
  color: white;
  position: relative;
  background: #17334a;
  height: 80px;
  overflow: auto;
  /* border: #b29cf4 solid 1px; */
  border-radius: 10px;
  padding: 5px 12px;
  /* ::after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 10px 10px 0;
    border-color: #554475 transparent;
    display: block;
    width: 0;
    z-index: 1;
    top: 10px;
    left: -15px;
  } */
  @media screen and (max-width: 600px) {
    width: 130px;
  } ;
`;

const UserImg = styled.img`
  object-fit: cover;
  width: 80%;
  border-radius: 20px;
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

export default ApplyStatusModal;
