import z from "zod";

export const instrumentSchema = z.object({
  id: z.string(),
  name: z.string(),
  sample: z.string(),
});

export type Instrument = z.infer<typeof instrumentSchema>;
