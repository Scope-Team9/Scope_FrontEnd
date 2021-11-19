/* eslint-disable */
//PostEdit.js

// import를 한다.
import React, { useCallback, useMemo, useEffect } from "react";
import styled from "styled-components";
import { Grid, Text, Image, Button, Input } from "../elements/Index";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { apis } from "../lib/axios";
import { postDetailActions } from "../redux/modules/postdetail";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import LeftBanner from "../components/postEdit/LeftBanner";
import TitleEdit from "../components/postEdit/rightContentsEdit/TitleEdit";
import SummaryEdit from "../components/postEdit/rightContentsEdit/SummaryEdit";
import StackEdit from "../components/postEdit/rightContentsEdit/StackEdit";
import totalMemberEdit from "../components/postEdit/rightContentsEdit/TotalMenberEdit";
import StatusEdit from "../components/postEdit/rightContentsEdit/StatusEdit";
import ContentEdit from "../components/postEdit/rightContentsEdit/ContentEdit";

// PostEdit의 함수형 컴포넌트를 만든다.
const PostEdit = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
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

  // 수정
  let post_id = props.match.params.id;
  const scope_edit = () => {
    const editcard = {
      title: title,
      summary: summary,
      contents: contents,
      techStackList: techStackList,
      totalMember: totalMember.value,
      projectStatus: projectStatus.label,
      startDate: startDate,
      endDate: endDate,
    };
    dispatch(postDetailActions.editPostAPI(post_id, editcard));
  };

  const editHandler = () => {
    if (techstack.length <= 3) {
      scope_edit();
    } else {
      window.alert("기술선택을 4개 이하로 입력해주세요.");
    }
  };

  React.useEffect(() => {
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
        setLoaded(true);
      } catch (err) {
        console.log(err.response);

        setLoaded(false);
      }
    };

    if (loaded === false) CheckPost();
  }, []);

  // 게시글 작성(스택선택)
  const styles = {
    control: (base, state) => ({
      ...base,
      boxShadow: state.isFocused ? 0 : 0,
      borderWidth: 2,
      minHeight: 40,
      borderColor: state.isFocused ? "#C4C4C4" : base.borderColor,
      "&:hover": {
        borderColor: state.isFocused ? "#C4C4C4" : base.borderColor,
      },
    }),
  };

  return (
    <React.Fragment>
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
        <Grid padding="0px 16px">
          <Title>Scoope</Title>
          <Grid>
            <Text color="#C4C4C4" size="20px" bold>
              게시글 수정하기
            </Text>
          </Grid>
          <Grid>
            <TitleEdit title={title} setTitle={setTitle} />
            <SummaryEdit summary={summary} setSummary={setSummary} />
            <StackEdit
              setTectstack={setTectstack}
              techstack={techstack}
              setTest={setTest}
              animatedComponents={animatedComponents}
              styles={styles}
            />
            <Grid margin="10px auto">
              <Grid>
                <Text>기간설정</Text>
              </Grid>
              <Grid display="colum">
                <Text>프로젝트 시작 일 :</Text>
                <SDatePicker
                  selected={new Date(startDate)}
                  onChange={(date) => setStartdate(date)}
                  startdate={startDate}
                  selectsStart
                  locale={ko}
                  minDate={new Date()}
                  placeholderText="프로젝트 시작일 입력"
                />
                <Text>프로젝트 종료 일 :</Text>
                <SDatePicker
                  selected={new Date(endDate)}
                  onChange={(date) => setEnddate(date)}
                  startdate={startDate}
                  enddate={endDate}
                  selectsEnd
                  locale={ko}
                  minDate={new Date()}
                  placeholderText="프로젝트 종료일 입력"
                />
              </Grid>
            </Grid>
            <totalMemberEdit
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
              <ContentEdit contents={contents} setContents={setContents} />
              <Grid display="flex" padding="16px">
                <Btn
                  onClick={() => {
                    editHandler();
                    // scope_edit();
                  }}
                >
                  포스트수정 완료
                </Btn>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

// styled-components를 사용한다.
const Title = styled.h1`
  margin: "auto 20px";
  color: #c4c4c4;
  font-size: 40px;
`;

const SDatePicker = styled(DatePicker)`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding: 8px 20px;
  margin-top: 1.5rem;
  outline: none;
  border-radius: 4px;
  border: 1px solid #c4c4c4;
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 35px;
  border: 1px solid #b29cf4;
  border-radius: 50px;
  color: #fff;
  background: white;
  color: #b29cf4;
  margin: 10px auto 10px auto;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #b29cf4;
    border: 1px solid;
    transition-duration: 1s;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default PostEdit;
