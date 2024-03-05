import { Story } from "@/components/Story";
import { ResStory, TStory, storySchema } from "@/types";
import { Box } from "@mui/material";

export default async function Home() {
  console.log("/app/page.tsx");

  const fetchStories = async (): Promise<TStory[]> => {
    // 最大500件の新しいストーリーを取得
    const res = await fetch(
      `https://hacker-news.firebaseio.com/v0/newstories.json`
    );

    if (!res.ok) {
      console.log("res.ok is false");
      throw new Error("Network response was not ok.");
    }

    const storyIds = await res.json();
    const stories: TStory[] = [];
    let index = 0;

    // 10件の有効なストーリーを取得するまで、またはIDのリストをすべてチェックするまでループ
    while (stories.length < 20 && index < storyIds.length) {
      const id = storyIds[index];
      const storyRes = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );

      if (!storyRes.ok) {
        index++;
        continue; // 次のストーリーIDにスキップ
      }

      const storyData = await storyRes.json();
      const parsedStory = storySchema.safeParse(storyData);

      if (parsedStory.success) {
        stories.push(parsedStory.data);
      }

      index++;
    }

    return stories;
  };

  const stories = await fetchStories();

  return (
    <Box>
      {stories.map((story, idx) => (
        <Story key={idx} story={story} />
      ))}
    </Box>
  );
}
