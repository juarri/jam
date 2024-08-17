import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./schemas/index.ts",
  out: "./migrations",
  dialect: "sqlite",
  strict: true,
  driver: "turso",
  dbCredentials: {
    url: process.env.TURSO_CONNECTION_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
});
