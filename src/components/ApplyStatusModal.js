/* eslint-disable */
import React from "react";
import { Grid, Input, Text, Button, Image } from "../elements/Index";
import { Dialog } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { applyCreators } from "../redux/modules/applyProject";
import CloseIcon from "@mui/icons-material/Close";
import { apis } from "../lib/axios";
import { useHistory } from "react-router";
const ApplyStatusModal = (props) => {
  const dispatch = useDispatch();
  const applyUsers = useSelector((state) => state.apply.applyUsers);
  const [applyedUsers, setApplyUsers] = React.useState();
  const [acceptButton, setAcceptButton] = React.useState();
  const { applyStatusModal, setApplyStatusModal, postId } = props;
  const history = useHistory();

  const modalClose = () => {
    setApplyStatusModal(false);
  };

  React.useEffect(() => {
    // console.log(applyedUsers);
    const fetchData = async () => {
      try {
        const result = await apis.applyUser(postId);
        // console.log(result);
        setApplyUsers(result.data.data);
      } catch (err) {
        // console.log(err);
      }
    };
    fetchData();

    // dispatch(applyCreators.applyUserAPI(postId));
  }, [applyStatusModal, acceptButton]);

  const acceptOffer = (acceptUser) => {
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

  const cancelOffer = (cancelUser) => {
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
              bg="#554475"
              position="relative"
              textAlign="center"
              padding="10px 0 0 0"
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
                  onClick={modalClose}
                  cursor="pointer"
                />
              </Grid>
              <Grid
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="40px"
              >
                <Text size="40px" bold color="#fff">
                  신청현황
                </Text>
              </Grid>
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
                    boxShadow="0px 0px 10px #554475"
                    {...user}
                  >
                    <Grid
                      margin="auto"
                      width="30%"
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
                      <ModalMedia>
                        <Grid width="100%" textAlign="center">
                          <Grid bg="#55447561" width="100%" height="50%">
                            {applyedUsers[idx].nickname}
                          </Grid>
                          <Grid bg="#f5f5f5" height="50%">
                            {applyedUsers[idx].userPropensityType}
                          </Grid>
                        </Grid>
                      </ModalMedia>
                    </Grid>
                    <Grid height="100%" width="80%">
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
                        </Grid>
                        <ButtonMedia>
                          <Grid display="flex">
                            <Grid margin="auto" height="auto" width="80px">
                              <Button
                                height="10px"
                                common
                                isValue={applyedUsers[idx].userId}
                                _onClick={(e) => {
                                  acceptOffer(e.target.value);
                                }}
                              >
                                수락
                              </Button>
                            </Grid>
                            <Grid
                              margin="auto auto auto 3px"
                              height="auto"
                              width="80px"
                            >
                              <Button
                                height="10px"
                                common
                                isValue={applyedUsers[idx].userId}
                                _onClick={(e) => {
                                  cancelOffer(e.target.value);
                                }}
                              ></Button>
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
    height: 20px;
  } ;
`;

const ModalWrap = styled.div`
  width: 550px;
  height: 500px;
  @media screen and (max-width: 400px) {
    width: 300px;
  } ;
`;

const CommentBubble = styled.div`
  color: white;
  position: relative;
  background: #554475;
  height: auto;
  /* border: #b29cf4 solid 1px; */
  border-radius: 10px;
  padding: 5px 12px;
  /* ::after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 10px 20px 0;
    border-color: #554475 transparent;
    display: block;
    width: 0;
    z-index: 1;
    top: 10px;
    left: -15px;
  } */
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
  @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
    height: 40%;
  } ;
`;

export default ApplyStatusModal;
