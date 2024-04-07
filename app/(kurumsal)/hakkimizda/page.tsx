import React from "react";
import * as Craft from "@/components/craft/layout";
import About from "@/components/sections/about";
import SecondaryHero from "@/components/sections/secondary-hero";
//import CTA from "@/components/sections/cta";
import FAQ from "@/components/sections/faq";
import nimi from "@/nimi.config";

const Page = () => {
  return (
    <Craft.Main>
      <SecondaryHero title="Biz Kimiz?">
        <>{nimi.site_description}</>
      </SecondaryHero>

      <About />
      <FAQ />
    </Craft.Main>
  );
};

export default Page;

/**      
<FAQ />
<CTA />
**/
