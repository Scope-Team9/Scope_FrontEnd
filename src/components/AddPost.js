// AddPost.js

// import를 한다.
/* eslint-disable */
import React, { useCallback, useEffect, useMemo } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import { Grid, Text, Input } from "../elements/Index";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addPostAPI } from "../redux/modules/postadd";
import { editPostAPI } from "../redux/modules/postdetail";
import { postActions as postActions } from "../redux/modules/postadd";

// AddPost의 함수형 컴포넌트를 만든다.
// AddPost 안에 다뤄지는  특정 값(state) ex.title 값이 변화하였을 때, AddPost자체가 리랜더링 된다.
const AddPost = (props) => {
  const history = useHistory();
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
    dispatch(postActions.addPostAPI(card));
  };

  // 게시글 수정
  const editPost = () => {
    if (postId) {
      const edited_post = {
        title: title,
        summary: summary,
        techStackList: techStackList,
        startDate: startDate,
        endDate: endDate,
        totalMember: totalMember,
        projectStatus: projectStatus,
        contents: contents,
      };
      dispatch(postActions.editPostAPI(edited_post));
    }
  };

  console.log("제목이얌", title);

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

  // 게시글 작성(스택선택)
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

  const formatTech = () => {
    let tamarray = [];
    let index;
    for (index = 0; index < techstack.length; index++) {
      tamarray.push(techstack[index]["label"]);
    }
    console.log(tamarray);
    setTest(tamarray);
  };

  useEffect(() => {
    formatTech();
  }, [techstack]);

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
              onChange={handleChange}
            />
          </Grid>
          <Grid margin="10px auto">
            <Text>기간설정</Text>
            <Grid display="flex">
              <Text margin="auto 20px">프로젝트 시작 일 :</Text>
              <SDatePicker
                dateFormat="yyyy/MM/dd"
                selected={startDate}
                onChange={(date) => setStartdate(date)}
                selectsStart
                startdate={startDate}
                enddate={endDate}
                locale={ko}
                minDate={new Date()}
                placeholderText="프로젝트 시작일 입력"
              />
              <Text margin="auto 20px">프로젝트 종료 일 :</Text>
              <SDatePicker
                dateFormat="yyyy/MM/dd"
                selected={endDate}
                onChange={(date) => setEnddate(date)}
                selectsEnd
                enddate={endDate}
                mindate={startDate}
                locale={ko}
                minDate={new Date("")}
              />
            </Grid>
          </Grid>
          <Grid margin="10px auto">
            <Text>프로젝트 총 인원</Text>
            <Select
              options={projectMembers}
              isLoading
              onChange={(e) => {
                let b;
                b = e["label"];
                setTotalmember(b);
                console.log(b);
              }}
            ></Select>
          </Grid>
          <Grid margin="10px auto">
            <Text>프로젝트 상태체크</Text>
            <Select
              options={projectstatus}
              isLoading
              onChange={(e) => {
                let a;
                a = e["label"];
                console.log(a);

                // let a = [];
                // a = e["label"];
                // console.log(a);
                setProjectstatus(a);
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
