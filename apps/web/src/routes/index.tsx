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
      <h1>Ello govenor</h1>
      <pre className="text-xs">
        {JSON.stringify(sequencerQuery.data, null, 2)}
      </pre>
    </div>
  );
}

export default Index;
