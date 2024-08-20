import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from "hono/bun";

import { apiRoutes } from "@repo/api";

export const app = new Hono()
  .use(logger())

  .route("/", apiRoutes)

  .get(serveStatic({ path: "./dist" }))
  .get(serveStatic({ path: "./dist/index.html" }));

const server = Bun.serve({
  port: process.env.PORT || 3000,
  hostname: "0.0.0.0",
  fetch: app.fetch,
});

console.log(`Listening on http://localhost:${server.port} ...`);
