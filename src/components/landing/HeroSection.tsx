import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <AuroraBackground className="min-h-screen w-full">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Ayova
          </span>{" "}
          ile İş Süreçlerinizi Dönüştürün
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Stok yönetiminden müşteri ilişkilerine, satış analizinden operasyon
          planlamaya kadar tüm iş süreçlerinizi yapay zeka destekli çözümlerle
          optimize edin.
        </p>
        <Button size="lg" className="rounded-full text-base" asChild>
          <a href="/tr/products">
            Ürünlerimizi Keşfedin
            <ArrowRight className="ml-2 size-4" />
          </a>
        </Button>
      </div>
    </AuroraBackground>
  );
}
