import React from "react";
import styled from "styled-components";
import { Grid } from "../../elements/Index";

import { useDispatch } from "react-redux";
import { postAddActions } from "../../redux/modules/postadd";
import { postActions } from "../../redux/modules/post";

import makeAnimated from "react-select/animated";
import TitleWrite from "./rightContents/TitleWrite";
import SummaryWrite from "./rightContents/SummaryWrite";
import StectWrite from "./rightContents/StackWrite";
import DateWrite from "./rightContents/DateWrite";
import TotalMenber from "./rightContents/TotalMenber";
import StatusWrite from "./rightContents/StatusWrite";
import ContentWrite from "./rightContents/ContentWrite";
import GenerateButton from "./rightContents/GenerateButton";

const RightWrite = (props) => {
  React.useEffect(() => {
    dispatch(postActions.isMainPage(false));
    dispatch(postActions.whatPage("addPostPage"));
  }, []);

  const dispatch = useDispatch();
  const animatedComponents = makeAnimated();
  const [title, setTitle] = React.useState("");
  const [summary, setSummary] = React.useState("");
  const [techstack, setTectstack] = React.useState([]);
  const [techStackList, setTechStackList] = React.useState();
  const [startDate, setStartdate] = React.useState(new Date());
  const [endDate, setEnddate] = React.useState(new Date());
  const [totalMember, setTotalmember] = React.useState();
  const [projectStatus, setProjectstatus] = React.useState("");
  const [contents, setContents] = React.useState("");

  // 예외처리
  const submitHandler = () => {
    if (
      title.length > 0 &&
      summary.length > 0 &&
      techstack.length > 0 &&
      totalMember > 0 &&
      projectStatus.length > 0 &&
      contents.length > 0
    ) {
      window.alert("프로젝트가 생성되었습니다.");
      scope_index();
    } else {
      window.alert("값을 다 입력해주세요.");
    }
  };

  const scope_index = () => {
    const card = {
      title: title,
      summary: summary,
      techStackList: techStackList,
      startDate: startDate,
      endDate: endDate,
      totalMember: totalMember,
      projectStatus: projectStatus,
      contents: contents,
    };
    dispatch(postAddActions.addPostAPI(card));
  };

  // Select 공통 스타일
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
      <Grid padding="66px">
        <Title>Scoope</Title>
        <Grid>
          <SecondTitle>게시글 작성하기</SecondTitle>
          <TitleWrite setTitle={setTitle} />
          <SummaryWrite setSummary={setSummary} />
          <StectWrite
            animatedComponents={animatedComponents}
            styles={styles}
            setTectstack={setTectstack}
            techstack={techstack}
            setTechStackList={setTechStackList}
          />
          <DateWrite
            setStartdate={setStartdate}
            startDate={startDate}
            setEnddate={setEnddate}
            endDate={endDate}
          />
          <TotalMenber setTotalmember={setTotalmember} styles={styles} />
          <StatusWrite setProjectstatus={setProjectstatus} styles={styles} />
          <ContentWrite setContents={setContents} />
          <GenerateButton submitHandler={submitHandler} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const Title = styled.div`
  color: black;
  font-size: 36px;
  font-weight: 800;
`;

const SecondTitle = styled.div`
  color: black;
  font-size: 20px;
  font-weight: 500;
  margin: 16px auto;
`;
export default RightWrite;
