import React from "react";
import styled from "styled-components";
import { Grid, Input, Button } from "../elements/Index";
import CloseIcon from "@mui/icons-material/Close";

const Feedback = props => {
  const [comment, setComment] = React.useState();
  const CommentInput = commentdata => {
    setComment(commentdata);
  };
  const Submit = () => {};

  const goPage = () => {
    window.open(
      // "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfl6t0O_P5mXR6wo1cqIZ7TWkYduTkZiNlx0r5HynoArgS9Tg/formResponse",
      // "_blank"
      "https://scopewith.notion.site/MEMBER-4113e65749054b14a623c098c569d819",
      "_blank"
    );
  };
  return (
    <FeedbackBox>
      <Grid position="absolute" top="0px" right="6%" width="3%" padding="10px">
        <CloseIcon
          sx={{ color: "#111", fontSize: 30 }}
          onClick={props.ToggleFeedback}
          cursor="pointer"
        />
      </Grid>
      <FeedbackTitle>스코프를 이용해 주셔서 감사합니다!</FeedbackTitle>
      <FeedbackSubTitle>
        더 좋은 서비스를 제공해드릴 수 있도록, 의견을 남겨주세요!
      </FeedbackSubTitle>

      <Grid display="flex" height="50px" margin="20px 2px">
        <Input
          borderRadius="25px"
          border="1px solid #ddd"
          fontSize="12px"
          padding="0 0 0 23px"
          height="100%"
          placeholder="소중한 의견이나 불편사항 입력해주세요"
          _onChange={e => {
            CommentInput(e.target.value);
          }}
        />
        <Button width="80px" _onClick={Submit}>
          제출
        </Button>
      </Grid>
      <TeamLink onClick={goPage}> SCOPE 개발팀이 궁금하시다면?</TeamLink>
    </FeedbackBox>
  );
};

const FeedbackBox = styled.div`
  position: fixed;
  padding: 30px 10px;
  width: 450px;
  height: 180px;
  background: #fff;
  bottom: 50px;
  left: 50px;
  border-radius: 15px;
  text-align: center;
  margin: auto;
  box-shadow: 0 5px 25px rgb(0 0 0 / 15%);
`;

const FeedbackTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;
const FeedbackSubTitle = styled.p`
  font-size: 15px;
`;
const TeamLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
`;

export default Feedback;
