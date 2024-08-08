import z from "zod";

import { instrumentSchema } from "./instrument";
import { sequenceSchema } from "./sequence";

export const stepSchema = z.object({
  instrument: instrumentSchema,
  sequence: sequenceSchema,
});

export type Step = z.infer<typeof stepSchema>;

export const stepsSchema = z.array(stepSchema);

export type Steps = z.infer<typeof stepsSchema>;
