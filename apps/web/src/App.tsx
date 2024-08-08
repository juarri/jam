import { useState, useEffect } from "react";

import { Button } from "@repo/ui/components/button";
import type { Sequencers } from "@repo/schemas/sequencer";

function App() {
  const [sequencers, setSequencers] = useState<Sequencers>([]);

  useEffect(() => {
    const fetchSequencers = async () => {
      const response = await fetch("/api/sequencers");
      const data = await response.json();

      setSequencers(data);
    };

    fetchSequencers();
  }, []);

  return (
    <div>
      <h1 className="text-red-500">Kappa</h1>
      <Button onClick={() => console.log("kappa")}>MyButton</Button>
      <pre className="text-xs">{JSON.stringify(sequencers, null, 2)}</pre>
    </div>
  );
}

export default App;
