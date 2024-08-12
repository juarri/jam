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

export const getSequencerSchema = sequencerSchema.pick({ id: true });

export type GetSequencer = z.infer<typeof getSequencerSchema>;

export const updateSequencerSchema = sequencerSchema
  .omit({ id: true })
  .partial();

export type UpdateSequencer = z.infer<typeof updateSequencerSchema>;

export const deleteSequencerSchema = sequencerSchema.pick({ id: true });

export type DeleteSequencer = z.infer<typeof deleteSequencerSchema>;
