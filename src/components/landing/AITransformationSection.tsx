import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Brain, Settings, Users } from "lucide-react";
import type { Translations } from "@/lib/i18n";

const icons = [Brain, Settings, Users];
const ids = ["smart-data", "auto-process", "personalized"];

interface Props {
  expertise: Translations["about"]["expertise"];
}

export function AITransformationSection({ expertise }: Props) {
  return (
    <section className="w-full bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {expertise.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {expertise.description}
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue={ids[0]} className="w-full">
          {expertise.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            const id = ids[index % ids.length];
            return (
              <AccordionItem key={id} value={id}>
                <AccordionTrigger className="text-base hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <span className="font-semibold">{item.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-12 text-muted-foreground leading-relaxed">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
