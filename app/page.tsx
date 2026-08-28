import { readFileSync } from "node:fs";
import { join } from "node:path";
import PetmartEffects from "./petmart-effects";

export default function Home() {
  const html = readFileSync(join(process.cwd(), "app", "petmart-body.html"), "utf8");

  return (
    <>
      <PetmartEffects />
      <div className="petmart-template" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}