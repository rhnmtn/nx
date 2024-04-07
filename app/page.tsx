import * as Craft from "@/components/craft/layout";
import Hero from "@/components/sections/hero";
import SecondaryHero from "@/components/sections/secondary-hero";
import SectorCard from "@/components/content/sectories";
import CTA from "@/components/sections/cta";

export default function Home() {
  return (
    <Craft.Main>
      <Hero />
      <Craft.Section>
        <Craft.Container className="space-y-2">
          <SecondaryHero title="Neler yapıyoruz? ">
            {
              //    All pages from. These are all the pages from your WordPress.
            }
            <SectorCard />
          </SecondaryHero>
          <CTA />
        </Craft.Container>
      </Craft.Section>
    </Craft.Main>
  );
}
//   <CTA />
