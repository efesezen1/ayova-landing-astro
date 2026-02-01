import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Brain, Settings, Users } from "lucide-react";

const items = [
  {
    id: "smart-data",
    title: "Akıllı Veri Analizi",
    description:
      "Yapay zeka destekli analitik araçlarımız ile verilerinizi anlamlı iç görülere dönüştürün. Gerçek zamanlı dashboardlar ve otomatik raporlama ile iş performansınızı sürekli takip edin.",
    icon: Brain,
  },
  {
    id: "auto-process",
    title: "Otomatik Süreç Optimizasyonu",
    description:
      "Tekrarlayan iş süreçlerinizi yapay zeka ile otomatikleştirin. İş akışlarınızı optimize ederek zamandan ve kaynaklardan tasarruf edin.",
    icon: Settings,
  },
  {
    id: "personalized",
    title: "Kişiselleştirilmiş Müşteri Deneyimi",
    description:
      "Her müşteriye özel deneyimler sunarak müşteri memnuniyetini ve sadakatini artırın. Yapay zeka ile müşteri davranışlarını analiz edin ve kişiselleştirilmiş öneriler sunun.",
    icon: Users,
  },
];

export function AITransformationSection() {
  return (
    <section className="w-full bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            AI ile Dönüşüm
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Yapay zeka teknolojileri ile işletmenizi geleceğe taşıyın
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue="smart-data" className="w-full">
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="text-base hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="size-5 text-primary" />
                  </div>
                  <span className="font-semibold">{item.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-12 text-muted-foreground leading-relaxed">
                {item.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
