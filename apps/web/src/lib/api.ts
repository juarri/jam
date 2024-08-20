import { hc } from "hono/client";
import { type ApiRoutes } from "@jam/api";
import type { InsertSequencer } from "@jam/db/schemas/sequencer";
import { queryOptions } from "@tanstack/react-query";

const client = hc<ApiRoutes>("/");

export const api = client.api;

export async function getSequencers() {
  const res = await api.sequencers.$get();

  if (!res.ok) {
    throw new Error("server error");
  }

  const data = await res.json();

  return data;
}

export const sequencersQueryOptions = queryOptions({
  queryKey: ["get-sequencers"],
  queryFn: getSequencers,
  staleTime: 1000 * 60 * 5,
});

export async function createExpense({ value }: { value: InsertSequencer }) {
  const res = await api.sequencers.$post({ json: value });
  if (!res.ok) {
    throw new Error("server error");
  }

  const newExpense = await res.json();
  return newExpense;
}
