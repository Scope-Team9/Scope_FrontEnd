// Bookmark.js
/* eslint-disable */

// import를 한다.
import React from "react";
import styled from "styled-components";
import { Grid } from "../../../elements/Index";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

// Bookmark의 함수형 컴포넌트를 만든다.
const Bookmark = props => {
  return (
    <React.Fragment>
      <BookMarkMedia>
        {props.userId !== props.postUserId && (
          <Grid
            width="10px"
            position="absolute"
            top="0px"
            right="50px"
            height="10px"
          >
            <Grid _onClick={props.ToggleBookMark} cursor="pointer">
              {!props.passedData?.bookmarkChecked ? (
                <BookmarkBorderIcon sx={{ color: "#17334A", fontSize: 50 }} />
              ) : (
                <BookmarkIcon sx={{ color: "#17334A", fontSize: 50 }} />
              )}
            </Grid>
          </Grid>
        )}
      </BookMarkMedia>
    </React.Fragment>
  );
};

const BookMarkMedia = styled.div`
  @media screen and (max-width: 600px) {
    width: 10px;
    height: 10px;
    font-size: 10px;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default Bookmark;
