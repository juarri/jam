import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";

import {
  insertSequencerSchema,
  sequencerTable,
} from "@repo/db/schemas/sequencer";

import { db } from "@repo/db";
import { eq } from "drizzle-orm";

export const sequencersRouter = new Hono()
  .post("/", zValidator("json", insertSequencerSchema), async (c) => {
    const sequencer = c.req.valid("json");

    const createdSequencer = db
      .insert(sequencerTable)
      .values(sequencer)
      .returning();

    return c.json(createdSequencer);
  })
  .get("/", async (c) => {
    const sequencers = await db.query.sequencerTable.findMany();

    return c.json(sequencers);
  })
  .get("/:id", async (c) => {
    const { id } = c.req.param();

    const sequencer = await db.query.sequencerTable.findFirst({
      where: eq(sequencerTable.id, Number(id)),
    });

    if (!sequencer) {
      throw new Error(`Sequencer with id ${id} not found`);
    }

    return c.json(sequencer);
  });
