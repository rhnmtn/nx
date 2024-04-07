import * as Craft from "@/components/craft/layout";
import SecondaryHero from "@/components/sections/secondary-hero";
import nimi from "@/nimi.config";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  /*
    const page: PageProps =  params?.slug;
  if (!page) {
    return notFound();
  }

  const id = page.id;

  const metadata: Metadata = {
    title: `${page.title} | ${nimi.site_name}`,
    description: page.description,
  };
*/
  return (
    <Craft.Main>
      <Craft.Section>
        <Craft.Container>
          <SecondaryHero title=":( Sayfa hazırlanıyor." className="">
            {params?.slug}
          </SecondaryHero>
        </Craft.Container>
      </Craft.Section>
    </Craft.Main>
  );
}
