import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Lang, Translations } from "@/lib/i18n";

interface Props {
  hero: Translations["hero"];
  lang: Lang;
}

export function HeroSection({ hero, lang }: Props) {
  return (
    <AuroraBackground className="min-h-screen w-full">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-[#002fa7]">
            {hero.title.brand}
          </span>{" "}
          {hero.title.with} {hero.title.transform}
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
          {hero.description}
        </p>
        <Button size="lg" className="rounded-full text-base" asChild>
          <a href={`/${lang}/products`}>
            {hero.cta}
            <ArrowRight className="ml-2 size-4" />
          </a>
        </Button>
      </div>
    </AuroraBackground>
  );
}
