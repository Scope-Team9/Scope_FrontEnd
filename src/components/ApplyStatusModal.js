/* eslint-disable */
import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { Dialog } from "@material-ui/core";
import styled from "styled-components";

import { Grid, Text, Button } from "../elements/Index";
import { apis } from "../lib/axios";
import ImgType from "../shared/ImgType";
import { applyCreators } from "../redux/modules/applyProject";
import CloseIcon from "@mui/icons-material/Close";

const ApplyStatusModal = (props) => {
  const dispatch = useDispatch();
  const [applyedUsers, setApplyUsers] = React.useState();
  const [acceptButton, setAcceptButton] = React.useState();
  const { applyStatusModal, setApplyStatusModal, postId } = props;
  const history = useHistory();

  const modalClose = () => {
    setApplyStatusModal(false);
  };

  const goToMypage = (userId) => {
    history.push(`/mypage/${userId}`);
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

  const acceptOffer = (acceptUser) => {
    const acceptInfo = {
      userId: acceptUser,
      accept: true,
    };

    const fetchData = async () => {
      try {
        const result = await apis.aceeptOffer(postId, acceptInfo);

        setAcceptButton(result);
      } catch (err) {}
    };
    fetchData();
  };

  const cancelOffer = (cancelUser) => {
    const acceptInfo = {
      userId: cancelUser,
      accept: false,
    };

    dispatch(applyCreators.acceptOfferAPI(postId, acceptInfo));
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
              bg="#172D40"
              position="relative"
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="10px 0 0 0"
              boxShadow="0px 0px 10px #172D40"
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

              <Text size="25px" bold color="#fff">
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
              <Grid width="90%" height="90%" margin="10px 0">
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
                    boxShadow="0 5px 15px rgb(0 0 0 / 40%)"
                    {...user}
                  >
                    <ImageWrap
                      onClick={() => {
                        history.push(`/mypage/${user.userId}`);
                      }}
                    >
                      <ImgType
                        width="100%"
                        height="100%"
                        type={user.userPropensityType}
                        cursor="pointer"
                        _onClick={() => {
                          goToMypage(user.userId);
                        }}
                      ></ImgType>
                    </ImageWrap>
                    <Grid height="100%" width="70%">
                      <Wrap>
                        <Grid
                          margin="auto"
                          height="50px"
                          display="flex"
                          justifyContent="space-between"
                        >
                          <ModalMedia>
                            <Grid height="100%">
                              <Grid
                                bg="#172d408f"
                                width="150px"
                                height="25px"
                                display="flex"
                                padding="2px 0 0 0"
                                justifyContent="center"
                                alignItems="center"
                                color="#fff"
                                borderRadius="20px"
                                borderRadius="10px 10px 0 0"
                              >
                                <Text size="13px">
                                  닉네임 | {applyedUsers[idx].nickname}
                                </Text>
                              </Grid>
                              <Grid
                                bg="#f5f5f5"
                                width="150px"
                                height="25px"
                                display="flex"
                                padding="2px 0 0 0"
                                justifyContent="center"
                                alignItems="center"
                                color="#17334a"
                                borderRadius="20px"
                                borderRadius="0 0 10px 10px"
                              >
                                <Text size="13px">
                                  성향타입 |{" "}
                                  {applyedUsers[idx].userPropensityType}
                                </Text>
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
                              width="70px"
                            >
                              <Button
                                height="40px"
                                common
                                isValue={applyedUsers[idx].userId}
                                _onClick={(e) => {
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
  color: #17334a;
  position: relative;
  background: #172d408f;
  height: 80px;
  overflow: auto;
  border-radius: 10px;
  padding: 5px 12px;
  box-shadow: 0 2px 5px rgb(0 0 0 / 15%);
  ::before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 30px 30px 0;
    border-color: #e4f3ff transparent;
    display: block;
    width: 0;
    z-index: 1;
    top: 5px;
    left: -13px;
  }
  @media screen and (max-width: 600px) {
    width: 120px;
    margin: 0 auto 0 5px;
  } ;
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

const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 100px;
  height: 100px;
  @media screen and (max-width: 600px) {
    width: 60px;
    height: 60px;
  } ;
`;

export default ApplyStatusModal;
