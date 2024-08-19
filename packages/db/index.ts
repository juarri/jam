import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

import * as schema from "./schemas";

const url = process.env.TURSO_CONNECTION_URL!;
const authToken = process.env.TURSO_AUTH_TOKEN!;

const client = createClient({
  url,
  authToken,
});

export const db = drizzle(client, { schema });

export const kappa = async () => {
  const sequencers = await db.query.sequencerTable.findMany();
  console.log(sequencers);
  return sequencers;
};

kappa();
