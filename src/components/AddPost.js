// AddPost.js

// import를 한다.
import React from "react";
import styled from "styled-components";

import { Grid, Text, Input } from "../elements/Index";

// AddPost의 함수형 컴포넌트를 만든다.
const AddPost = (props) => {
  return (
    <React.Fragment>
      <Title>게시글 작성페이지</Title>
      <Grid padding="16px">
        <Grid>
          <Text>제목</Text>
          <Input
            width="500px"
            height="30px"
            padding="10px"
            placeholder="제목을 입력해주세요."
          ></Input>
        </Grid>
        <Grid>
          <Text>한줄소개</Text>
          <Input
            width="500px"
            height="30px"
            padding="10px"
            placeholder="한줄소개를 입력해주세요."
          ></Input>
        </Grid>
        <Grid>
          <Text>프로젝트 기간</Text>
          <Input
            width="500px"
            height="30px"
            padding="10px"
            placeholder="프로젝트 기간을 입력해주세요."
          ></Input>
        </Grid>
        <Grid>
          <Text>기술스택 선택</Text>
          <Input
            width="500px"
            height="30px"
            padding="10px"
            placeholder="기술스택을 선택해주세요."
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

// styled-components를 사용한다.
const Title = styled.h1`
  display: flex;
  justify-content: center;
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default AddPost;
