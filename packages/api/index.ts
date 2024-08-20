import { Hono } from "hono";
import { hc } from "hono/client";

import { sequencersRouter } from "./src/routes/sequencers";

const app = new Hono();

export const apiRoutes = app
  .basePath("/api")
  .route("/sequencers", sequencersRouter);

export type ApiRoutes = typeof apiRoutes;

const apiClient = hc<ApiRoutes>("/");

export const api = apiClient.api;
