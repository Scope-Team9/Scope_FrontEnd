/* eslint-disable */
// AddPost.js

// import를 한다.
import React, { useCallback, useEffect, useMemo } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import { Grid, Text, Input } from "../elements/Index";
import Img from "../images/postadd.png";
import { useDispatch } from "react-redux";
import { postAddActions } from "../redux/modules/postadd";
import { postActions } from "../redux/modules/post";

// AddPost의 함수형 컴포넌트를 만든다.
// AddPost 안에 다뤄지는  특정 값(state) ex.title 값이 변화하였을 때, AddPost자체가 리랜더링 된다.
const AddPost = (props) => {
  const dispatch = useDispatch();
  const animatedComponents = makeAnimated();

  const [title, setTitle] = React.useState();
  const [summary, setSummary] = React.useState();
  const [techstack, setTectstack] = React.useState([]);
  const [totalMember, setTotalmember] = React.useState();
  const [projectStatus, setProjectstatus] = React.useState();
  const [startDate, setStartdate] = React.useState(new Date());
  const [endDate, setEnddate] = React.useState(new Date());
  const [contents, setContents] = React.useState();
  const [techStackList, setTest] = React.useState();

  React.useEffect(() => {
    dispatch(postActions.isMainPage(false));
    dispatch(postActions.whatPage("addPostPage"));
  }, []);

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
    console.log("카드들", card);
    dispatch(postAddActions.addPostAPI(card));
  };

  // 기술 스택 선택
  const stackSelect = useMemo(
    () => [
      // object형태(value는 키값, ""는 value 값), object의 값을 가져오기 위해서는 키값을 알아야한다.
      { value: "React", label: "React" },
      { value: "Java", label: "Java" },
      { value: "Javascript", label: "Javascript" },
      { value: "Python", label: "Python" },
      { value: "Nodejs", label: "Nodejs" },
      { value: "Flask", label: "Flask" },
      { value: "cpp", label: "cpp" },
      { value: "Django", label: "Django" },
      { value: "php", label: "php" },
      { value: "Vue", label: "Vue" },
      { value: "Spring", label: "Spring" },
      { value: "Swift", label: "Swift" },
      { value: "Kotlin", label: "Kotlin" },
      { value: "Typescript", label: "Typescript" },
    ],
    []
  );

  // 게시글 작성(프로젝트 상태)
  const projectstatus = useMemo(
    () => [{ value: "모집중", label: "모집중" }],
    []
  );

  // 게시글 작성(프로젝트 인원)
  const projectMembers = useMemo(
    () => [
      { value: 2, label: 2 },
      { value: 3, label: 3 },
      { value: 4, label: 4 },
      { value: 5, label: 5 },
      { value: 6, label: 6 },
    ],
    []
  );

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

  const orderByLabel = useCallback(
    (a, b) => a.label.localeCompare(b.label),
    []
  );

  const orderOptions = useCallback(
    (values) =>
      values
        .filter((v) => v.isFixed)
        .sort(orderByLabel)
        .concat(values.filter((v) => !v.isFixed).sort(orderByLabel)),
    [orderByLabel]
  );

  const [value, setValue] = React.useState(orderOptions(stackSelect));

  const handleChange = useCallback(
    (inputValue, { action, removedValue }) => {
      setValue(inputValue);
      setTectstack(inputValue);
    },
    [stackSelect, orderOptions]
  );

  const formatTech = () => {
    let tamarray = [];
    let index;
    for (index = 0; index < techstack.length; index++) {
      tamarray.push(techstack[index]["label"]);
    }
    setTest(tamarray);
  };

  useEffect(() => {
    formatTech();
  }, [techstack]);

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
        {/* 이미지 하나 */}
        <SideBarImg src={Img} style={{ maxWidth: "100%", height: "100%" }} />
        {/* 텍스트 하나 */}
        <Grid padding="0px 16px">
          {/* Scoope */}
          <Title>Scoope</Title>
          <Grid>
            {/* 게시글 작성하기 */}
            <Grid>
              <Text color="#C4C4C4" size="20px" bold>
                게시글 작성하기
              </Text>
            </Grid>
            {/* 제목 */}
            <Grid margin="10px auto">
              <Text margin="auto 100px auto auto">제목</Text>
              <Input
                width="100%"
                maxLength="35"
                height="40px"
                padding="10px"
                border="1px solid #C4C4C4"
                placeholder="제목을 입력해주세요."
                inputFocusOutline="none"
                fontSize="16px"
                _onChange={(e) => {
                  setTitle(e.target.value);
                }}
              ></Input>
            </Grid>
            {/* 한줄소개 */}
            <Grid margin="10px auto">
              <Text margin="auto 100px auto auto">한줄소개</Text>
              <Input
                width="100%"
                maxLength="60"
                height="40px"
                padding="10px"
                placeholder="프로젝트를 한줄소개를 소개해주세요."
                border="1px solid #C4C4C4"
                inputFocusOutline="none"
                fontSize="16px"
                _onChange={(e) => {
                  setSummary(e.target.value);
                }}
              ></Input>
            </Grid>
            {/* 기술스택 선택 */}
            <Grid margin="10px auto">
              <Text>기술스택 선택</Text>
              <Select
                isMulti
                components={animatedComponents}
                isClearable={value.some((v) => !v.isFixed)}
                styles={styles}
                options={stackSelect}
                onChange={handleChange}
                placeholder={<div>기술 스택을 선택해주세요.</div>}
              />
            </Grid>
            {/* 기간설정 */}
            <Grid margin="10px auto">
              <Grid>
                <Text>기간설정</Text>
              </Grid>
              <Grid display="colum">
                <Text>프로젝트 시작 일 :</Text>
                <SDatePicker
                  dateFormat="yyyy/MM/dd"
                  selected={startDate}
                  onChange={(date) => setStartdate(date)}
                  locale={ko}
                  minDate={new Date()}
                />
              </Grid>
              <Grid>
                <Text>프로젝트 종료 일 :</Text>
                <SDatePicker
                  dateFormat="yyyy/MM/dd"
                  selected={endDate}
                  onChange={(date) => setEnddate(date)}
                  locale={ko}
                  minDate={new Date()}
                />
              </Grid>
            </Grid>
            {/* 프로젝트 총 인원 */}
            <Grid margin="10px auto">
              <Text>프로젝트 총 인원</Text>
              <Select
                options={projectMembers}
                isLoading
                styles={styles}
                onChange={(e) => {
                  let b;
                  b = e["label"];
                  setTotalmember(b);
                }}
                placeholder={<div>총인원을 선택해주세요.</div>}
              ></Select>
            </Grid>
            {/* 프로젝트 상태체크 */}
            <Grid margin="10px auto">
              <Text>프로젝트 상태체크</Text>
              <Select
                options={projectstatus}
                isLoading
                styles={styles}
                onChange={(e) => {
                  let a;
                  a = e["label"];
                  setProjectstatus(a);
                }}
                placeholder={<div>상태를 설정해주세요.</div>}
              ></Select>
            </Grid>
            {/* 프로젝트 내용적기 */}
            <Grid>
              <Text>프로젝트 내용적기</Text>
              <Input
                width="100%"
                height="200px"
                padding="10px"
                border="1px solid #C4C4C4"
                inputFocusOutline="none"
                fontSize="16px"
                _onChange={(e) => {
                  setContents(e.target.value);
                }}
                placeholder="프로젝트 내용을 입력해주세요."
              ></Input>
            </Grid>
            {/* 버튼 */}
            <Grid>
              <Btn
                onClick={() => {
                  scope_index();
                }}
              >
                프로젝트 생성하기
              </Btn>
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
  border: none;
  border-radius: 50px;
  color: #fff;
  background: linear-gradient(
    0deg,
    rgba(83, 201, 253, 1) 0%,
    rgba(182, 161, 240, 1) 69%,
    rgba(231, 170, 250, 1) 100%,
    rgba(240, 247, 254, 1) 100%
  );
  margin: 10px auto 10px auto;
  cursor: pointer;
`;

const SideBarImg = styled.img`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default AddPost;
