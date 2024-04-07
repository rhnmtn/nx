import * as Craft from "@/components/craft/layout";
import { CTAForm } from "./cta-form";

const CTA = () => {
  return (
    <Craft.Section className="border-t">
      <Craft.Container>
        <h3 className="!mt-0">Bizden Haberler!</h3>
        <p>Güncel faaliyetlerden bilgi almak için mail listemize kayıt olun.</p>
        <CTAForm />
      </Craft.Container>
    </Craft.Section>
  );
};

export default CTA;
