import z from "zod";

export const sequenceSchema = z.array(z.boolean());

export type Sequence = z.infer<typeof sequenceSchema>;

export const sequencesSchema = z.array(sequenceSchema);

export type Sequences = z.infer<typeof sequencesSchema>;
