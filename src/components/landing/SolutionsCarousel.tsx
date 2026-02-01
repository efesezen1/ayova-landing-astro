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

const solutions = [
  {
    title: "CRM Entegrasyonu",
    description:
      "Müşteri verilerinizi tek bir platformda birleştirerek satış ve pazarlama süreçlerinizi optimize edin.",
    icon: Users,
  },
  {
    title: "Satış Performans Analizi",
    description:
      "Gerçek zamanlı satış verilerinizi analiz ederek stratejik kararlar alın ve performansınızı artırın.",
    icon: BarChart3,
  },
  {
    title: "Stok Yönetimi",
    description:
      "Yapay zeka destekli stok optimizasyonu ile maliyetlerinizi düşürün ve verimliliğinizi artırın.",
    icon: Boxes,
  },
  {
    title: "Müşteri İlişkileri Yönetimi",
    description:
      "Müşteri memnuniyetini artıran kişiselleştirilmiş deneyimler oluşturun ve sadık müşteri kitlesi oluşturun.",
    icon: Handshake,
  },
  {
    title: "Satış Operasyon Planlama",
    description:
      "Satış operasyonlarınızı uçtan uca planlayın, yönetin ve optimize edin.",
    icon: Workflow,
  },
];

export function SolutionsCarousel() {
  return (
    <section className="w-full py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Çözümlerimiz
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            İş süreçlerinizi dönüştürecek kapsamlı çözümler
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="mx-auto w-full max-w-5xl"
        >
          <CarouselContent className="-ml-4">
            {solutions.map((solution) => (
              <CarouselItem
                key={solution.title}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm transition-colors hover:border-border">
                  <CardHeader>
                    <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                      <solution.icon className="size-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {solution.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
