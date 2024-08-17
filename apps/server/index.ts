import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { logger } from "hono/logger";

import { apiRoutes } from "@repo/api";

export const app = new Hono()
  .use(logger())

  .route("/", apiRoutes)

  .get(serveStatic({ path: "./dist" }))
  .get(serveStatic({ path: "./dist/index.html" }));

const server = Bun.serve({
  fetch: app.fetch,
});

console.log(`Listening on http://localhost:${server.port} ...`);
