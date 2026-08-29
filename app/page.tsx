import { petmartHtml } from "./petmart-body";
import PetmartEffects from "./petmart-effects";

export default function Home() {
  return (
    <>
      <PetmartEffects />
      <div className="petmart-template" dangerouslySetInnerHTML={{ __html: petmartHtml }} suppressHydrationWarning />
    </>
  );
}