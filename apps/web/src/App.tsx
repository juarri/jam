import type { Sequencer } from "@repo/schemas/sequencer";

import { api } from "@repo/api";

import { useState, useEffect } from "react";

import { Button } from "@repo/ui/components/button";

function App() {
  const [sequencers, setSequencers] = useState<Sequencer | null>(null);

  useEffect(() => {
    const fetchSequencers = async () => {
      const res = await api.sequencers[":id"].$get({
        param: { id: "1" },
      });

      const data = await res.json();

      setSequencers(data);
    };

    fetchSequencers();
  }, []);

  return (
    <div>
      <Button onClick={() => console.log("kappa")}>MyButton</Button>
      <pre className="text-xs">{JSON.stringify(sequencers, null, 2)}</pre>
    </div>
  );
}

export default App;
