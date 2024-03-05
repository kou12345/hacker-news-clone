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

  return (
    <div>
      <Story story={story} />

      {Object.keys(story).map((key) => {
        return (
          <div key={key}>
            <Typography
              variant="h6"
              sx={{
                color: "#77ba9b",
                // color: "#3b5998",
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
    </div>
  );
}
