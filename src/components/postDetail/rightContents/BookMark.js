import React from "react";
import { Grid } from "../../../elements/Index";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const Bookmark = props => {
  return (
    <React.Fragment>
      {props.userId !== props.postUserId && (
        <Grid
          width="50px"
          position="absolute"
          top="20px"
          right="50px"
          height="50px"
        >
          <Grid _onClick={props.ToggleBookMark} cursor="pointer">
            {!props.passedData?.bookmarkChecked ? (
              <BookmarkBorderIcon sx={{ color: "#b29cf4", fontSize: 60 }} />
            ) : (
              <BookmarkIcon sx={{ color: "#b29cf4", fontSize: 60 }} />
            )}
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
};

export default Bookmark;
