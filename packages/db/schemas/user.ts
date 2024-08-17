import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import type { z } from "zod";

export const userTable = sqliteTable("user", {
  id: integer("id").primaryKey(),
  provider: text("provider", { enum: ["google"] }).notNull(),
  providerId: text("provider_id").notNull().unique(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").unique().notNull(),
  picture: text("picture"),
});

export const insertUserSchema = createInsertSchema(userTable);
export type InsertUser = z.infer<typeof insertUserSchema>;
export const selectUserSchema = createSelectSchema(userTable);
export type User = z.infer<typeof selectUserSchema>;

export const sessionTable = sqliteTable("session", {
  id: text("id").notNull().primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id, { onDelete: "cascade" }),
  expiresAt: integer("expires_at").notNull(),
});

export const insertSessionSchema = createInsertSchema(sessionTable);
export type InsertSession = z.infer<typeof insertSessionSchema>;
export const selectSessionSchema = createSelectSchema(sessionTable);
export type Session = z.infer<typeof selectSessionSchema>;
