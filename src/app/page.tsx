import { Story } from "@/components/Story";
import { ResStory, TStory, storySchema } from "@/types";
import { Box } from "@mui/material";

export default async function Home() {
  console.log("/app/page.tsx");

  const fetchStories = async (): Promise<TStory[]> => {
    // 最大500件の新しいストーリーを取得
    const res = await fetch(
      `https://hacker-news.firebaseio.com/v0/topstories.json`
    );

    if (!res.ok) {
      console.log("res.ok is false");
      throw new Error("Network response was not ok.");
    }

    const storyIds = await res.json();
    const stories: TStory[] = [];
    let index = 0;

    for (let i = 0; i < storyIds.length; i++) {
      console.log("fetch: ", i);
      const storyRes = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${storyIds[i]}.json`
      );

      if (!storyRes.ok) {
        console.error("ERROR: 正しくデータ取得できませんでした");
        console.error(storyRes.status);
      }

      const storyData = await storyRes.json();
      const parsedStory = storySchema.safeParse(storyData);
      if (parsedStory.success) {
        stories.push(parsedStory.data);
      }
    }

    return stories;
  };

  const stories = await fetchStories();

  console.log("stories: ", stories.length);

  return (
    <Box>
      {stories.map((story, idx) => (
        <Story key={idx} story={story} />
      ))}
    </Box>
  );
}
