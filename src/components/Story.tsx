import { convertUnixTimeToDate } from "@/utils/time";
import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {
  story: ResStory;
};

export const Story = (props: Props) => {
  const { story } = props;
  return (
    <Box>
      <Typography variant="h4">{story.title}</Typography>
      <Typography variant="body1">{story.url}</Typography>
      <Typography variant="body2">
        {convertUnixTimeToDate(story.time).toISOString()}
      </Typography>
    </Box>
  );
};
