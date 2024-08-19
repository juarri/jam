import { Hono } from "hono";
import { hc } from "hono/client";

import { sequencersRouter } from "./src/routes/sequencers";

import { db, kappa } from "@jam/db";

// const app = new Hono();
//
// export const apiRoutes = app
//   .basePath("/api")
//   .route("/sequencers", sequencersRouter);
//
// type ApiRoutes = typeof apiRoutes;
//
// const apiClient = hc<ApiRoutes>("/");
//
// export const api = apiClient.api;

// const kappa = async () => {
//   const sequencers = await db.query.sequencerTable.findMany();
//   console.log(sequencers);
//   return sequencers;
// };
//
// kappa();

kappa();
