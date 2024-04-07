import * as Craft from "@/components/craft/layout";
import {
  QuestionMarkCircledIcon,
  ArrowTopRightIcon,
} from "@radix-ui/react-icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const content: faqProps[] = [
  {
    question: "Ne zaman kurulmuştur??",
    answer: "14 Haziran 2021 tarihinde kurulmuştur.",

  },
  {
    question: "Faaliyet gösterdiği sektörler hangileridir?",
    answer:
      "Turizm, Enerji ve İnşaat sektörlerinde faaliyet göstermektedir.",
  },
  {
    question: "Turizm sektöründe ne iş yapıyor?",
    answer:
      "Turizm sektöründe, TÜRSAB bağlı seyahat acentesi olarak faaliyet gösteren NİMİ TURİZM SEYAHAT ACENTASI, A sınıfı üyelik belgesi olan 13504 belge numarasına sahiptir. Villaci.com ve HepsiRota, profesyonel villa kiralama hizmeti sunan web sitelerimizdir. Özel havuzlu villa veya yazlık kiralama ihtiyaçlarınızı karşılamak için bizimle iletişime geçebilirsiniz.",
      link: "www.villaci.com",
  },
  {
    question: "Enerji sektöründe ne iş yapıyorsunuz?",
    answer: "Firmamız, lisanslı veya lisanssız güneş enerji santrali ve çatı üstü projelerini mevzuata uygun bir şekilde tasarlayarak; güvenli, maksimum verimli ve düşük maliyetli çözümler sunmaktadır. Uzman ekibimiz, anahtar teslim sistem kurulumu ve bakım-onarım hizmetleriyle müşterilerimize en iyi hizmeti sağlamayı hedeflemektedir.",
  },
  {
    question: "İnşaat sektöründe ne iş yapıyorsunuz?",
    answer: "Proje ve inşaat sektöründe, başlangıçtan sona kadar tüm evrelerinde koordinasyonu sağlayarak, farklı disiplinlerin bir araya gelerek uyumlu bir şekilde çalışmasını temin ederiz.",
  },
];

const FAQ = () => {
  return (
    <Craft.Section>
      <Craft.Container>
        <div className="flex flex-col not-prose gap-6">
          <h3 className="text-4xl">SSS - Sıkça Sorulan Sorular</h3>
          <h4 className="text-2xl font-thin opacity-70">
          Aşağıda, şirketimiz hakkında sıkça sorulan soruların özeti bulunmaktadır. Soruların üzerine tıklayarak cevapları görüntüleyebilirsiniz.
          </h4>
          <div className="mt-6 md:mt-12 flex flex-col gap-6">
            {content.map((item, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value={item.question}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>
                    {item.answer}{" "}
                    {item.link && (
                      <a                      
                        href={item.link}
                        rel="noopener"
                        target="_blank"
                        className="opacity-60 mt-2 hover:opacity-100 transition-all flex items-center"
                      >
                        Siteyi Ziyaret Et <ArrowTopRightIcon className="ml-1" />
                      </a>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default FAQ;
