import React from "react";
import * as Craft from "@/components/craft/layout";
import ContatctForm from "@/components/forms/contact-form";
import type { Metadata } from "next";
import nimi from "@/nimi.config";
import SecondaryHero from "@/components/sections/secondary-hero";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: `İletişim  | ${nimi.site_name}`,
  description: `İletişim, ${nimi.site_name}. ${nimi.site_description}`,
};

const Page = () => {
  return (
    <Craft.Main>
      <SecondaryHero title="İletişim" className="">
      Daha detaylı bilgi almak için bize aşağıdaki iletişim bilgilerimizden ulaşabilirsiniz.
      </SecondaryHero>
      <Contact />
    
    </Craft.Main>
  );
};

export default Page;


//  <ContatctForm />