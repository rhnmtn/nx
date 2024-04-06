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
    <div>
      <SecondaryHero title="İletişim" className=""></SecondaryHero>
      <Craft.Section>
        <Craft.Container className="grid gap-6 md:grid-cols-1">
          Aşağıdaki iletişim bilgilerimizden bize ulaşabilirsiniz.
          <div className="grid gap-1">
            <p>
              <Balancer className=" font-semibold ">
                {nimi.company_name}
              </Balancer>
            </p>
            <p>
              <Balancer>{nimi.company_address}</Balancer>
            </p>
            <p>
              <Balancer>
                {nimi.company_province + " / " + nimi.company_district}
              </Balancer>
            </p>

            <p className="flex items-center gap-2 text-slate-700 font-medium mt-3">
              <Phone className="h-4 w-4" />
              +09 252 424 0696
            </p>

            <p className="flex items-center gap-2 text-slate-700 font-medium mt-3">
              <Mail className="h-4 w-4" /> info@nimi.com.tr
            </p>
          </div>

          {
            //<ContatctForm />
          }
        </Craft.Container>
      </Craft.Section>
    </div>
  );
};

export default Page;
