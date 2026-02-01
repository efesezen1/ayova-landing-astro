import { useState } from "react";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Brain,
  MessageSquare,
  Wrench,
  Package,
  Sparkles,
  Database,
} from "lucide-react";
import type { Translations } from "@/lib/i18n";

const icons = [Brain, MessageSquare, Wrench, Package, Sparkles];
const orbitIcons: { icon: typeof Brain; radius: number; delay: number }[] = [
  { icon: Brain, radius: 80, delay: 0 },
  { icon: MessageSquare, radius: 110, delay: 4 },
  { icon: Wrench, radius: 140, delay: 9.3 },
  { icon: Package, radius: 170, delay: 16 },
  { icon: Sparkles, radius: 200, delay: 24 },
  { icon: Database, radius: 230, delay: 33.3 },
];
const ids = ["auto-data", "nlp", "predictive", "stock", "custom"];

interface Props {
  advanced: Translations["advanced"];
}

export function TechnologiesSection({ advanced }: Props) {
  return (
    <section className="w-full py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {advanced.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {advanced.description}
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Orbital animation */}
          <div className="relative mx-auto flex h-[500px] w-full max-w-[500px] items-center justify-center overflow-hidden">
            <span className="pointer-events-none select-none text-center text-4xl font-semibold leading-none whitespace-pre-wrap">
              AI
            </span>

            {orbitIcons.map(({ icon: Icon, radius, delay }, i) => (
              <OrbitingCircles
                key={i}
                radius={radius}
                duration={20 + i * 4}
                delay={delay}
                reverse={i % 2 === 1}
              >
                <div className="flex size-10 items-center justify-center rounded-full border border-border/50 bg-card/80 shadow-sm backdrop-blur-sm">
                  <Icon className="size-5 text-primary" />
                </div>
              </OrbitingCircles>
            ))}
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible defaultValue={ids[0]}>
            {advanced.items.map((item, index) => {
              const Icon = icons[index % icons.length];
              const id = ids[index % ids.length];
              return (
                <AccordionItem key={id} value={id}>
                  <AccordionTrigger className="text-base hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
                        <Icon className="size-4 text-primary" />
                      </div>
                      <span>{item.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-11 text-muted-foreground">
                    {item.description}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
