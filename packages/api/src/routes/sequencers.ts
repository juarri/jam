import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";

import {
  insertSequencerSchema,
  sequencerTable,
} from "@jam/db/schemas/sequencer";

import { db } from "@jam/db";
import { eq } from "drizzle-orm";

export const sequencersRouter = new Hono()
  .post("/", zValidator("json", insertSequencerSchema), async (c) => {
    const sequencer = c.req.valid("json");

    console.log(JSON.stringify(sequencer, null, 2));

    const createdSequencer = db
      .insert(sequencerTable)
      .values(sequencer)
      .returning();

    return c.json(createdSequencer);
  })
  .get("/:id", async (c) => {
    const { id } = c.req.param();

    const sequencer = await db.query.sequencerTable.findFirst({
      where: eq(sequencerTable.id, Number(id)),
    });

    return c.json(sequencer);
  })
  .get("/", async (c) => {
    const sequencers = await db.query.sequencerTable.findMany();

    return c.json(sequencers);
  });
