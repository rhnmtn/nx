import React from "react";
import * as Craft from "@/components/craft/layout";
import ContatctForm from "@/components/forms/contact-form";
import type { Metadata } from "next";
import nimi from "@/nimi.config";
import SecondaryHero from "@/components/sections/secondary-hero";

import Balancer from "react-wrap-balancer";
import { Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: `İletişim  | ${nimi.site_name}`,
  description: `İletişim, ${nimi.site_name}. ${nimi.site_description}`,
};

const Page = () => {
  return (
    <Craft.Main>
      <SecondaryHero title="İletişim" className="border-b">
        <div className="">
          <p>
            <Balancer className="font-semibold">{nimi.company_name}</Balancer>
          </p>
          <p>
            <Balancer>{nimi.company_address}</Balancer>
          </p>
          <p>
            <Balancer>
              {nimi.company_province + " / " + nimi.company_district}
            </Balancer>
          </p>
        </div>
      </SecondaryHero>
      <Craft.Section>
        <Craft.Container>
          {
            // <ContatctForm />
            " "
          }
          <div className="flex gap-4">
            <Phone className="h-6 w-6" /> +09 252 424 0696
            <Mail className="h-6 w-6" /> info@nimi.com.tr
          </div>
        </Craft.Container>
      </Craft.Section>
    </Craft.Main>
  );
};

export default Page;
