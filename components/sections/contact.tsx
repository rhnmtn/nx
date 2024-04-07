import React from "react";
import Image from "next/image";
import contact from "@/public/contact-hero.webp";
import Balancer from "react-wrap-balancer";
import nimi from "@/nimi.config";
import { Mail, Phone } from "lucide-react";
import * as Craft from "@/components/craft/layout";

export const Contact = () => {
  return (
    <Craft.Section className="border-b">
      <Craft.Container>
      <div className="not-prose flex flex-col gap-2">
        <div className="my-8 h-96 w-full overflow-hidden rounded-lg border md:rounded-xl md:h-[480px]">
          
          <Image
            className="h-full w-full object-cover object-center"
            src={contact}
            alt={nimi.company_name}
            width={1024}
            height={375}
            //priority={true}
            placeholder="blur"
            loading="lazy"
          />
        </div>

        <div className="grid gap-1">
          <p>
            <Balancer className=" font-semibold ">{nimi.company_name}</Balancer>
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
            <Phone className="h-6 w-6" />
            +90 252 424 0696
          </p>

          <p className="flex items-center gap-2 text-slate-700 font-medium mt-3">
            <Mail className="h-6 w-6" /> info@nimi.com.tr
          </p>
        </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};
