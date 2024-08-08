import z from "zod";

import { stepsSchema } from "./step";

export const sequencerSchema = z.object({
  id: z.string(),
  name: z.string(),
  steps: stepsSchema,
});

export type Sequencer = z.infer<typeof sequencerSchema>;

export const sequencersSchema = z.array(sequencerSchema);

export type Sequencers = z.infer<typeof sequencersSchema>;

export const createSequencerSchema = sequencerSchema.omit({ id: true });

export type CreateSequencer = z.infer<typeof createSequencerSchema>;
