import * as Craft from "@/components/craft/layout";
import Placeholder from "@/public/hero-nimi.jpeg";
import Image from "next/image";

import nimi from "@/nimi.config";

const Hero = () => {
  return (
    <Craft.Section className="border-b bg-secondary/10 ">
      <Craft.Container>
        <div className="not-prose flex flex-col gap-6">
          <h1 className="text-primary-500 text-4xl md:text-6xl">
            {nimi.hero_title}
          </h1>
          <h2 className="text-xl md:text-3xl font-light">
            {nimi.hero_description}
          </h2>
          <div className="my-8 h-96 w-full overflow-hidden rounded-lg md:rounded-xl">
            <Image
              src={Placeholder}
              alt={nimi.company_name}
              width={1080}
              height={384}
              priority={true}
              className="h-full w-full object-cover object-bottom"
              loading="eager"
            />
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Hero;
