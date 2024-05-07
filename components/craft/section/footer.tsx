// nimi Config
import nimi from "@/nimi.config";

// Component Imports
import * as Craft from "@/components/craft/layout";

// React and Next Imports
import Image from "next/image";
import Link from "next/link";

// Utility Imports
import Logo from "@/public/logo.svg";
import Balancer from "react-wrap-balancer";

import Social from "@/components/social/";

const Footer = () => {
  return (
    <footer className="border-t drop-shadow-sm bg-secondary ">
      <Craft.Section>
        <Craft.Container className="grid gap-6 md:grid-cols-2">
          <div className="grid gap-1">
            <Link href="/">
              <h1 className="text-primary-500  text-2xl md:text-4xl">
                <span className="font-extrabold ">Nimi </span>
                <span className=" font-extralight text-orange-400 ">Girişim</span>
              </h1>
            </Link>
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

            <div className=" mt-4">
              <Social />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-0">
            <div className="flex flex-col gap-2">
              <h4 className="text-muted-foreground">{nimi.site_name}</h4>
              <ul>
                {Object.entries(nimi.menu.main).map(([key, href]) => (
                  <li key={key}>
                    <Link href={href}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-muted-foreground">
                {nimi.sectory_menu.title}
              </h4>
              <ul>
                {nimi.sectory_menu.items.map((component) => (
                  <li key={component.id}>
                    <Link href={component.href}>{component.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-muted-foreground">{nimi.legal_menu.title}</h4>
              <ul>
                {nimi.legal_menu.items.map((component) => (
                  <li key={component.title}>
                    <Link href={component.href}>{component.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-muted-foreground mt-4 text-sm ">
            Copyright © 2020-2024{" "}
            <a href="#">{nimi.site_name.replace(" ", "")}</a>. Tüm Hakları
            Saklıdır.
          </p>
        </Craft.Container>
      </Craft.Section>
    </footer>
  );
};

export default Footer;
