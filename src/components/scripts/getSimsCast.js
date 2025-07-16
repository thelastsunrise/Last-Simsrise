import { getCollection } from "astro:content";

export async function getSimsCast() {
  const sims = await getCollection("simsCast");

  return sims.flatMap(sim =>
    sim.data.generation.flatMap(gen =>
      gen.cast.map(char => ({
        name: char.name,
        slug: char.name.toLowerCase().replace(" ", "-"),
        role: char.role
      }))
    )
  );
}