import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Users, BarChart3, Boxes, Handshake, Workflow } from "lucide-react";
import type { Translations } from "@/lib/i18n";

const icons = [Users, BarChart3, Boxes, Handshake, Workflow];

interface Props {
  features: Translations["features"];
}

export function SolutionsCarousel({ features }: Props) {
  return (
    <section className="w-full py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {features.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {features.description}
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="mx-auto w-full max-w-5xl"
        >
          <CarouselContent className="-ml-4">
            {features.items.map((item, index) => {
              const Icon = icons[index % icons.length];
              return (
                <CarouselItem
                  key={item.title}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm transition-colors hover:border-border">
                    <CardHeader>
                      <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
