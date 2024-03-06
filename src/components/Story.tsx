import { Box, Typography } from "@mui/material";
import React from "react";
import { CustomLink } from "./CustomLink";
import { TStory } from "@/types";
import { formatDate } from "@/utils/time";

type Props = {
  story: TStory;
};

export const Story = (props: Props) => {
  const { story } = props;
  return (
    <Box
      marginBlock={2}
      marginX={2}
      sx={{
        "& > *": { marginY: 1 },
      }}
    >
      <CustomLink href={`/${story.id}`}>
        <Typography variant="h4">{story.title}</Typography>
      </CustomLink>

      <Typography variant="subtitle1">投稿者 {story.by}</Typography>

      {story.url && (
        <CustomLink href={story.url}>
          <Typography variant="body1">元記事 {story.url}</Typography>
        </CustomLink>
      )}

      <Typography variant="body2">{formatDate(story.time)}</Typography>
      <hr />
    </Box>
  );
};
