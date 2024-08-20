import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { userTable } from "./user";
import { z } from "zod";

import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const instrumentSchema = z.object({
  id: z.string(),
  name: z.string(),
  sample: z.string(),
});
export type Instrument = z.infer<typeof instrumentSchema>;

export const sequenceSchema = z.array(z.boolean());
export type Sequence = z.infer<typeof sequenceSchema>;

export const stepsSchema = z.array(
  z.object({
    instrument: instrumentSchema,
    sequence: sequenceSchema,
  }),
);
export type Steps = z.infer<typeof stepsSchema>;

export const sequencerTable = sqliteTable("sequencer", {
  id: integer("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id, { onDelete: "cascade" }),
  createdAt: text("created_at").notNull().default(`current_timestamp`),
  updatedAt: text("updated_at").notNull().default(`current_timestamp`),
  name: text("name").notNull(),
  steps: text("steps", { mode: "json" }).$type<Steps>().notNull(),
});

export const sequencerSchema = createSelectSchema(sequencerTable, {
  steps: stepsSchema,
});
export type Sequencer = z.infer<typeof sequencerSchema>;

export const insertSequencerSchema = createInsertSchema(sequencerTable, {
  steps: stepsSchema,
});
export type InsertSequencer = z.infer<typeof insertSequencerSchema>;

export const getSequencerSchema = sequencerSchema.pick({ id: true });
export type GetSequencer = z.infer<typeof getSequencerSchema>;

export const updateSequencerSchema = sequencerSchema
  .omit({ id: true })
  .partial();
export type UpdateSequencer = z.infer<typeof updateSequencerSchema>;

export const deleteSequencerSchema = sequencerSchema.pick({ id: true });
export type DeleteSequencer = z.infer<typeof deleteSequencerSchema>;
