import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {
  comment: ResComment;
};

export const Comment = (props: Props) => {
  const { comment } = props;
  return (
    <Box
      sx={{
        // border: "1px solid #34D399",
        border: "1px solid #77ba9b",
      }}
    >
      <Typography variant="body1">{comment.text}</Typography>
      {/* <Typography variant="body1">{story.url}</Typography> */}
      <Typography variant="body2">
        {/* {convertUnixTimeToDate(story.time).toISOString()} */}
      </Typography>
    </Box>
  );
};
