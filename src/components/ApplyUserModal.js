/* eslint-disable */
import React from "react";
import { Grid, Input, Text, Button } from "../elements/Index";
import { Dialog } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { applyCreators } from "../redux/modules/applyProject";
import CloseIcon from "@mui/icons-material/Close";

const ApplyUserModal = props => {
  const dispatch = useDispatch();
  const {
    applyUserModal,
    setApplyUserModal,
    applyValue,
    postId,
    passdedMenber,
  } = props;
  const isMe = useSelector(state => state.user.userId);
  const [comment, setComment] = React.useState();
  const [like, setLike] = React.useState([]);
  const [preLike, setPreLike] = React.useState(false);

  console.log(passdedMenber, isMe);

  const modalClose = () => {
    setApplyUserModal(false);
  };

  const apply = () => {
    console.log(postId);
    const applyComment = {
      comment: comment,
    };
    console.log(applyComment);
    dispatch(applyCreators.applyProjectAPI(postId, applyComment));
  };

  const cancel = () => {
    dispatch(applyCreators.cancelProjectAPI(postId));
  };

  const exitTeam = () => {
    const _postId = {
      postId: postId,
    };
    console.log(_postId);
    dispatch(applyCreators.exitTeamAPI(_postId));
  };

  const userLiked = () => {
    const likeUsers = {
      userIds: like,
    };
    dispatch(applyCreators.starterLikeAPI(postId, likeUsers));
  };

  const toggleLike = () => {
    setPreLike(!preLike);
    if (preLike) {
      like.push(preLike);
    }
    dispatch(postDetailActions.bookMarkAPI(post_id));
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
              width="320px"
              alignItems="center"
            >
              <Grid height="20%" textAlign="center">
                <Text size="30px" bold>
                  지원신청
                </Text>
              </Grid>
              <Grid height="25%" margin="10px 0" textAlign="center">
                <Input
                  border="1px solid #eee"
                  height="100%"
                  backgroundColor="#fff"
                  placeholder="신청자분을 간단히 소개해주세요!"
                  _onChange={e => {
                    console.log(e.target.value);
                    setComment(e.target.value);
                  }}
                ></Input>
              </Grid>
              <Grid height="10%">
                <Button borderRadius="25px" _onClick={apply}>
                  지원신청
                </Button>
              </Grid>
            </Grid>
          </ModalWrap>
        )}{" "}
        {applyValue === "cancel" && (
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
              width="320px"
              alignItems="center"
              textAlign="center"
            >
              <Grid height="20%">
                <Text size="30px" bold>
                  지원취소
                </Text>
              </Grid>
              <Grid height="25%" margin="10px 0">
                <Text size="14px">
                  지원취소를 원하시면 아래 버튼을 클릭해주세요
                </Text>
              </Grid>
              <Grid height="10%">
                <Button borderRadius="25px" _onClick={cancel}>
                  지원취소
                </Button>
              </Grid>
            </Grid>
          </ModalWrap>
        )}
        {applyValue === "teamExit" && (
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
              width="320px"
              alignItems="center"
              textAlign="center"
            >
              <Grid height="20%" textAlign="center">
                <Text size="30px" bold>
                  팀탈퇴
                </Text>
              </Grid>
              <Grid height="25%" margin="10px 0">
                <Text size="14px">
                  정말로 탈퇴하시겠습니까? <br /> 한번 탈퇴하면 다시 신청이
                  불가능할 수 있습니다.
                </Text>
              </Grid>
              <Grid height="10%">
                <Button borderRadius="25px" _onClick={exitTeam}>
                  팀탈퇴
                </Button>
              </Grid>
            </Grid>
          </ModalWrap>
        )}
        {applyValue === "end" && (
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
              <Grid height="50%" bg="#222" width="90%" margin="auto">
                {passdedMenber.map((user, idx) => (
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
                    <Grid height="100%" width="80%" margin="auto">
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
                            <Grid height="50%">
                              {passdedMenber[idx].nickname}
                            </Grid>
                            <Grid height="50%">
                              {passdedMenber[idx].userPropensityType}
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid margin="auto" height="50px" width="60%">
                          {passdedMenber[idx].userId !== isMe && (
                            <Button
                              common
                              isId={passdedMenber[idx]}
                              isValue={passdedMenber[idx].userId}
                              _onClick={e => {
                                console.log(e);
                                toggleLike(e.target.id);
                                userLiked(e.target.value);
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
                <Button borderRadius="25px" _onClick={exitTeam}>
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
  height: 500px;
  position: relative;
`;

const UserImg = styled.img`
  object-fit: cover;
  width: 60px;
  border-radius: 12px;
  background-color: #ececec;
  cursor: pointer;
`;

export default ApplyUserModal;
