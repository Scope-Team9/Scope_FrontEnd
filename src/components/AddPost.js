// AddPost.js

// import를 한다.
import React from "react";
import styled, { useTheme } from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

import { Grid, Text, Input } from "../elements/Index";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addPostAPI } from "../redux/modules/postadd";
import { postActions as postActions } from "../redux/modules/postadd";

// AddPost의 함수형 컴포넌트를 만든다.
const AddPost = props => {
  const history = useHistory();
  const dispatch = useDispatch();

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
    console.log(card);
    dispatch(postActions.addPostAPI(card));
  };

  const [title, setTitle] = React.useState();
  const [summary, setSummary] = React.useState();
  const [tectstack, setTectstack] = React.useState();
  const [totalmember, setTotalmember] = React.useState();
  const [projectstatus, setProjectstatus] = React.useState();
  const [startdate, setStartdate] = React.useState(new Date());
  const [enddate, setEnddate] = React.useState(new Date());
  const [contents, setContents] = React.useState();

  console.log(title);
  console.log(summary);
  console.log(tectstack);
  console.log(totalmember);
  console.log(projectstatus);
  console.log(startdate);
  console.log(enddate);
  console.log(contents);

  // 기술스택 선택
  const stactopen = Boolean(tectstack);
  const stactClick = event => {
    setTectstack(event.currentTarget);
  };

  const stackClose = () => {
    setTectstack(null);
  };

  // 프로젝트 총 인원 선택
  const totalopen = Boolean(totalmember);
  const totalClick = event => {
    setTotalmember(event.currentTarget);
  };

  const totalClose = () => {
    setTotalmember(null);
  };

  // 프로젝트 상태 선택
  const statusopen = Boolean(projectstatus);
  const statusClick = event => {
    setProjectstatus(event.currentTarget);
  };

  const statusClose = () => {
    setProjectstatus(null);
  };

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
              _onChange={e => {
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
              _onChange={e => {
                setSummary(e.target.value);
              }}
            ></Input>
          </Grid>
          <Grid margin="10px auto">
            <Text>기술스택 선택</Text>
            <Button
              id="fade-button"
              aria-controls="fade-menu"
              aria-haspopup="true"
              aria-expanded={stactopen ? "true" : undefined}
              onChange={e => {
                setTectstack(e.target.value);
              }}
              onClick={stactClick}
            >
              기술스택 선택하기
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              tectstack={tectstack}
              open={stactopen}
              stackClose={stackClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={stackClose}>C#</MenuItem>
              <MenuItem onClick={stackClose}>리액트</MenuItem>
              <MenuItem onClick={stackClose}>스프링</MenuItem>
            </Menu>
            <Input
              width="500px"
              height="30px"
              padding="10px"
              placeholder="기술스택을 선택해주세요."
              border="1px solid #E7E1FF"
            ></Input>
          </Grid>
          <Grid margin="10px auto">
            <Text>기간설정</Text>
            <Grid display="flex">
              <Text margin="auto 20px">프로젝트 시작 일 :</Text>
              <SDatePicker
                dateFormat="yyyy/MM/dd"
                selected={startdate}
                onChange={date => setStartdate(date)}
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
                onChange={date => setEnddate(date)}
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
            <Button
              id="fade-button"
              aria-controls="fade-menu"
              aria-haspopup="true"
              aria-expanded={totalopen ? "true" : undefined}
              onChange={e => {
                setTotalmember(e.target.value);
              }}
              onClick={totalClick}
            >
              프로젝트 총인원 수
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              totalmember={totalmember}
              open={totalopen}
              onClose={totalClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={totalClose}>2인</MenuItem>
              <MenuItem onClick={totalClose}>4인</MenuItem>
              <MenuItem onClick={totalClose}>6인</MenuItem>
            </Menu>
            <Input
              width="500px"
              height="30px"
              padding="10px"
              placeholder="총 프로젝트 인원을 설정해주세요."
              border="1px solid #E7E1FF"
            ></Input>
          </Grid>
          <Grid margin="10px auto">
            <Text>프로젝트 상태체크</Text>
            <Button
              id="fade-button"
              aria-controls="fade-menu"
              aria-haspopup="true"
              aria-expanded={statusopen ? "true" : undefined}
              onChange={e => {
                setTotalmember(e.target.value);
              }}
              onClick={statusClick}
            >
              프로젝트 상태
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              totalmember={totalmember}
              open={statusopen}
              onClose={statusClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={statusClose}>모집 중</MenuItem>
              <MenuItem onClick={statusClose}>진행 중</MenuItem>
              <MenuItem onClick={statusClose}>마감</MenuItem>
            </Menu>
            <Input
              width="500px"
              height="30px"
              padding="10px"
              placeholder="프로젝트 상태를 설정해주세요."
              border="1px solid #E7E1FF"
            ></Input>
          </Grid>
          <Grid>
            <Text>프로젝트 내용적기</Text>
            <Input
              width="500px"
              height="300px"
              padding="10px"
              placeholder="프로젝트 내용을 입력해주세요."
              border="1px solid #E7E1FF"
              _onChange={e => {
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
