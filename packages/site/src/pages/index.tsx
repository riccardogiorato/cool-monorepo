import { Button } from "design-system";
import { useIsomorphicLayoutEffect } from "utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("docs page");
  }, []);
  return (
    <div>
      <h1>Documentation</h1>
      <Button label={"Hello"} />
    </div>
  );
}
