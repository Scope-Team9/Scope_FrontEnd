// AddPost.js

// import를 한다.
import React, { useCallback, useMemo } from "react";
import styled, { useTheme } from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import { Grid, Text, Input } from "../elements/Index";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addPostAPI } from "../redux/modules/postadd";
import { postActions as postActions } from "../redux/modules/postadd";

// AddPost의 함수형 컴포넌트를 만든다.
const AddPost = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const animatedComponents = makeAnimated();

  const [title, setTitle] = React.useState();
  const [summary, setSummary] = React.useState();
  const [tectstack, setTectstack] = React.useState();
  const [totalmember, setTotalmember] = React.useState();
  const [projectstatus, setProjectstatus] = React.useState();
  const [startdate, setStartdate] = React.useState(new Date());
  const [enddate, setEnddate] = React.useState(new Date());
  const [contents, setContents] = React.useState();

  const scope_index = () => {
    const card = {
      title: title,
      summary: summary,
      tectstack: tectstack,
      startdate: startdate,
      enddate: enddate,
      totalmember: totalmember,
      projectstatus: projectstatus,
      contents: contents,
    };
    dispatch(postActions.addPostAPI(card));
  };

  // 기술 스택 선택
  const stackSelect = useMemo(
    () => [
      { value: "리액트", label: "react" },
      { value: "자바", label: "java" },
      { value: "자바스크립트", label: "javascript" },
      { value: "파이썬", label: "python" },
      { value: "노드JS", label: "nodejs" },
      { value: "C++", label: "c++" },
      { value: "장고", label: "django" },
      { value: "앵귤러", label: "agular" },
      { value: "뷰", label: "vue" },
      { value: "스프링", label: "spring" },
      { value: "스위프트", label: "swift" },
      { value: "코틀린", label: "kotlin" },
      { value: "타입스크립트", label: "typescript" },
    ],
    []
  );

  const styles = useMemo(
    () => ({
      multiValueRemove: (base, state) => {
        return state.data.isFixed ? { ...base, display: "none" } : base;
      },
    }),
    []
  );

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
      switch (action) {
        case "remove-value":
        case "pop-value":
          if (removedValue.isFixed) {
            setValue(orderOptions([...inputValue, removedValue]));

            return;
          }
          break;
        case "clear":
          setValue(stackSelect.filter((v) => v.isFixed));
          return;
        default:
      }
      setValue(inputValue);
      setTectstack(inputValue);
    },
    [stackSelect, orderOptions]
  );

  // 프로젝트 상태
  const projectStatus = useMemo(
    () => [{ value: "모집중", label: "모집중" }],
    []
  );

  // 프로젝트 인원
  const projectMembers = useMemo(
    () => [
      { value: "2인", label: "2인" },
      { value: "3인", label: "3인" },
      { value: "4인", label: "4인" },
      { value: "5인", label: "5인" },
      { value: "6인", label: "6인" },
    ],
    []
  );

  return (
    <React.Fragment>
      <Grid
        width="550px"
        padding="10px"
        margin="40px auto"
        border="2px solid #8B3FF8"
        borderRadius="30px"
      >
        <Title>게시글 작성페이지</Title>
        <Grid padding="16px">
          <Grid margin="10px auto">
            <Text>제목</Text>
            <Input
              width="500px"
              height="30px"
              padding="10px"
              placeholder="제목을 입력해주세요."
              border="1px solid #E7E1FF"
              _onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></Input>
          </Grid>
          <Grid margin="10px auto">
            <Text>한줄소개</Text>
            <Input
              width="500px"
              height="30px"
              padding="10px"
              placeholder="한줄소개를 입력해주세요."
              border="1px solid #E7E1FF"
              _onChange={(e) => {
                setSummary(e.target.value);
              }}
            ></Input>
          </Grid>
          <Grid margin="10px auto">
            <Text>기술스택 선택</Text>
            <Select
              isMulti
              components={animatedComponents}
              isClearable={value.some((v) => !v.isFixed)}
              styles={styles}
              options={stackSelect}
              value={value}
              onChange={handleChange}
            />
          </Grid>
          <Grid margin="10px auto">
            <Text>기간설정</Text>
            <Grid display="flex">
              <Text margin="auto 20px">프로젝트 시작 일 :</Text>
              <SDatePicker
                dateFormat="yyyy/MM/dd"
                selected={startdate}
                onChange={(date) => setStartdate(date)}
                selectsStart
                startdate={startdate}
                enddate={enddate}
                locale={ko}
                minDate={new Date()}
                placeholderText="프로젝트 시작일 입력"
              />
              <Text margin="auto 20px">프로젝트 종료 일 :</Text>
              <SDatePicker
                dateFormat="yyyy/MM/dd"
                selected={enddate}
                onChange={(date) => setEnddate(date)}
                selectsEnd
                enddate={enddate}
                mindate={startdate}
                locale={ko}
                minDate={new Date()}
              />
            </Grid>
          </Grid>
          <Grid margin="10px auto">
            <Text>프로젝트 총 인원</Text>
            <Select
              options={projectMembers}
              isLoading
              onChange={(e) => {
                setTotalmember(e);
              }}
            ></Select>
          </Grid>
          <Grid margin="10px auto">
            <Text>프로젝트 상태체크</Text>
            <Select
              options={projectStatus}
              isLoading
              onChange={(e) => {
                setProjectstatus(e);
              }}
            ></Select>
          </Grid>
          <Grid>
            <Text>프로젝트 내용적기</Text>
            <Input
              width="500px"
              height="300px"
              padding="10px"
              placeholder="프로젝트 내용을 입력해주세요."
              border="1px solid #E7E1FF"
              _onChange={(e) => {
                setContents(e.target.value);
              }}
            ></Input>
            <Btn
              onClick={() => {
                history.push("/");
                scope_index();
              }}
            >
              프로젝트 생성하기
            </Btn>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

// styled-components를 사용한다.
const Title = styled.h1`
  display: flex;
  justify-content: center;
  color: #8b3ff8;
`;

const SDatePicker = styled(DatePicker)`
  box-sizing: border-box;
  width: 120px;
  height: 35px;
  padding: 8px 20px;
  margin-top: 1.5rem;
  border-radius: 10px;
  border: 1px solid #e7e1ff;
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 35px;
  border: none;
  border-radius: 50px;
  background-color: #e7e1ff;
  margin: 10px auto 10px auto;
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default AddPost;
