import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import type { Sequencer } from "@repo/schemas/sequencer";
import { createSequencerSchema } from "@repo/schemas/sequencer";

import type { Instrument } from "@repo/schemas/instrument";
import type { Sequence } from "@repo/schemas/sequence";

const fakeInstrument: Instrument = {
  id: "1",
  name: "Instrument 1",
  sample: "/samples/sample1.mp3",
};

const fakeSequence: Sequence = [true, false, true, false];

const fakeSequencer: Sequencer = {
  id: "1",
  name: "Sequencer 1",
  steps: [
    { instrument: fakeInstrument, sequence: fakeSequence },
    { instrument: fakeInstrument, sequence: fakeSequence },
    { instrument: fakeInstrument, sequence: fakeSequence },
    { instrument: fakeInstrument, sequence: fakeSequence },
  ],
};

const fakeSequencers: Sequencer[] = [fakeSequencer];

export const sequencersRouter = new Hono()
  .post("/", zValidator("json", createSequencerSchema), async (c) => {
    const sequencer = c.req.valid("json");

    fakeSequencers.push({
      ...sequencer,
      id: String(fakeSequencers.length + 1),
    });

    return c.json(sequencer);
  })
  .get("/", async (c) => {
    return c.json(fakeSequencers);
  })
  .get("/:id", async (c) => {
    const { id } = c.req.param();

    const sequencer = fakeSequencers.find((s) => s.id === id);

    if (!sequencer) {
      return c.notFound();
    }

    return c.json(sequencer);
  });
