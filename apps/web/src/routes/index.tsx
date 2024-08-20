import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

import { useQuery } from "@tanstack/react-query";
import { sequencersQueryOptions } from "@lib/api";

function Index() {
  const sequencerQuery = useQuery(sequencersQueryOptions);

  return (
    <div>
      <h1>Koppa</h1>
      <pre className="text-xs">
        {JSON.stringify(sequencerQuery.data, null, 2)}
      </pre>
    </div>
  );
}

export default Index;
