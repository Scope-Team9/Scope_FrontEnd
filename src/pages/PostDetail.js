// PostDetail.js
// import를 한다.
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { postDetailActions } from "../redux/modules/postdetail";
import { apis } from "../lib/axios";
import { useHistory } from "react-router";
import { postActions } from "../redux/modules/post";
import { Grid, Text, Image, Input, Button } from "../elements/Index";
import Img from "../images/PostAdd.png";
import ApplyStatusModal from "../components/ApplyStatusModal";
import ApplyUserModal from "../components/ApplyUserModal";
import { history } from "../redux/configureStore";

// PostDetail의 함수형 컴포넌트를 만든다.
const PostDetail = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [checkPost, setCheckPost] = React.useState();
  const [applyStatusModal, setApplyStatusModal] = React.useState(false); //신청현황
  const [applyUserModal, setApplyUserModal] = React.useState(false); //지원취소
  const [applyValue, setApplyValue] = React.useState();

  const applyStatusModalOpen = () => {
    setApplyStatusModal(true);
  };

  const applyUserModalOpen = (value) => {
    setApplyValue(value);
    setApplyUserModal(true);
  };
  let post_id = props.match.params.id;

  const userId = useSelector((state) => state.user.userId); //로그인 유저아이디
  const postUserId = checkPost?.data.data.post.userId;
  console.log(userId, postUserId);

  React.useEffect(() => {
    dispatch(postActions.isMainPage(false));
    dispatch(postActions.whatPage("postDetail"));
    const CheckPost = async () => {
      try {
        const result = await apis.detailPost(post_id);
        setCheckPost(result);
      } catch (err) {
        console.log(err);
      }
    };
    CheckPost();
  }, []);
  const passedData = checkPost?.data["data"].post;
  const passdedMenber = checkPost?.data["data"].members[0];

  return (
    <React.Fragment>
      <Grid
        display="flex"
        justifyContent="center"
        width="100%"
        margin="auto"
        border="1px solid #C4C4C4"
        alignItems="center"
      >
        <img src={Img} style={{ width: "800px", height: "850px" }} />
        <Grid margin="auto 20px">
          <Title>Scoope</Title>
          <Title>{passedData?.title}</Title>
          <Grid margin="10px auto">
            <Text>{passedData?.summary}</Text>
          </Grid>

          <Grid>
            <Text>게시자 정보</Text>
            <Grid display="column">
              <Image />
              <Text>{passdedMenber?.nickname}</Text>
            </Grid>
            <Grid margin="10px auto">
              <Text>프로젝트 인원</Text>
              <Grid display="flex">
                <Grid display="column">
                  <Image />
                  <Grid display="column">
                    <Text>{passedData?.recruitmentMember}</Text>
                    <Text>({passdedMenber?.userPropensityType})</Text>
                  </Grid>
                </Grid>
              </Grid>
              {userId === postUserId && (
                <Grid position="relative" width="100%">
                  <Grid
                    position="absolute"
                    right="20px"
                    width="120px"
                    padding="10px"
                  >
                    <Button
                      postion="absolute"
                      width="100%"
                      height="40px"
                      borderRadius="50px"
                      backgroundColor="#42309b"
                      _onClick={applyStatusModalOpen}
                    >
                      신청현황 확인
                    </Button>
                    <ApplyStatusModal
                      applyStatusModal={applyStatusModal}
                      setApplyStatusModal={setApplyStatusModal}
                      postId={post_id}
                    />
                  </Grid>
                </Grid>
              )}

              <Grid display="flex" margin="10px auto">
                <Text margin="auto 10px auto 0px">프로젝트 기간 :</Text>
                <Text>
                  {passedData?.startDate} ~ {passedData?.endDate}
                </Text>
              </Grid>
              <Grid display="flex" margin="10px auto">
                <Text margin="auto 10px auto 0px">기술스택</Text>
                {passedData?.techStack.map((item, index) => {
                  return (
                    <Text margin="auto 5px" key={index}>
                      {item}
                    </Text>
                  );
                })}
              </Grid>
              <Grid display="flex">
                <Text margin="auto 10px auto 0px">프로젝트 상태</Text>
                <Text>{passedData?.projectStatus}</Text>
              </Grid>
              <Grid>
                <Content>{passedData?.contents}</Content>
              </Grid>
              <Grid>
                {userId === postUserId ? (
                  <Grid display="flex" justifyContent="center">
                    <Btn
                      width="120px"
                      height="40px"
                      margin="auto 10px auto auto"
                      backgroundColor="#42309b"
                      borderRadius="50px"
                    >
                      모집완료
                    </Btn>
                    <Btn
                      width="120px"
                      height="40px"
                      margin="auto 10px auto auto"
                      backgroundColor="#42309b"
                      borderRadius="50px"
                      onClick={() => {
                        history.push({ pathname: `/postedit/${post_id}` });
                      }}
                    >
                      포스트수정
                    </Btn>
                  </Grid>
                ) : (
                  <Grid>
                    <Button
                      isValue="apply"
                      _onClick={(e) => {
                        console.log(e);
                        applyUserModalOpen(e.target.value);
                      }}
                      width="120px"
                      height="40px"
                      margin="auto 10px"
                      backgroundColor="#42309b"
                      borderRadius="50px"
                    >
                      지원신청
                    </Button>
                    <ApplyUserModal
                      applyUserModal={applyUserModal}
                      setApplyUserModal={setApplyUserModal}
                      applyValue={applyValue}
                      postId={post_id}
                    />
                    <Button
                      isValue="cancel"
                      _onClick={(e) => {
                        applyUserModalOpen(e.target.value);
                      }}
                      width="120px"
                      height="40px"
                      margin="auto 10px"
                      backgroundColor="#42309b"
                      borderRadius="50px"
                    >
                      지원취소
                    </Button>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

// styled-components를 사용한다.
const Title = styled.h1``;

const Content = styled.h3`
  width: 100%;
  height: 300px;
  padding: 10px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 35px;
  border: none;
  border-radius: 50px;
  color: #fff;
  background-color: #42309b;
  cursor: pointer;
  margin: 10px auto 10px auto;
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default PostDetail;
