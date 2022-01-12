/* eslint-disable */
import React from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Dialog } from "@material-ui/core";
import styled from "styled-components";
import { Grid, Text, Button } from "../../elements/Index";
import ImgType from "../../shared/ImgType";
import CloseIcon from "@mui/icons-material/Close";
import { apis } from "../../lib/axios";

const ExileUserModal = (props) => {
  const dispatch = useDispatch();
  const applyUsers = useSelector((state) => state.apply.applyUsers);
  const [applyedUsers, setApplyUsers] = React.useState();
  const [acceptButton, setAcceptButton] = React.useState();
  const { applyStatusModal, setApplyStatusModal, postId, postUserId } = props;
  const history = useHistory();
  const modalClose = () => {
    setApplyStatusModal(false);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apis.serachTeamUser(postId);
        setApplyUsers(result.data.data);
      } catch (err) {}
    };
    fetchData();
  }, [applyStatusModal, acceptButton]);

  const exile = (userId) => {
    const fetchData = async () => {
      try {
        const result = await apis.exileUser(postId, userId);
        setAcceptButton(result);
      } catch (err) {}
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
              height="12%"
              bg="#17334a"
              position="relative"
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="10px 0 0 0"
              boxShadow="0 5px 25px rgb(0 0 0 / 15%)"
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
              <Text size="25px" bold color="#fff">
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
              <Grid width="90%" height="90%" margin="10px 0">
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
                    boxShadow="0 5px 15px rgb(0 0 0 / 40%)"
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
                      <ImgType
                        width="100%"
                        height="100%"
                        type={user.userPropensityType}
                        cursor="pointer"
                        _onClick={() => {
                          goToMypage(user.userId);
                        }}
                      ></ImgType>
                    </Grid>
                    <Grid width="70%" margin="auto">
                      <Grid
                        display="flex"
                        margin="auto"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <ModalMedia>
                          <Grid margin="auto">
                            <Grid
                              bg="#172d408f"
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
                                성향타입 |{applyedUsers[idx].userPropensityType}
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
                                _onClick={(e) => {
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
