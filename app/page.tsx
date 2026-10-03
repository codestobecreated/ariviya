import Hero from "./home/include/Hero";
import { petmartHtml } from "./petmart-body";
import PetmartEffects from "./petmart-effects";

const [headerHtml, bodyHtml] = petmartHtml.split("<!-- Hero Section Start -->");
const restHtml = bodyHtml ? bodyHtml.split("<!-- Hero Section End -->")[1] : "";

export default function Home() {
  return (
    <>
      <PetmartEffects />
      <div className="petmart-template">
        <div dangerouslySetInnerHTML={{ __html: headerHtml }} suppressHydrationWarning />
        <Hero />
        <div dangerouslySetInnerHTML={{ __html: restHtml }} suppressHydrationWarning />
      </div>
    </>
  );
}
