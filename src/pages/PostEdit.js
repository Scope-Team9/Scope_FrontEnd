//PostEdit.js
/* eslint-disable */

// import를 한다.
import React from "react";
import styled from "styled-components";
import { Grid } from "../elements/Index";
import { useDispatch } from "react-redux";
import { apis } from "../lib/axios";
import { postDetailActions } from "../redux/modules/postdetail";
import "react-datepicker/dist/react-datepicker.css";
import makeAnimated from "react-select/animated";
import LeftBanner from "../components/postEdit/LeftBanner";
import TitleEdit from "../components/postEdit/rightContentsEdit/TitleEdit";
import StackEdit from "../components/postEdit/rightContentsEdit/StackEdit";
import TotalMemberEdit from "../components/postEdit/rightContentsEdit/TotalMemberEdit";
import StatusEdit from "../components/postEdit/rightContentsEdit/StatusEdit";
import UrlEdit from "../components/postEdit/rightContentsEdit/UrlEdit";
import ContentEdit from "../components/postEdit/rightContentsEdit/ContentEdit";
import DateEdit from "../components/postEdit/rightContentsEdit/DateEdit";
import EditButton from "../components/postEdit/rightContentsEdit/EditButton";
import Swal from "sweetalert2";
import Spinner from "../shared/Spinner";
// PostEdit의 함수형 컴포넌트를 만든다.
const PostEdit = (props) => {
  const dispatch = useDispatch();
  const animatedComponents = makeAnimated();
  const [checkPost, setCheckPost] = React.useState();
  const [postId, setPostId] = React.useState();
  const [title, setTitle] = React.useState("");
  const [summary, setSummary] = React.useState("");
  const [techstack, setTectstack] = React.useState([]);
  const [totalMember, setTotalmember] = React.useState();
  const [recruitmentMember, setRecruitmentMember] = React.useState();
  const [projectStatus, setProjectstatus] = React.useState("");
  const [startDate, setStartdate] = React.useState(new Date());
  const [endDate, setEnddate] = React.useState(new Date());
  const [contents, setContents] = React.useState("");
  const [techStackList, setTest] = React.useState();
  const [loaded, setLoaded] = React.useState(false);
  const [chatUrl, setChatUrl] = React.useState();
  const [loading, setLoading] = React.useState(true);

  // 수정
  let post_id = props.match.params.id;
  const scope_edit = () => {
    let blank_pattern = /^\s+|\s+$/g;
    if (title.replace(blank_pattern, "") == "") {
      Swal.fire("제목을 다시 확인해 주세요!", "", "warning");
      return false;
    }

    const editcard = {
      title: title,
      contents: contents,
      techStackList: techStackList,
      totalMember: totalMember,
      projectStatus: projectStatus,
      startDate: startDate,
      endDate: endDate,
      chatUrl: chatUrl,
    };
    dispatch(postDetailActions.editPostAPI(post_id, editcard));
  };

  const editHandler = () => {
    if (techstack.length === 0) {
      Swal.fire("기술스택을 선택해 주세요!", "", "warning");
      return;
    }
    if (techstack.length <= 4) {
      scope_edit();
    } else {
      window.alert("기술선택은 4개까지 선택 가능합니다.");
    }
  };

  React.useLayoutEffect(() => {
    const CheckPost = async () => {
      try {
        const result = await apis.detailPost(post_id);
        let setValue = result.data.data.post;
        setCheckPost(result);
        setTitle(setValue.title);
        setSummary(setValue.summary);
        setContents(setValue.contents);
        setTectstack(
          setValue.techStack.map((value) => ({ label: value, value }))
        );
        setStartdate(setValue?.startDate);
        setEnddate(setValue.endDate);
        setTotalmember(setValue.totalMember);
        setProjectstatus(setValue.projectStatus);
        setChatUrl(setValue.chatUrl);
        setLoaded(true);
        setLoading(false);
      } catch (err) {
        console.log(err.response);

        setLoaded(false);
      }
    };

    if (loaded === false) CheckPost();
  }, []);

  // Select 공통 스타일
  const styles = {
    control: (base, state) => ({
      ...base,
      boxShadow: state.isFocused ? 0 : 0,
      borderWidth: 2,
      borderRadius: 10,
      marginTop: 4,
      minHeight: 40,
      borderColor: state.isFocused ? "#C4C4C4" : base.borderColor,
      "&:hover": {
        borderColor: state.isFocused ? "#C4C4C4" : base.borderColor,
      },
    }),
  };

  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {checkPost && (
            <Grid
              display="flex"
              justifyContent="center"
              maxWidth="1920px"
              height="100%"
              margin="auto"
              border="1px solid #C4C4C4"
              alignItems="center"
            >
              <LeftBanner />
              <Grid margin="46px 106px 0px" position="relative">
                <TitleMedia>
                  <Title>게시글 수정하기</Title>
                </TitleMedia>

                <Grid margin="40px auto">
                  <TitleEdit title={title} setTitle={setTitle} />
                  <StackEdit
                    setTectstack={setTectstack}
                    techstack={techstack}
                    setTest={setTest}
                    animatedComponents={animatedComponents}
                    styles={styles}
                  />
                  <Grid>
                    <DateEdit
                      startDate={startDate}
                      endDate={endDate}
                      setStartdate={setStartdate}
                      setEnddate={setEnddate}
                    />
                  </Grid>
                  <TotalMemberEdit
                    styles={styles}
                    totalMember={totalMember}
                    setTotalmember={setTotalmember}
                  />
                  <StatusEdit
                    styles={styles}
                    projectStatus={projectStatus}
                    setProjectstatus={setProjectstatus}
                  />
                  <Grid>
                    <UrlEdit chatUrl={chatUrl} setChatUrl={setChatUrl} />
                    <ContentEdit
                      contents={contents}
                      setContents={setContents}
                    />
                    <EditButton editHandler={editHandler} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
        </>
      )}
    </React.Fragment>
  );
};

// styled-components를 사용한다.
const Title = styled.div`
  color: black;
  font-size: 32px;
  font-weight: 800;
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 35px;
  border: 1px solid #bbb4d9;
  border-radius: 50px;
  color: #bbb4d9;
  background: white;
  margin: auto;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #bbb4d9;
    border: 1px solid;
    transition-duration: 1s;
  }
`;

const TitleMedia = styled.div`
  @media screen and (max-width: 1000px) {
    width: 350px;
    margin: auto;
    text-align: center;
  }
`;

const ContainerMedia = styled.div`
  @media screen and (max-width: 1000px) {
    width: 600px;
    margin: auto;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default PostEdit;
