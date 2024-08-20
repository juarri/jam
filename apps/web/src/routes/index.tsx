import { createFileRoute } from "@tanstack/react-router";

import { useQuery } from "@tanstack/react-query";
import { sequencersQueryOptions } from "@lib/api";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const sequencerQuery = useQuery(sequencersQueryOptions);

  return (
    <div>
      <h1>Koppa</h1>
      <p>oofsdsad</p>
      <pre className="text-xs">
        {JSON.stringify(sequencerQuery.data, null, 2)}
      </pre>
    </div>
  );
}

export default Index;
