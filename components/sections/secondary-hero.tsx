import * as Craft from "@/components/craft/layout";
import { Badge } from "@/components/ui/badge";

export default function SecondaryHero({
  title,
  children,
  className,
}: {
  title: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Craft.Section className="bg-secondary/10 rounded-2xl ">
      <Craft.Container>
        <div className="">
          <h2 className="text-4xl mt-2 mb-2 text-orange-600 ">{title}</h2>
          {children}
        </div>
      </Craft.Container>
    </Craft.Section>
  );
}
