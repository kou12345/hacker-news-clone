import { Story } from "@/components/Story";
import { Button, Typography } from "@mui/material";

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

  const res2 = await fetch(
    "https://hacker-news.firebaseio.com/v0/item/9224.json"
  );

  const json2 = await res2.json();
  const comment: ResComment = {
    by: json2.by,
    id: json2.id,
    kids: json2.kids,
    parent: json2.parent,
    text: json2.text,
    time: json2.time,
    type: json2.type,
  };
  console.log(json2);

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

      {Object.keys(comment).map((key) => {
        return (
          <Typography key={key}>
            {comment[key as keyof typeof comment]}
          </Typography>
        );
      })}
    </div>
  );
}
