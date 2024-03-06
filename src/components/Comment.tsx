import { renderComments } from "@/app/[id]/page";
import { ResComment } from "@/types";
import { formatDate } from "@/utils/time";
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
        margin={1}
        padding={1}
        sx={{
          border: "1px solid #77ba9b",
        }}
      >
        <Typography variant="body1">{comment.text}</Typography>
        <Typography variant="body2">{comment.by}</Typography>
        <Typography variant="body2">{formatDate(comment.time)}</Typography>
      </Box>
      {comment.children && (
        <div style={{ marginLeft: "20px" }}>
          {renderComments(comment.children)}
        </div>
      )}
    </div>
  );
};
