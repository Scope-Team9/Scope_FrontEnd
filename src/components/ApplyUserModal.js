/* eslint-disable */
import React from "react";
import { Grid, Input, Text, Button } from "../elements/Index";
import { Dialog } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { applyCreators } from "../redux/modules/applyProject";
import CloseIcon from "@mui/icons-material/Close";

import { Apply, Cancel, TeamExit } from "./applyUserModal/ApplyIndex";
const ApplyUserModal = props => {
  const dispatch = useDispatch();
  const {
    applyUserModal,
    setApplyUserModal,
    applyValue,
    postId,
    passdedMenber,
    passedUserStatus,
  } = props;
  const isMe = useSelector(state => state.user.userId);

  const [likes, setLikes] = React.useState();
  const [page, setPage] = React.useState(1);
  const [front, setFront] = React.useState();
  const [back, setBack] = React.useState();

  React.useEffect(() => {
    setLikes(
      passdedMenber?.map(stateItem => {
        let newStateItem = { ...stateItem, active: false };
        return newStateItem;
      })
    );
  }, [passdedMenber]);

  console.log(isMe, passdedMenber, passedUserStatus);

  const modalClose = () => {
    setApplyUserModal(false);
  };

  const userLiked = () => {
    const likeMember = likes.filter(user => user.active == true);
    var result = likeMember.map(a => a.userId);
    const likeUsers = {
      userIds: result,
    };

    dispatch(applyCreators.starterLikeAPI(postId, likeUsers));
    setPage(page + 1);
  };

  const submitUrl = () => {
    const github = {
      frontUrl: front,
      backUrl: back,
    };

    dispatch(applyCreators.submitUrlAPI(postId, github));
    modalClose;
  };
  //팀원평가 눌렀는지 안눌렀는지 (버튼색상)

  //색상 기능
  const toggleLike = a => {
    setLikes(state => {
      return state.map(val => {
        if (val.userId === Number(a)) {
          return { ...val, active: !val.active };
        }
        return val;
      });
    });
  };

  return (
    <>
      <Dialog
        maxWidth={"sm"}
        scroll="paper"
        open={applyUserModal}
        onClose={modalClose}
      >
        {applyValue === "apply" && (
          <Apply modalClose={modalClose} postId={postId} />
        )}{" "}
        {applyValue === "cancel" && (
          <Cancel modalClose={modalClose} postId={postId} />
        )}
        {applyValue === "teamExit" && (
          <TeamExit modalClose={modalClose} postId={postId} />
        )}
        {applyValue === "end" && page === 1 && (
          <ModalWrap>
            <Grid height="10%" position="relative">
              <Grid
                position="absolute"
                top="0px"
                right="10px"
                width="20px"
                padding="10px"
              >
                <CloseIcon fontSize="large" onClick={modalClose} />
              </Grid>
            </Grid>

            <Grid
              margin="auto"
              height="90%"
              // justifyContent="center"
              width="90%"
              alignItems="center"
              textAlign="center"
            >
              <Grid height="10%" textAlign="center">
                <Text size="30px" bold>
                  프로젝트 마감
                </Text>
              </Grid>

              <Grid height="14%" margin="10px 0">
                <Text size="14px">
                  프로젝트는 어떠셨나요? <br /> 각 팀원들이 어떠셨는지
                  평가해주시면 추천알고리즘이 정교해집니다.
                </Text>
              </Grid>
              {/* 유저평가부분 */}
              <Grid height="50%" width="90%" margin="auto" overflow="auto">
                {passdedMenber?.map((user, idx) => (
                  <Grid
                    margin="10px auto"
                    height="100px"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                    width="100%"
                    key={idx}
                    {...user}
                  >
                    <Grid margin="auto" width="10%">
                      {passdedMenber[idx].userPropensityType === "LVG" && (
                        <UserImg src="/img/호랑이.png"></UserImg>
                      )}
                      {passdedMenber[idx].userPropensityType === "LVP" && (
                        <UserImg src="/img/늑대.png"></UserImg>
                      )}
                      {passdedMenber[idx].userPropensityType === "LHG" && (
                        <UserImg src="/img/여우.png"></UserImg>
                      )}
                      {passdedMenber[idx].userPropensityType === "LHP" && (
                        <UserImg src="/img/판다.png"></UserImg>
                      )}
                      {passdedMenber[idx].userPropensityType === "FVG" && (
                        <UserImg src="/img/토끼.png"></UserImg>
                      )}
                      {passdedMenber[idx].userPropensityType === "FVP" && (
                        <UserImg src="/img/허스키.png"></UserImg>
                      )}
                      {passdedMenber[idx].userPropensityType === "FHG" && (
                        <UserImg src="/img/고양이.png"></UserImg>
                      )}
                      {passdedMenber[idx].userPropensityType === "FHP" && (
                        <UserImg src="/img/물개.png"></UserImg>
                      )}
                    </Grid>
                    <Grid height="100%" width=" 70%" margin="auto">
                      <Grid display="flex" height="60%" margin="auto">
                        <Grid
                          margin="auto"
                          height="50px"
                          display="flex"
                          justifyContent="space-between"
                        >
                          <Grid height="100%" textAlign="center" width="50%">
                            <Grid
                              borderRadius="20px 0 0 20px"
                              bg="#b29cf4"
                              height="50%"
                              margin="0 0 3px 0 "
                            >
                              <Text color="#fff">닉네임</Text>
                            </Grid>
                            <Grid
                              borderRadius="20px 0 0 20px"
                              bg="#b29cf4"
                              height="50%"
                            >
                              <Text color="#fff">타입</Text>
                            </Grid>
                          </Grid>
                          <Grid
                            margin="auto"
                            height="100%"
                            textAlign="center"
                            width="50%"
                          >
                            <Grid
                              height="50%"
                              borderRadius="0 20px 20px 0"
                              bg="#eee"
                              margin="0 0 3px 0 "
                            >
                              {passdedMenber[idx].nickname}
                            </Grid>
                            <Grid
                              height="50%"
                              borderRadius="0 20px 20px 0"
                              bg="#eee"
                            >
                              {passdedMenber[idx].userPropensityType}
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid margin="auto" height="50px" width="80%">
                          {passdedMenber[idx].userId !== isMe && (
                            <Button
                              common
                              isActive={likes[idx].active}
                              isValue={passdedMenber[idx].userId}
                              _onClick={e => {
                                e.stopPropagation();
                                console.log(
                                  likes[idx].userId,
                                  likes[idx].active
                                );
                                toggleLike(e.target.value);
                              }}
                            >
                              좋았어요!
                            </Button>
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>

              <Grid height="10%">
                <Button borderRadius="25px" _onClick={userLiked}>
                  팀원평가
                </Button>
              </Grid>
            </Grid>
          </ModalWrap>
        )}
        {applyValue === "end" && page === 2 && (
          <ModalWrap>
            <Grid height="10%" position="relative">
              <Grid
                position="absolute"
                top="0px"
                right="10px"
                width="20px"
                padding="10px"
              >
                <CloseIcon fontSize="large" onClick={modalClose} />
              </Grid>
            </Grid>
            <Grid
              margin="auto"
              height="90%"
              // justifyContent="center"
              width="90%"
              alignItems="center"
              textAlign="center"
            >
              <Grid height="10%" textAlign="center">
                <Text size="30px" bold>
                  프로젝트주소 소개
                </Text>
              </Grid>
              <Grid height="10%" margin="10px 0">
                <Text size="14px">
                  완료된 프로젝트를 소개해주시겠어요? <br />
                </Text>
              </Grid>
              <Grid display="flex" height="40%" width="90%" margin="auto">
                <Grid
                  display="flex"
                  flexDirection="column"
                  height="80%"
                  width="30%"
                  margin="auto"
                  bg="#eee"
                >
                  <Grid
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text>프론트엔드</Text>
                  </Grid>
                  <Grid
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="#eee"
                  >
                    <Text>백엔드</Text>
                  </Grid>
                </Grid>
                <Grid
                  display="flex"
                  flexDirection="column"
                  height="80%"
                  width="70%"
                  margin="auto"
                  bg="#eee"
                  alignItems="center"
                >
                  <Input
                    height="100%"
                    _onChange={e => {
                      console.log(e.target.value);
                      setFront(e.target.value);
                    }}
                  ></Input>

                  <Input
                    height="100%"
                    _onChange={e => {
                      console.log(e.target.value);
                      setBack(e.target.value);
                    }}
                  ></Input>
                </Grid>
              </Grid>
              <Grid display="flex" height="15%" margin="20px auto" width="90%">
                <Grid>
                  <Button borderRadius="25px" _onClick={submitUrl}>
                    제출하기
                  </Button>
                </Grid>
                <Grid>
                  <Button borderRadius="25px" _onClick={() => {}}>
                    다음에제출
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </ModalWrap>
        )}
        {applyValue === "starterLiked" && (
          <ModalWrap>
            <Grid height="10%" position="relative">
              <Grid
                position="absolute"
                top="0px"
                right="10px"
                width="20px"
                padding="10px"
              >
                <CloseIcon fontSize="large" onClick={modalClose} />
              </Grid>
            </Grid>

            <Grid
              margin="auto"
              height="90%"
              // justifyContent="center"
              width="90%"
              alignItems="center"
              textAlign="center"
            >
              <Grid height="10%" textAlign="center">
                <Text size="30px" bold>
                  프로젝트 마감
                </Text>
              </Grid>

              <Grid height="14%" margin="10px 0">
                <Text size="14px">
                  프로젝트는 어떠셨나요? <br /> 각 팀원들이 어떠셨는지
                  평가해주시면 추천알고리즘이 정교해집니다.
                </Text>
              </Grid>
              {/* 유저평가부분 */}
              <Grid height="50%" width="90%" margin="auto" overflow="auto">
                {passdedMenber.map((user, idx) => (
                  <Grid
                    margin="10px auto"
                    height="100px"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                    width="100%"
                    key={user.userId}
                    {...user}
                  >
                    <Grid margin="auto" width="10%">
                      {passdedMenber[idx].userPropensityType === "LVG" && (
                        <UserImg src="/img/호랑이.png"></UserImg>
                      )}
                      {passdedMenber[idx].userPropensityType === "LVP" && (
                        <UserImg src="/img/늑대.png"></UserImg>
                      )}
                      {passdedMenber[idx].userPropensityType === "LHG" && (
                        <UserImg src="/img/여우.png"></UserImg>
                      )}
                      {passdedMenber[idx].userPropensityType === "LHP" && (
                        <UserImg src="/img/판다.png"></UserImg>
                      )}
                      {passdedMenber[idx].userPropensityType === "FVG" && (
                        <UserImg src="/img/토끼.png"></UserImg>
                      )}
                      {passdedMenber[idx].userPropensityType === "FVP" && (
                        <UserImg src="/img/허스키.png"></UserImg>
                      )}
                      {passdedMenber[idx].userPropensityType === "FHG" && (
                        <UserImg src="/img/고양이.png"></UserImg>
                      )}
                      {passdedMenber[idx].userPropensityType === "FHP" && (
                        <UserImg src="/img/물개.png"></UserImg>
                      )}
                    </Grid>
                    <Grid height="100%" width=" 70%" margin="auto">
                      <Grid display="flex" height="60%" margin="auto">
                        <Grid
                          margin="auto"
                          height="50px"
                          display="flex"
                          justifyContent="space-between"
                        >
                          <Grid height="100%" textAlign="center" width="50%">
                            <Grid
                              borderRadius="20px 0 0 20px"
                              bg="#b29cf4"
                              height="50%"
                              margin="0 0 3px 0 "
                            >
                              <Text color="#fff">닉네임</Text>
                            </Grid>
                            <Grid
                              borderRadius="20px 0 0 20px"
                              bg="#b29cf4"
                              height="50%"
                            >
                              <Text color="#fff">타입</Text>
                            </Grid>
                          </Grid>
                          <Grid
                            margin="auto"
                            height="100%"
                            textAlign="center"
                            width="50%"
                          >
                            <Grid
                              height="50%"
                              borderRadius="0 20px 20px 0"
                              bg="#eee"
                              margin="0 0 3px 0 "
                            >
                              {passdedMenber[idx].nickname}
                            </Grid>
                            <Grid
                              height="50%"
                              borderRadius="0 20px 20px 0"
                              bg="#eee"
                            >
                              {passdedMenber[idx].userPropensityType}
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid margin="auto" height="50px" width="80%">
                          {passdedMenber[idx].userId !== isMe && (
                            <Button
                              common
                              active={likes[idx].active}
                              isValue={passdedMenber[idx].userId}
                              _onClick={e => {
                                console.log(likes[idx].active);
                                toggleLike(e.target.value);
                              }}
                            >
                              좋았어요!
                            </Button>
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>

              <Grid height="10%">
                <Button borderRadius="25px" _onClick={userLiked}>
                  팀원평가
                </Button>
              </Grid>
            </Grid>
          </ModalWrap>
        )}
        {applyValue === "submit" && passdedMenber[0].userId === isMe && (
          <ModalWrap>
            <Grid height="10%" position="relative">
              <Grid
                position="absolute"
                top="0px"
                right="10px"
                width="20px"
                padding="10px"
              >
                <CloseIcon fontSize="large" onClick={modalClose} />
              </Grid>
            </Grid>
            <Grid
              margin="auto"
              height="90%"
              // justifyContent="center"
              width="90%"
              alignItems="center"
              textAlign="center"
            >
              <Grid height="10%" textAlign="center">
                <Text size="30px" bold>
                  프로젝트주소 소개
                </Text>
              </Grid>
              <Grid height="10%" margin="10px 0">
                <Text size="14px">
                  완료된 프로젝트를 소개해주시겠어요? <br />
                </Text>
              </Grid>
              <Grid display="flex" height="40%" width="90%" margin="auto">
                <Grid
                  display="flex"
                  flexDirection="column"
                  height="80%"
                  width="30%"
                  margin="auto"
                  bg="#eee"
                >
                  <Grid
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text>프론트엔드</Text>
                  </Grid>
                  <Grid
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="#eee"
                  >
                    <Text>백엔드</Text>
                  </Grid>
                </Grid>
                <Grid
                  display="flex"
                  flexDirection="column"
                  height="80%"
                  width="70%"
                  margin="auto"
                  bg="#eee"
                  alignItems="center"
                >
                  <Input
                    height="100%"
                    _onChange={e => {
                      console.log(e.target.value);
                      setFront(e.target.value);
                    }}
                  ></Input>

                  <Input
                    height="100%"
                    _onChange={e => {
                      console.log(e.target.value);
                      setBack(e.target.value);
                    }}
                  ></Input>
                </Grid>
              </Grid>
              <Grid display="flex" height="15%" margin="20px auto" width="90%">
                <Grid>
                  <Button borderRadius="25px" _onClick={submitUrl}>
                    제출하기
                  </Button>
                </Grid>
                <Grid>
                  <Button borderRadius="25px" _onClick={() => {}}>
                    다음에제출
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </ModalWrap>
        )}
        {applyValue === "memberLiked" && (
          <ModalWrap>
            <Grid height="10%" position="relative">
              <Grid
                position="absolute"
                top="0px"
                right="10px"
                width="20px"
                padding="10px"
              >
                <CloseIcon fontSize="large" onClick={modalClose} />
              </Grid>
            </Grid>

            <Grid
              margin="auto"
              height="90%"
              // justifyContent="center"
              width="90%"
              alignItems="center"
              textAlign="center"
            >
              <Grid height="10%" textAlign="center">
                <Text size="30px" bold>
                  프로젝트 마감
                </Text>
              </Grid>

              <Grid height="14%" margin="10px 0">
                <Text size="14px">
                  프로젝트는 어떠셨나요? <br /> 각 팀원들이 어떠셨는지
                  평가해주시면 추천알고리즘이 정교해집니다.
                </Text>
              </Grid>
              {/* 유저평가부분 */}
              <Grid height="50%" width="90%" margin="auto" overflow="auto">
                {passdedMenber?.map((user, idx) => (
                  <Grid
                    margin="10px auto"
                    height="100px"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                    width="100%"
                    key={user.userId}
                    {...user}
                  >
                    <Grid margin="auto" width="10%">
                      {passdedMenber[idx].userPropensityType === "LVG" && (
                        <UserImg src="/img/호랑이.png"></UserImg>
                      )}
                      {passdedMenber[idx].userPropensityType === "LVP" && (
                        <UserImg src="/img/늑대.png"></UserImg>
                      )}
                      {passdedMenber[idx].userPropensityType === "LHG" && (
                        <UserImg src="/img/여우.png"></UserImg>
                      )}
                      {passdedMenber[idx].userPropensityType === "LHP" && (
                        <UserImg src="/img/판다.png"></UserImg>
                      )}
                      {passdedMenber[idx].userPropensityType === "FVG" && (
                        <UserImg src="/img/토끼.png"></UserImg>
                      )}
                      {passdedMenber[idx].userPropensityType === "FVP" && (
                        <UserImg src="/img/허스키.png"></UserImg>
                      )}
                      {passdedMenber[idx].userPropensityType === "FHG" && (
                        <UserImg src="/img/고양이.png"></UserImg>
                      )}
                      {passdedMenber[idx].userPropensityType === "FHP" && (
                        <UserImg src="/img/물개.png"></UserImg>
                      )}
                    </Grid>
                    <Grid height="100%" width=" 70%" margin="auto">
                      <Grid display="flex" height="60%" margin="auto">
                        <Grid
                          margin="auto"
                          height="50px"
                          display="flex"
                          justifyContent="space-between"
                        >
                          <Grid height="100%" textAlign="center" width="50%">
                            <Grid
                              borderRadius="20px 0 0 20px"
                              bg="#b29cf4"
                              height="50%"
                              margin="0 0 3px 0 "
                            >
                              <Text color="#fff">닉네임</Text>
                            </Grid>
                            <Grid
                              borderRadius="20px 0 0 20px"
                              bg="#b29cf4"
                              height="50%"
                            >
                              <Text color="#fff">타입</Text>
                            </Grid>
                          </Grid>
                          <Grid
                            margin="auto"
                            height="100%"
                            textAlign="center"
                            width="50%"
                          >
                            <Grid
                              height="50%"
                              borderRadius="0 20px 20px 0"
                              bg="#eee"
                              margin="0 0 3px 0 "
                            >
                              {passdedMenber[idx].nickname}
                            </Grid>
                            <Grid
                              height="50%"
                              borderRadius="0 20px 20px 0"
                              bg="#eee"
                            >
                              {passdedMenber[idx].userPropensityType}
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid margin="auto" height="50px" width="80%">
                          {passdedMenber[idx].userId !== isMe && (
                            <Button
                              common
                              active={likes[idx].active}
                              isValue={passdedMenber[idx].userId}
                              _onClick={e => {
                                e.stopPropagation();
                                console.log(likes[idx].active);
                                toggleLike(e.target.value);
                              }}
                            >
                              좋았어요!
                            </Button>
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>

              <Grid height="10%">
                <Button borderRadius="25px" _onClick={userLiked}>
                  팀원평가
                </Button>
              </Grid>
            </Grid>
          </ModalWrap>
        )}
      </Dialog>
    </>
  );
};

const ModalWrap = styled.div`
  width: 550px;
  height: 700px;
  position: relative;
`;

const UserImg = styled.img`
  object-fit: cover;
  width: 60px;
  border-radius: 12px;
  background-color: #ececec;
  cursor: pointer;
`;

export default React.memo(ApplyUserModal);
