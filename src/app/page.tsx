import { Comment } from "@/components/Comment";
import { Story } from "@/components/Story";
import { Button, Stack, Typography } from "@mui/material";

export default async function Home() {
  console.log("Hello, world!");

  const res = await fetch(
    "https://hacker-news.firebaseio.com/v0/item/8863.json"
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

  const comments: ResComment[] = [];

  for (const kid of story.kids) {
    const res = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${kid}.json`
    );

    if (!res.ok) {
      console.error(res);
      continue;
    }

    const json = await res.json();

    comments.push({
      by: json.by,
      id: json.id,
      kids: json.kids,
      parent: json.parent,
      text: json.text,
      time: json.time,
      type: json.type,
    });
  }

  console.log("comments: ", comments);

  return (
    <div>
      <Story story={story} />

      {Object.keys(story).map((key) => {
        return (
          <div key={key}>
            <Typography
              variant="h6"
              sx={{
                color: "#34D399",
              }}
            >
              {key}
            </Typography>
            <Typography variant="body1">
              {story[key as keyof typeof story]}
            </Typography>
          </div>
        );
      })}

      <hr />

      <Stack spacing={2}>
        {comments.map((comment, key) => {
          return <Comment key={key} comment={comment} />;
        })}
      </Stack>
    </div>
  );
}
