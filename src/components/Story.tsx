import { convertUnixTimeToDate } from "@/utils/time";
import { Box, Typography } from "@mui/material";
import React from "react";
import { CustomLink } from "./CustomLink";

type Props = {
  story: ResStory;
};

export const Story = (props: Props) => {
  const { story } = props;
  return (
    <Box>
      <CustomLink href={`/${story.id}`}>
        <Typography variant="h4">{story.title}</Typography>
      </CustomLink>

      <Typography variant="body1">{story.url}</Typography>

      <Typography variant="body2">
        {convertUnixTimeToDate(story.time).toISOString()}
      </Typography>
    </Box>
  );
};
