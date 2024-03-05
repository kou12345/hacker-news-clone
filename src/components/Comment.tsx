import { renderComments } from "@/app/[id]/page";
import { convertUnixTimeToDate } from "@/utils/time";
import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {
  comment: ResComment;
};

export const Comment = (props: Props) => {
  const { comment } = props;
  return (
    <div>
      <Box
        sx={{
          border: "1px solid #77ba9b",
        }}
      >
        <Typography variant="body1">{comment.text}</Typography>
        <Typography variant="body2">{comment.by}</Typography>
        <Typography variant="body2">
          {convertUnixTimeToDate(comment.time).toISOString()}
        </Typography>
      </Box>
      {comment.children && (
        <div style={{ marginLeft: "20px" }}>
          {renderComments(comment.children)}
        </div>
      )}
    </div>
  );
};
