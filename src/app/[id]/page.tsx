import { Box, Stack, Typography } from "@mui/material";
import { Comment } from "@/components/Comment";
import { CustomLink } from "@/components/CustomLink";
import { ResStory, ResComment } from "@/types";
import { formatDate } from "@/utils/time";

export default async function Page({ params }: { params: { id: number } }) {
  // todo 不正なidの場合のエラーハンドリング

  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${params.id}.json`
  );
  const json = await res.json();

  const story: ResStory = {
    by: json.by,
    descendants: json.descendants,
    id: json.id,
    kids: json.kids,
    score: json.score,
    time: json.time,
    title: json.title,
    type: json.type,
    url: json.url,
  };

  const fetchComments = async (commentIds: number[]): Promise<ResComment[]> => {
    const commentsData: ResComment[] = await Promise.all(
      commentIds.map(async (id) => {
        const res = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        );
        const comment: ResComment = await res.json();
        if (comment.kids) {
          comment.children = await fetchComments(comment.kids);
        }
        return comment;
      })
    );
    return commentsData;
  };

  const comments = await fetchComments(story.kids);

  return (
    <Box>
      <Typography variant="h4">{story.title}</Typography>
      <CustomLink href={`${story.url}`}>
        <Typography variant="body1">元記事 {story.url}</Typography>
      </CustomLink>
      <Typography variant="body2">作成日時 {formatDate(story.time)}</Typography>

      <hr />

      <Stack spacing={2}>{renderComments(comments)}</Stack>
    </Box>
  );
}

export const renderComments = (comments: ResComment[]) => {
  return comments.map((comment) => (
    <div key={comment.id}>
      <Comment comment={comment} />
    </div>
  ));
};
