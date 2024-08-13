import { api } from "@repo/api";

import { useQuery } from "@tanstack/react-query";

async function getSequencer() {
  const res = await api.sequencers[":id"].$get({
    param: { id: "1" },
  });

  const data = await res.json();

  return data;
}

function App() {
  const sequencerQuery = useQuery({
    queryKey: ["sequencer"],
    queryFn: getSequencer,
  });

  return (
    <div>
      <pre className="text-xs">
        {JSON.stringify(sequencerQuery.data, null, 2)}
      </pre>
    </div>
  );
}

export default App;
