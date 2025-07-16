// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const sims = defineCollection({
    loader: glob({pattern: "*.mdx", base: "./src/content"}),
    schema: z.object({
        generation: z.number(),
        chapter: z.number(),
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
    })
});

const simsCast = defineCollection({
    loader: file("src/content/cast.json"),
    schema: z.object({
        familyid: z.string(),
            game: z.string(),
            generation: z.array(
                z.object({
                    number: z.number(),
                    cast: z.array(
                        z.object({
                            name: z.string(),
                            gender: z.string(),
                            isTrans: z.boolean().optional(),
                            pronouns: z.string(),
                            sexuality: z.string().optional(),
                            role: z.string(),
                            status: z.string(),
                            traits: z.array(z.string()).min(1),
                            images: z.array( 
                                z.object({
                                    childsrc: z.string().optional(),
                                    teenagesrc: z.string().optional(),
                                    youngadultsrc: z.string().optional(),
                                    matureadultsrc: z.string().optional(),
                                    occultsrc: z.string().optional(),
                                    eldersrc: z.string().optional()
                                })
                            ),
                            relationships: z.array(
                                z.object({
                                    name: z.string(),
                                    relation: z.string(),
                                    link: z.string().optional()
                                }).optional()
                            ).min(1),
                            blurbs: z.array(
                                z.object({
                                    section: z.string(),
                                    text: z.string()
                                }).optional()
                            ).optional()
                        })
                    )
                })
        )
    })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { sims, simsCast };