import { z } from "zod";

// 記事
export type ResStory = {
    by: string;
    descendants: number;
    id: number;
    kids: number[];
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;
}

export type ResComment = {
    by: string;
    id: number;
    kids: number[];
    parent: number;
    text: string;
    time: number;
    type: string;
    children?: ResComment[];
}

export const storySchema = z.object({
    id: z.number(),
    deleted: z.boolean().optional(),
    type: z.string(),
    by: z.string(),
    time: z.number(),
    text: z.string().optional(),
    dead: z.boolean().optional(),
    parent: z.number().optional(),
    kids: z.array(z.number()).optional(),
    url: z.string().url().optional(),
    title: z.string().optional(),
    score: z.number().optional(),
    descendants: z.number().optional(),
  });

export type TStory = z.infer<typeof storySchema>

