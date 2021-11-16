/* eslint-disable */
import React from "react";
import { Grid, Input, Text, Button, Image } from "../elements/Index";
import { Dialog } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { applyCreators } from "../redux/modules/applyProject";
import CloseIcon from "@mui/icons-material/Close";

const ApplyStatusModal = (props) => {
  const dispatch = useDispatch();
  const applyUsers = useSelector((state) => state.apply.applyUsers);
  const { applyStatusModal, setApplyStatusModal, postId } = props;
  const modalClose = () => {
    setApplyStatusModal(false);
  };
  console.log(applyUsers);

  React.useEffect(() => {
    console.log(applyUsers);

    dispatch(applyCreators.applyUserAPI(postId));
  }, [applyStatusModal]);

  const acceptOffer = (acceptUser) => {
    const acceptInfo = {
      userId: acceptUser,
      accept: true,
    };
    console.log(acceptInfo);
    dispatch(applyCreators.acceptOfferAPI(postId, acceptInfo));
    window.alert("신청을 수락하였습니다.");
  };

  const cancelOffer = (cancelUser) => {
    const acceptInfo = {
      userId: cancelUser,
      accept: false,
    };
    console.log(acceptInfo);
    dispatch(applyCreators.acceptOfferAPI(postId, acceptInfo));
    window.alert("신청을 취소하였습니다.");
  };

  return (
    <>
      {applyUsers && (
        <Dialog
          maxWidth={"sm"}
          scroll="paper"
          open={applyStatusModal}
          onClose={modalClose}
        >
          <ModalWrap>
            <Grid
              height="10%"
              bg="#B29CF4"
              position="relative"
              textAlign="center"
              padding="10px 0 0 0"
            >
              <Grid
                position="absolute"
                top="0px"
                right="10px"
                width="20px"
                padding="10px"
              >
                <CloseIcon fontSize="large" onClick={modalClose} />
              </Grid>
              <Text size="30px" bold color="#fff">
                신청현황
              </Text>
            </Grid>
            {applyUsers == "" && (
              <Grid height="0%" justifyContent="center">
                <Grid
                  justifyContent="center"
                  alignItems="center"
                  width="70%"
                  textAlign="center"
                  margin="auto"
                >
                  <Grid height="50%">
                    <img width="100%" src="/img/step9.png" />
                  </Grid>
                  <Grid margin="250px 0">지원자가 아직 없습니다!</Grid>
                </Grid>
              </Grid>
            )}

            <Grid display="flex" height="85%" justifyContent="center">
              <Grid width="90%" margin="10px 0">
                {applyUsers.map((user, idx) => (
                  <Grid
                    margin="10px auto"
                    height="100px"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                    padding="10px"
                    width="90%"
                    key={user.userId}
                    {...user}
                  >
                    <Grid margin="auto" width="30%">
                      {applyUsers[idx].userPropensityType === "LVG" && (
                        <UserImg src="/img/호랑이.png"></UserImg>
                      )}
                      {applyUsers[idx].userPropensityType === "LVP" && (
                        <UserImg src="/img/늑대.png"></UserImg>
                      )}
                      {applyUsers[idx].userPropensityType === "LHG" && (
                        <UserImg src="/img/여우.png"></UserImg>
                      )}
                      {applyUsers[idx].userPropensityType === "LHP" && (
                        <UserImg src="/img/판다.png"></UserImg>
                      )}
                      {applyUsers[idx].userPropensityType === "FVG" && (
                        <UserImg src="/img/토끼.png"></UserImg>
                      )}
                      {applyUsers[idx].userPropensityType === "FVP" && (
                        <UserImg src="/img/허스키.png"></UserImg>
                      )}
                      {applyUsers[idx].userPropensityType === "FHG" && (
                        <UserImg src="/img/고양이.png"></UserImg>
                      )}
                      {applyUsers[idx].userPropensityType === "FHP" && (
                        <UserImg src="/img/물개.png"></UserImg>
                      )}
                    </Grid>
                    <Grid height="100%" width="80%">
                      <Grid display="flex" height="60%" margin="auto">
                        <Grid
                          margin="auto"
                          height="50px"
                          display="flex"
                          justifyContent="space-between"
                        >
                          <Grid height="100%" textAlign="center">
                            <Grid bg="#eee" height="50%">
                              닉네임
                            </Grid>
                            <Grid bg="#aaa" height="50%">
                              타입
                            </Grid>
                          </Grid>
                          <Grid margin="auto" height="100%" textAlign="center">
                            <Grid height="50%">{applyUsers[idx].nickname}</Grid>
                            <Grid height="50%">
                              {applyUsers[idx].userPropensityType}
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid margin="auto" height="50px" width="80%">
                          <Button
                            common
                            isValue={applyUsers[idx].userId}
                            _onClick={(e) => {
                              console.log(e);
                              acceptOffer(e.target.value);
                            }}
                          >
                            수락
                          </Button>
                        </Grid>
                        <Grid
                          margin="auto auto auto 3px"
                          height="50px"
                          width="80%"
                        >
                          <Button
                            common
                            isValue={applyUsers[idx].userId}
                            _onClick={(e) => {
                              cancelOffer(e.target.value);
                            }}
                          >
                            취소
                          </Button>
                        </Grid>
                      </Grid>
                      <CommentBubble>{applyUsers[idx].comment}</CommentBubble>
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

const ModalWrap = styled.div`
  width: 550px;
  height: 500px;
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
  width: 100px;
  border-radius: 12px;
  background-color: #ececec;
  cursor: pointer;
`;

export default ApplyStatusModal;
