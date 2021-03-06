// PostDetail.js
/* eslint-disable */
// import를 한다.
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { apis } from "../lib/axios";
import { postActions } from "../redux/modules/post";
import { Grid, Text } from "../elements/Index";
import Swal from "sweetalert2";

import ApplyStatusModal from "../components/ApplyStatusModal";
import LeftBanner from "../components/postDetail/leftBanner";
import TitleDetail from "../components/postDetail/rightContents/TitleDetail";
import ExileUserModal from "../components/modal/ExileUserModal";
import ApplicantDetail from "../components/postDetail/rightContents/ApplicantDetail";
import StackDetail from "../components/postDetail/rightContents/StackDetail";
import DateDetail from "../components/postDetail/rightContents/DateDetail";
import StatusDetail from "../components/postDetail/rightContents/StatusDetail";
import UrlDetail from "../components/postDetail/rightContents/UrlDetail";
import ContentDetail from "../components/postDetail/rightContents/ContentDetail";
import BookMark from "../components/postDetail/rightContents/BookMark";
import ApplicantButton from "../components/postDetail/rightContents/ApplicantButton";
import PosterButton from "../components/postDetail/rightContents/PosterButton";
import TotalMemberDetail from "../components/postDetail/rightContents/TotalMemberDetail";
import Spinner from "../shared/Spinner";

