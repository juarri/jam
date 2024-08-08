import { Button } from "@repo/ui/components/button";

function App() {
  return (
    <div>
      <h1 className="text-red-500">Kappa</h1>
      <Button onClick={() => console.log("kappa")}>MyButton</Button>
    </div>
  );
}

export default App;
