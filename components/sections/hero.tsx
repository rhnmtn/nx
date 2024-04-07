import Image from "next/image";
import * as Craft from "@/components/craft/layout";
import heroHomeImage from "@/public/hero-home.webp";
import nimi from "@/nimi.config";

const Hero = () => {
  return (
    <Craft.Section className="border-b bg-secondary/10 ">
      <Craft.Container>
        <div className="not-prose flex flex-col gap-6">
          <h1 className="text-primary-500 text-2xl md:text-4xl">
            {nimi.hero_title}
          </h1>
          <h2 className="text-xl md:text-2xl font-light">
            {nimi.hero_description}
          </h2>
          <div className="my-8 h-auto w-full overflow-hidden rounded-lg md:rounded-2xl">
            <Image
              src={heroHomeImage}
              alt={nimi.company_name}
              width={1080}
              height={384}
              //priority={true}
              placeholder="blur"
              className="h-full w-full object-cover object-bottom"
              loading="lazy"
            />
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Hero;
