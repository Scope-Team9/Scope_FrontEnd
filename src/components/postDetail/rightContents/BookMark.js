// Bookmark.js
/* eslint-disable */

// import를 한다
import React from "react";
import styled from "styled-components";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

// Bookmark의 함수형 컴포넌트를 만든다
const Bookmark = (props) => {
  return (
    <React.Fragment>
      <BookMarkMedia>
        {props.userId !== props.postUserId && (
          <BookMark>
            <BookMark onClick={props.ToggleBookMark}>
              {!props.passedData?.bookmarkChecked ? (
                <BookmarkBorderIcon sx={{ color: "#172D40", fontSize: 45 }} />
              ) : (
                <BookmarkIcon sx={{ color: "#172D40", fontSize: 45 }} />
              )}
            </BookMark>
          </BookMark>
        )}
      </BookMarkMedia>
    </React.Fragment>
  );
};

// styled-components
const BookMarkMedia = styled.div`
  @media screen and (max-width: 600px) {
    width: 10px;
    height: 10px;
    font-size: 10px;
  }
`;
const BookMark = styled.div`
  width: 50px;
  position: absolute;
  top: -10px;
  right: -30px;
  height: 50px;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    width: 30px;
    height: 30px;
    right: 15px;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다
export default Bookmark;
