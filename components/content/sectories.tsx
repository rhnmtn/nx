import Link from "next/link";
import React from "react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Badge } from "../ui/badge";
import * as Craft from "@/components/craft/layout";

import nimi from "@/nimi.config";

const SectorCard = () => {
  return (
    <Craft.Section className="border-t mt-2">
      <Craft.Container>
        <div className=" bg-orange-50/5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-8">
          {nimi.sectory_menu.items.map((component) => (
            <Link
              className="group flex flex-col not-prose gap-2 transition-all hover:-mt-1 hover:mb-1"
              href={component.href}
              key={component.title}
            >
              <div className="relative mb-1 h-56 overflow-hidden border shadow-sm rounded-2xl md:rounded-xl transition-all group-hover:opacity-75">
                <img
                  src={component.imageURL}
                  alt={component.title}
                  className="absolute left-0 top-0 h-full w-full object-cover"
                />
                <div className="absolute top-2 right-2 hidden items-center text-sm transition-all group-hover:flex rounded-sm">
                  <p className="sr-only">Read More</p>
                  <ArrowTopRightIcon className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-primary mb-1 text-2xl"> {component.title}</h3>
              <p className="opacity-90 text-sm">{component.description}</p>
            </Link>
          ))}
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default SectorCard;

/*


*/
