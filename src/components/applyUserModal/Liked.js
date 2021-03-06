/* eslint-disable */
import React from "react";
import { Grid, Input, Text, Button } from "../../elements/Index";
import { useDispatch } from "react-redux";
import { applyCreators } from "../../redux/modules/applyProject";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import ImgType from "../../shared/ImgType";

const Liked = (props) => {
  const dispatch = useDispatch();
  const [likes, setLikes] = React.useState();
  const {
    modalClose,
    postId,
    passdedMenber,
    isMe,
    projectStatus,
    statusCheck,
    myPage,
    toggleModal,
  } = props;

  React.useEffect(() => {
    setLikes(
      passdedMenber?.map((stateItem) => {
        let newStateItem = { ...stateItem, active: false };
        return newStateItem;
      })
    );
  }, [passdedMenber, projectStatus]);

  //색상 기능 눌렀는지 안눌렀는지 (버튼색상)
  const toggleLike = (a) => {
    setLikes((state) => {
      return state.map((val) => {
        if (val.userId === Number(a)) {
          return { ...val, active: !val.active };
        }
        return val;
      });
    });
  };
  // console.log(postId);

  //팀원평가
  const userLiked = () => {
    const likeMember = likes.filter((user) => user.active == true);
    const result = likeMember.map((a) => a.userId);
    const likeUsers = {
      userIds: result,
    };

    if (!myPage) {
      dispatch(applyCreators.starterLikeAPI(postId, likeUsers));
      modalClose("종료");
      return;
    }

    dispatch(applyCreators.starterLikeAPI(postId, likeUsers));
    toggleModal();
    props.doSetAssessment();
    return;
  };

  return (
    <>
      {likes && (
        <Grid _onClick={(e) => e.stopPropagation()}>
          <ModalWrap>
            <Grid height="10%" position="relative">
              <Grid
                position="absolute"
                top="0px"
                right="10px"
                width="20px"
                padding="10px"
              >
                <CloseIcon
                  fontSize="large"
                  onClick={(e) => {
                    e.stopPropagation();

                    modalClose();
                    props.checkMydata();
                  }}
                />
              </Grid>
            </Grid>

            <Grid
              margin="auto"
              height="90%"
              width="90%"
              alignItems="center"
              textAlign="center"
            >
              <Grid height="10%" textAlign="center">
                <Text size="30px" bold="bold">
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
                    <Grid margin="auto" width="20%">
                      <ImgType type={passdedMenber[idx].userPropensityType} />
                    </Grid>
                    <Grid height="100%" width=" 70%" margin="auto">
                      <Grid display="flex" height="60%" margin="auto">
                        <Grid
                          margin="auto"
                          height="50px"
                          display="flex"
                          justifyContent="space-between"
                          margin="auto 20px"
                        >
                          <Grid height="100%" textAlign="center" width="60%">
                            <Grid
                              borderRadius="20px 0 0 20px"
                              bg="#172d408f"
                              height="50%"
                              margin="0 0 3px 0 "
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                            >
                              <Text size="12px" color="#fff">
                                닉네임
                              </Text>
                            </Grid>
                            <Grid
                              borderRadius="20px 0 0 20px"
                              bg="#172d408f"
                              height="50%"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                            >
                              <Text size="12px" color="#fff">
                                타입
                              </Text>
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
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                            >
                              <Text size="12px">
                                {passdedMenber[idx].nickname}{" "}
                              </Text>
                            </Grid>
                            <Grid
                              height="50%"
                              borderRadius="0 20px 20px 0"
                              bg="#eee"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                            >
                              <Text size="12px">
                                {passdedMenber[idx].userPropensityType}
                              </Text>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid
                          margin="auto auto auto 1px"
                          height="50px"
                          width="70%"
                        >
                          {passdedMenber[idx].userId !== isMe && (
                            <Button
                              common
                              isActive={likes[idx]?.active}
                              isValue={passdedMenber[idx]?.userId}
                              _onClick={(e) => {
                                e.stopPropagation();
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
                <Button
                  borderRadius="25px"
                  _onClick={(e) => {
                    e.stopPropagation();
                    userLiked();
                  }}
                >
                  팀원평가
                </Button>
              </Grid>
            </Grid>
          </ModalWrap>
        </Grid>
      )}
    </>
  );
};

const ModalWrap = styled.div`
  margin: 30px auto;
  width: 550px;
  height: 100%;
  position: relative;
  @media (max-width: 620px) {
    width: 90%;
  }
`;

export default Liked;
