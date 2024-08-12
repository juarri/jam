import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { logger } from "hono/logger";

import { apiRoutes } from "@repo/api";

export const app = new Hono();

app.use(logger());

app.route("/", apiRoutes);

app.get(serveStatic({ path: "./dist" }));
app.get(serveStatic({ path: "./dist/index.html" }));

const server = Bun.serve({
  fetch: app.fetch,
});

console.log(`Listening on http://localhost:${server.port} ...`);
