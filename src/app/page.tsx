import { Button, Typography } from "@mui/material";

export default async function Home() {
  console.log("Hello, world!");

  const res = await fetch(
    "https://hacker-news.firebaseio.com/v0/item/8863.json"
  );
  const json = await res.json();
  console.log(json);

  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Typography>{JSON.stringify(json)}</Typography>
      <Typography>{JSON.stringify(json)}</Typography>
      <Typography>{JSON.stringify(json)}</Typography>
      <Typography>{JSON.stringify(json)}</Typography>
      <Typography>{JSON.stringify(json)}</Typography>
      <Typography>{JSON.stringify(json)}</Typography>
      <Typography>{JSON.stringify(json)}</Typography>
      <Typography>{JSON.stringify(json)}</Typography>
      <Typography>{JSON.stringify(json)}</Typography>
      <Typography>{JSON.stringify(json)}</Typography>
      <Typography>{JSON.stringify(json)}</Typography>
    </div>
  );
}
