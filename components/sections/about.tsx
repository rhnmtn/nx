import * as Craft from "@/components/craft/layout";
import Image from "next/image";
import about from "@/public/about.jpeg";
import nimi from "@/nimi.config";

const About = () => {
  return (
    <Craft.Section className="border-b">
      <Craft.Container>
        <div className="not-prose flex flex-col gap-6">
          <div className="my-8 h-96 w-full overflow-hidden rounded-lg border md:rounded-xl md:h-[480px]">
            <Image
              className="h-full w-full object-cover object-center"
              src={about}
              width={1920}
              height={1080}
              alt={nimi.site_name}
              placeholder="blur"
            />
          </div>
          <h1 className="text-3xl"> {nimi.site_name} </h1>
          <p className="text-xl">
            Nimi Group, 2021 yılında kurulmuş bir şirkettir ve merkezi
            Muğla - Fethiye&#39;dedir. Birden fazla sektörde güçlü rekabet
            avantajlarına sahip olarak lider pozisyonlarda bulunmaktayız.
          </p>
          <p className="font-light opacity-90 md:w-4/5 mt-2 md:mt-12">
            Geniş coğrafyada faaliyet gösteriyoruz ve yerel ile ulusal gruplarla
            kurduğumuz stratejik iş birlikleri sayesinde faaliyetlerimizi
            verimli bir şekilde yürütüyoruz. Değer odaklı yatırım anlayışını
            benimseyen ve dünyaya pozitif etki yapmayı amaçlayan sorumlu bir
            firma olarak, amacımız uzun vadeli çözümler üreterek bulunduğumuz
            bölgede daha iyi bir gelecek için liderlik yapmak ve bu anlayışla
            mevcut yatırımlarımızı dönüştürmektir.
            
          </p>
          <p className="md:w-4/5 mt-2 md:mt-12">
          Dün ve bugün olduğu gibi, gelecekte
            de tüm paydaşlarımız için değer yaratmaya devam edeceğiz.
          </p>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default About;
