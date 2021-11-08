/* eslint-disable */
//PostEdit.js

// import를 한다.
import React, { useCallback, useMemo, useEffect } from "react";
import styled from "styled-components";
import { Grid, Text, Image, Button, Input } from "../elements/Index";
import Img from "../images/PostAdd.png";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { apis } from "../lib/axios";
import { postDetailActions } from "../redux/modules/postdetail";

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
  const [loaded, setLoaded] = React.useState(false);

  let post_id = props.match.params.id;
  const scope_edit = () => {
    const editcard = {
      title: title,
      summary: summary,
      techStack: techStack,
      totalMember: totalMember.value,
      projectStatus: projectStatus.label,
      startDate: startDate,
      endDate: endDate,
      contents: contents,
    };
    console.log("카드들", editcard);
    console.log("시작날짜", startDate);
    console.log("시작날짜", typeof startDate);
    dispatch(postDetailActions.editPostAPI(post_id, editcard));
  };

  const edit_status = () => {
    const editstatus = {
      projectStatus: projectStatus.value,
    };
    console.log("프로젝트 상태", editstatus);
    dispatch(postDetailActions.statusPostAPI(post_id, editstatus));
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
        setStartdate(setValue.startDate);
        setEnddate(setValue.endDate);
        setTotalmember(setValue.totalMember);
        setProjectstatus(setValue.projectStatus);
        setLoaded(true);
        console.log("시작하기", setValue.startDate);
        console.log("데이터", typeof startDate);
      } catch (err) {
        console.log(err);
        setLoaded(false);
      }
    };

    if (loaded === false) CheckPost();
  }, []);

  const DeletePost = async () => {
    try {
      const deletePost = await apis.deletePost(post_id);
      console.log("삭제", deletePost);
    } catch (err) {
      console.log(err);
    }
  };

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

  // 게시글 작성(프로젝트 상태)
  const projectStatused = [
    { value: "done", label: "모집중" },
    { value: "doing", label: "진행중" },
    { value: "ready", label: "마감중" },
  ];

  // 게시글 작성(프로젝트 인원)
  const projectMembers = [
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
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
        <Grid>
          <Title>Scoope</Title>
          <Text size="20px" bold>
            게시글 수정하기
          </Text>
          <Grid padding="16px">
            <Grid margin="10px auto">
              <Text>제목</Text>
              <Input
                width="100%"
                height="30px"
                padding="10px"
                border="1px solid #E7E1FF"
                placeholder="제목을 입력해주세요."
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
                width="100%"
                height="30px"
                padding="10px"
                placeholder="프로젝트를 한줄소개를 소개해주세요."
                border="1px solid #E7E1FF"
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
                placeholder={<div>기술 스택을 선택해주세요.</div>}
              />
            </Grid>
            <Grid margin="10px auto">
              <Text>기간설정</Text>
              <Grid display="flex">
                <Text margin="auto 20px">프로젝트 시작 일 :</Text>
                <SDatePicker
                  dateFormat="yyyy-MM-dd"
                  selected={new Date(startDate)}
                  onChange={(date) => setStartdate(date)}
                  startdate={startDate}
                  selectsStart
                  locale={ko}
                  minDate={new Date()}
                  placeholderText="프로젝트 시작일 입력"
                />
                <Text margin="auto 20px">프로젝트 종료 일 :</Text>
                <SDatePicker
                  dateFormat="yyyy-MM-dd"
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
            <Grid margin="10px auto">
              <Text>프로젝트 총 인원</Text>
              <Select
                options={projectMembers}
                isLoading
                value={totalMember}
                onChange={setTotalmember}
                placeholder={<div>총인원을 선택해주세요.</div>}
              ></Select>
            </Grid>
            <Grid margin="10px auto">
              <Text>프로젝트 상태체크</Text>
              <Select
                options={projectStatused}
                isLoading
                value={projectStatus}
                onChange={setProjectstatus}
                placeholder={<div>상태를 설정해주세요.</div>}
              ></Select>
            </Grid>
            <Grid>
              <Text>프로젝트 내용적기</Text>
              <Input
                width="100%"
                height="200px"
                padding="10px"
                border="1px solid #E7E1FF"
                type="text"
                editValue={contents}
                _onChange={(e) => {
                  setContents(e.target.value);
                }}
              />
              <Grid display="flex" padding="16px">
                {projectStatus === "done" && (
                  <Btn
                    width="100px"
                    height="30px"
                    margin="auto 10px"
                    onClick={() => {
                      edit_status();
                    }}
                  >
                    프로젝트 모집완료
                  </Btn>
                )}

                {projectStatus === "doing" && (
                  <Btn
                    width="100px"
                    height="30px"
                    margin="auto 10px"
                    onClick={() => {
                      edit_status();
                    }}
                  >
                    프로젝트 진행중
                  </Btn>
                )}

                {projectStatus === "ready" && (
                  <Btn
                    width="100px"
                    height="30px"
                    margin="auto 10px"
                    onClick={() => {
                      edit_status();
                    }}
                  >
                    프로젝트 준비중
                  </Btn>
                )}
                <Btn
                  width="100px"
                  height="30px"
                  margin="auto 10px"
                  onClick={() => {
                    // history.push("/");
                    window.alert("수정이 완료되었습니다.");
                    scope_edit();
                  }}
                >
                  포스트수정 완료
                </Btn>
                <Btn
                  width="100px"
                  height="30px"
                  margin="auto 10px"
                  onClick={() => {
                    window.alert("삭제 되었습니다.");
                    DeletePost();
                  }}
                >
                  포스트삭제
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
  color: #fff;
  background-color: #42309b;
  margin: 10px auto 10px auto;
  cursor: pointer;
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default PostEdit;
