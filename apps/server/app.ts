import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { logger } from "hono/logger";

import { sequencersRouter } from "./routes/sequencers";

export const app = new Hono();

app.use(logger());

app.route("/api/sequencers", sequencersRouter);

app.get(serveStatic({ path: "./dist" }));
app.get(serveStatic({ path: "./dist/index.html" }));
