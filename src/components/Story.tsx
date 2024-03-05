import { convertUnixTimeToDate } from "@/utils/time";
import { Box, Typography } from "@mui/material";
import React from "react";
import { CustomLink } from "./CustomLink";
import { TStory } from "@/types";

type Props = {
  story: TStory;
};

export const Story = (props: Props) => {
  const { story } = props;
  return (
    <Box>
      <CustomLink href={`/${story.id}`}>
        <Typography variant="h4">{story.title}</Typography>
      </CustomLink>

      <CustomLink href={story.url}>
        <Typography variant="body1">元記事 {story.url}</Typography>
      </CustomLink>

      <Typography variant="body2">
        {convertUnixTimeToDate(story.time).toISOString()}
      </Typography>
    </Box>
  );
};
