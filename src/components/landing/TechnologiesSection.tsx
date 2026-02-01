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
} from "lucide-react";

const techItems = [
  {
    id: "auto-data",
    title: "Otomatik Veri Analizi",
    description:
      "Yapay zeka algoritmaları ile verilerinizi otomatik olarak analiz edin, trendleri keşfedin ve iş kararlarınızı veriye dayalı hale getirin.",
    icon: Brain,
  },
  {
    id: "nlp",
    title: "Doğal Dil İşleme",
    description:
      "Müşteri geri bildirimlerini ve iletişimlerini anlayan, sınıflandıran ve yanıtlayan NLP tabanlı çözümlerle müşteri deneyimini iyileştirin.",
    icon: MessageSquare,
  },
  {
    id: "predictive",
    title: "Öngörücü Bakım",
    description:
      "Makine öğrenimi modelleri ile ekipman arızalarını önceden tahmin edin ve bakım maliyetlerinizi optimize edin.",
    icon: Wrench,
  },
  {
    id: "stock",
    title: "Akıllı Stok Optimizasyonu",
    description:
      "Talep tahmini ve otomatik sipariş yönetimi ile stok seviyelerinizi optimize edin, fazla stok ve stok eksikliğini önleyin.",
    icon: Package,
  },
  {
    id: "custom",
    title: "Butik Çözümler",
    description:
      "İşletmenizin benzersiz ihtiyaçlarına özel tasarlanmış yapay zeka çözümleri ile rekabet avantajı elde edin.",
    icon: Sparkles,
  },
];

const orbitIcons = [Brain, MessageSquare, Wrench, Package, Sparkles];

export function TechnologiesSection() {
  return (
    <section className="w-full py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Teknolojilerimiz
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            En son yapay zeka teknolojileri ile iş süreçlerinizi güçlendirin
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Orbital animation */}
          <div className="relative mx-auto flex h-[400px] w-full max-w-[400px] items-center justify-center overflow-hidden">
            <span className="pointer-events-none select-none text-center text-4xl font-semibold leading-none whitespace-pre-wrap bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              AI
            </span>

            {orbitIcons.map((Icon, i) => (
              <OrbitingCircles
                key={i}
                radius={i % 2 === 0 ? 120 : 170}
                duration={20 + i * 4}
                delay={i * 4}
                reverse={i % 2 === 1}
              >
                <div className="flex size-10 items-center justify-center rounded-full border border-border/50 bg-card/80 shadow-sm backdrop-blur-sm">
                  <Icon className="size-5 text-primary" />
                </div>
              </OrbitingCircles>
            ))}
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible defaultValue="auto-data">
            {techItems.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="text-base hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
                      <item.icon className="size-4 text-primary" />
                    </div>
                    <span>{item.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-11 text-muted-foreground">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
