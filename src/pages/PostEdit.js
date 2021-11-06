/* eslint-disable */
// PostEdit.js

// import를 한다.
import React, { useCallback, useMemo, useEffect } from "react";
import styled from "styled-components";
import { Grid, Text, Image, Button, Input } from "../elements/Index";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { apis } from "../lib/axios";
import { postDetailActions } from "../redux/modules/postdetail";
import { editPostAPI } from "../redux/modules/postdetail";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import Select from "react-select";
import makeAnimated from "react-select/animated";

// PostEdit의 함수형 컴포넌트를 만든다.
const PostEdit = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const animatedComponents = makeAnimated();
  const [checkPost, setCheckPost] = React.useState();
  const [postId, setPostId] = React.useState();
  const [title, setTitle] = React.useState();
  const [summary, setSummary] = React.useState();
  const [techstack, setTectstack] = React.useState([]);
  const [totalMember, setTotalmember] = React.useState();
  const [recruitmentMember, setRecruitmentMember] = React.useState();
  const [projectStatus, setProjectstatus] = React.useState();
  const [startDate, setStartdate] = React.useState(new Date());
  const [endDate, setEnddate] = React.useState(new Date());
  const [contents, setContents] = React.useState();
  const [techStack, setTest] = React.useState();

  const scope_edit = () => {
    const editcard = {
      postId: postId,
      title: title,
      summary: summary,
      techStack: techStack,
      totalMember: totalMember,
      recruitmentMember: recruitmentMember,
      projectStatus: projectStatus,
      startDate: startDate,
      endDate: endDate,
      contents: contents,
    };
    console.log("카드들", editcard);
    dispatch(postDetailActions.editPostAPI(editcard));
  };

  let post_id = props.match.params.id;
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
        setTotalmember(
          setValue.totalMember.map((value) => ({ label: value, value }))
        );
        console.log("시간", setValue.startDate);
        // setStartdate(setValue.startDate);
        // setEnddate(setValue.endDate);
      } catch (err) {
        console.log(err);
      }
    };

    CheckPost();
  }, []);
  console.log("갓준일멘토님", techstack);

  // 기술 스택 선택
  const stackSelect = [
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
  ];

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
    setTest(tamarray);
  };

  useEffect(() => {
    formatTech();
  }, [techstack]);

  // 게시글 작성(프로젝트 상태)
  const projectstatus = useMemo(
    () => [
      { value: "모집중", label: "모집중" },
      { value: "진행중", label: "진행중" },
      { value: "마감중", label: "마감중" },
    ],
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
        <Title>게시글 수정페이지</Title>
        <Grid padding="16px">
          <Grid margin="10px auto">
            <Text>제목</Text>
            <Input
              type="text"
              editValue={title}
              _onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Grid>
          <Grid margin="10px auto">
            <Text>한줄소개</Text>
            <Input
              type="text"
              editValue={summary}
              _onChange={(e) => {
                setSummary(e.target.value);
              }}
            />
          </Grid>
          <Grid margin="10px auto">
            <Text>기술스택 선택</Text>
            {/* 1차방안 */}
            <Select
              isMulti
              components={animatedComponents}
              isClearable={value.some((v) => !v.isFixed)}
              styles={styles}
              value={techstack}
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
                value={startDate}
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
                value={endDate}
                startdate={startDate}
                enddate={endDate}
                locale={ko}
                minDate={new Date()}
                placeholderText="프로젝트 종료일 입력"
              />
            </Grid>
          </Grid>
          <Grid margin="10px auto">
            <Text>프로젝트 총 인원</Text>
            <Select
              options={projectMembers}
              isLoading
              value={totalMember}
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
                setProjectstatus(a);
              }}
            ></Select>
          </Grid>
          <Grid>
            <Text>프로젝트 내용적기</Text>
            <Input
              type="text"
              editValue={contents}
              _onChange={(e) => {
                setContents();
              }}
            />
            <Grid padding="16px">
              <Button width="100px" height="30px" margin="auto 10px">
                모집완료
              </Button>
              <Button
                width="100px"
                height="30px"
                margin="auto 10px"
                _onClick={() => {
                  // history.push("/");
                  scope_edit();
                }}
              >
                포스트수정 완료
              </Button>
              <Button width="100px" height="30px" margin="auto 10px">
                포스트삭제
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

// styled-components를 사용한다.
const Title = styled.h1``;

const SDatePicker = styled(DatePicker)`
  box-sizing: border-box;
  width: 120px;
  height: 35px;
  padding: 8px 20px;
  margin-top: 1.5rem;
  border-radius: 10px;
  border: 1px solid #e7e1ff;
`;

const Content = styled.h3`
  width: 500px;
  height: 300px;
  padding: 10px;
  border: 1px solid orange;
  border-radius: 5px;
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default PostEdit;
