import * as Craft from "@/components/craft/layout";
import { Badge } from "@/components/ui/badge";

export default function SecondaryHero({
  title,
  subtitle,
  children,
  className,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Craft.Section className="bg-secondary/10 rounded-2xl ">
      <Craft.Container>
        <div className="">
          <Badge variant="destructive">{subtitle}</Badge>
          <h2 className="text-4xl mt-2 mb-2">{title}</h2>
          {children}
        </div>
      </Craft.Container>
    </Craft.Section>
  );
}