// PostDetail의 함수형 컴포넌트를 만든다
const PostDetail = (props) => {
  const dispatch = useDispatch();
  const [checkPost, setCheckPost] = React.useState();
  const [bookmark, setBookmark] = React.useState(false);
  const [applyStatusModal, setApplyStatusModal] = React.useState(false); // 신청현황
  const [applyUserModal, setApplyUserModal] = React.useState(false); // 지원취소/팀탈퇴/프로젝트마감
  const [exileStatusModal, setExileStatusModal] = React.useState(false); // 강퇴
  const [recruitmentFinish, setRecruitmentFinish] = React.useState(); // 모집완료 체크 for리렌더링
  const [projectStatus, setProjectStatus] = React.useState();
  const [applyValue, setApplyValue] = React.useState();
  const [isme, setIsme] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const applyStatusModalOpen = () => {
    setApplyStatusModal(true);
  };

  const exileStatusModalOpen = () => {
    setExileStatusModal(true);
  };

  const applyUserModalOpen = (value) => {
    setApplyValue(value);
    setApplyUserModal(true);
  };

  const statusCheck = (value) => {
    setProjectStatus(value);
  };

  const goFrontPage = () => {
    {
      passedData?.frontUrl !== null && window.open(passedData?.frontUrl);
    }
  };

  const goBackPage = () => {
    {
      passedData?.frontUrl !== null && window.open(passedData?.backUrl);
    }
  };

  // 상태변경
  const edit_status = (data) => {
    const editstatus = {
      projectStatus: data,
    };
    const statusDoing = async () => {
      try {
        const result = await apis.statusPost(post_id, editstatus);
        setRecruitmentFinish(!recruitmentFinish);
        Swal.fire("모집 완료 되었습니다!", "", "success");
      } catch (err) {
        console.log(err);
      }
    };
    statusDoing();
  };

  let post_id = props.match.params.id;
  const userId = useSelector((state) => state.user.userId); //로그인 유저아이디
  const postUserId = checkPost?.data.data.post.userId;
  const passedData = checkPost?.data["data"].post;
  const passedUserStatus = checkPost?.data["data"].userStatus;
  const passdedMenber = checkPost?.data["data"].members;

  React.useEffect(() => {
    dispatch(postActions.isMainPage(false));
    dispatch(postActions.whatPage("postDetail"));
    const CheckPost = async () => {
      try {
        const result = await apis.detailPost(post_id);
        setCheckPost(result);
        setIsme(result.data.data.userStatus);
        setProjectStatus(result.data.data.post.projectStatus);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    CheckPost();
  }, [
    bookmark,
    applyStatusModal,
    recruitmentFinish,
    exileStatusModal,
    applyUserModal,
    projectStatus,
    applyValue,
  ]);

  //북마크 토글
  const ToggleBookMark = () => {
    const bookMark = async () => {
      try {
        const result = await apis.bookMarkChecked(post_id);
        setBookmark(!bookmark);
      } catch (err) {
        Swal.fire("로그인이 필요합니다!", "", "warning");
      }
    };
    bookMark();
  };

  return (
    <React.Fragment>
      <DetailMedia>
        {loading ? (
          <Spinner />
        ) : (
          <Grid
            display="flex"
            justifyContent="center"
            maxWidth="1400px"
            height="100%"
            border="5px solid #C4C4C4"
            margin="40px auto"
            boxShadow="0px 0px 10px #172D40"
            borderRadius="30px"
          >
            <LeftBanner />

            <Grid margin="46px 85px 0px" position="relative">
              <ContainerMedia>
                <BookMark
                  userId={userId}
                  postUserId={postUserId}
                  ToggleBookMark={ToggleBookMark}
                  passedData={passedData}
                />
                <TitleDetail passedData={passedData} />
                <Grid margin="10px auto">
                  <Grid display="flex">
                    <ApplicantDetail passdedMenber={passdedMenber} />
                  </Grid>
                  <Grid margin="10px auto">
                    {userId === postUserId &&
                      passedData?.projectStatus === "모집중" && (
                        <Grid position="relative" width="100%">
                          <Grid
                            position="absolute"
                            right="20px"
                            width="120px"
                            padding="10px"
                          >
                            <ApplyStatusModal
                              applyStatusModal={applyStatusModal}
                              setApplyStatusModal={setApplyStatusModal}
                              postId={post_id}
                            />
                            <ExileUserModal
                              applyStatusModal={exileStatusModal}
                              setApplyStatusModal={setExileStatusModal}
                              postId={post_id}
                              postUserId={postUserId}
                            ></ExileUserModal>
                          </Grid>
                        </Grid>
                      )}
                    <Grid>
                      <FlexMedia>
                        <DateDetail passedData={passedData} />
                        <StackDetail passedData={passedData} />
                      </FlexMedia>
                    </Grid>
                    <Grid>
                      <Grid display="flex">
                        <Grid>
                          <TotalMemberDetail passedData={passedData} />
                        </Grid>
                        <Grid>
                          <FlexMedia>
                            {passedData?.projectStatus === "종료" &&
                              passedData?.frontUrl !== "null" && (
                                <Grid
                                  display="flex"
                                  width="200px"
                                  margin="0px 0px 5px"
                                  alignItems="center"
                                >
                                  <Grid>
                                    <Text>Frontend</Text>
                                  </Grid>
                                  <Grid>
                                    <UrlButton
                                      onClick={() => {
                                        goFrontPage();
                                      }}
                                    >
                                      프론트URL
                                    </UrlButton>
                                  </Grid>
                                </Grid>
                              )}
                            {passedData?.projectStatus === "종료" &&
                              passedData?.backUrl !== "null" && (
                                <Grid
                                  display="flex"
                                  width="200px"
                                  alignItems="center"
                                >
                                  <Grid>
                                    <Text>Backend</Text>
                                  </Grid>
                                  <Grid>
                                    <Grid>
                                      <UrlButton
                                        onClick={() => {
                                          goBackPage();
                                        }}
                                      >
                                        백엔드URL
                                      </UrlButton>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              )}
                          </FlexMedia>
                          {userId === postUserId &&
                            passedData?.projectStatus === "모집중" && (
                              <Grid
                                display="flex"
                                width="180px"
                                margin="auto 0 auto auto"
                                justifyContent="flex-end"
                              >
                                <ButtonMedia>
                                  <Btn common onClick={applyStatusModalOpen}>
                                    신청 현황
                                  </Btn>
                                  <Btn common onClick={exileStatusModalOpen}>
                                    팀원 강퇴
                                  </Btn>
                                </ButtonMedia>
                              </Grid>
                            )}
                        </Grid>
                      </Grid>
                      <StatusDetail passedData={passedData} />
                      <UrlDetail passedData={passedData} />
                      <ContentDetail passedData={passedData} />
                    </Grid>

                    <Grid>
                      {userId === postUserId ? (
                        <PosterButton
                          passedData={passedData}
                          isme={isme}
                          applyUserModalOpen={applyUserModalOpen}
                          applyUserModal={applyUserModal}
                          setApplyUserModal={setApplyUserModal}
                          applyValue={applyValue}
                          post_id={post_id}
                          passdedMenber={passdedMenber}
                          passedUserStatus={passedUserStatus}
                          statusCheck={statusCheck}
                          edit_status={edit_status}
                        />
                      ) : (
                        <Grid textAlign="center">
                          <ApplicantButton
                            passedData={passedData}
                            isme={isme}
                            applyUserModalOpen={applyUserModalOpen}
                            applyUserModal={applyUserModal}
                            setApplyUserModal={setApplyUserModal}
                            applyValue={applyValue}
                            post_id={post_id}
                            passdedMenber={passdedMenber}
                            passedUserStatus={passedUserStatus}
                            statusCheck={statusCheck}
                          />
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </ContainerMedia>
            </Grid>
          </Grid>
        )}
      </DetailMedia>
    </React.Fragment>
  );
};
const DetailMedia = styled.div`
  @media screen and (max-width: 500px) {
    width: 97%;
  }
`;

const ContainerMedia = styled.div`
  @media screen and (max-width: 500px) {
    padding: 10px;
  }
`;

const Btn = styled.button`
  width: 100px;
  height: 30px;
  border: 1px solid #172d40;
  border-radius: 50px;
  cursor: pointer;
  color: #172d40;
  background-color: #fff;
  margin-left: 2px;
  &:hover {
    color: white;
    background-color: #172d40;
    transform: translate();
    transition: 0.3s ease-out;
  }
`;

const ButtonMedia = styled.p`
  display: flex;
  margin: auto;
  width: 90%;
  @media screen and (max-width: 1500px) {
    display: flex;
    width: 90%;
    margin: auto;
  }
`;

const FlexMedia = styled.div`
  display: flex;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    font-size: 2px;
  }
`;

const UrlButton = styled.button`
  width: 100px;
  height: 23px;
  font-size: 15px;
  margin: auto 10px;
  padding: 0 0 2px 0;
  border: 1px solid #172d40;
  border-radius: 50px;
  align-items: center;
  text-align: center;
  color: white;
  background-color: #172d40;
  cursor: pointer;
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default PostDetail;
