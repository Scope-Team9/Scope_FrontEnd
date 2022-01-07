//PostEdit.js
/* eslint-disable */

// import를 한다
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

// PostEdit의 함수형 컴포넌트를 만든다
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
      borderWidth: 1,
      borderRadius: 10,
      fontSize: 14,
      marginTop: 4,
      minHeight: 20,
      boxShadow: "0px 0px 10px #ddd",
      borderColor: state.isFocused ? "#C4C4C4" : base.borderColor,
      "&:hover": {
        borderColor: state.isFocused ? "#C4C4C4" : base.borderColor,
      },
    }),
  };

  return (
    <React.Fragment>
      <EditMedia>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {checkPost && (
              <Grid
                display="flex"
                justifyContent="center"
                border="3px solid #C4C4C4"
                borderRadius="30px"
                maxWidth="1400px"
                margin="40px auto 0px"
                boxShadow="0px 0px 10px #554475"
              >
                <LeftBanner />
                <Grid margin="18px 80px 0px">
                  <TitleMedia>
                    <Title>게시글 수정하기</Title>
                  </TitleMedia>

                  <Grid margin="40px auto 0px">
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
      </EditMedia>
    </React.Fragment>
  );
};

const EditMedia = styled.div`
  margin-bottom: 60px;
  @media screen and (max-width: 500px) {
    width: 98%;
  }
`;

// styled-components를 사용한다
const Title = styled.div`
  color: #4c4759;
  font-size: 32px;
  font-weight: 800;
  margin: 40px auto;
  text-decoration: solid underline #8777b685 4px;
  text-underline-position: under;
`;

const TitleMedia = styled.div`
  @media screen and (max-width: 1000px) {
    width: 350px;
    margin: auto;
    text-align: center;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다
export default PostEdit;
