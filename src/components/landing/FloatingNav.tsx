import React, { useState, useEffect } from "react";
import { FloatingNav as FloatingNavBase } from "@/components/ui/floating-navbar";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import { Home, Package, Menu, X, Sun, Moon } from "lucide-react";

const navItems = [
  { name: "Ana Sayfa", link: "/", icon: <Home className="size-4" /> },
  { name: "Ürünler", link: "/tr/products", icon: <Package className="size-4" /> },
];

export function LandingFloatingNav() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  }

  return (
    <FloatingNavBase navItems={navItems}>
      <button
        onClick={toggleTheme}
        className="relative flex items-center justify-center rounded-full p-1.5 text-neutral-600 hover:text-neutral-500 dark:text-neutral-200 dark:hover:text-neutral-100"
        aria-label="Tema değiştir"
      >
        {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
      </button>

      <Button size="sm" className="hidden rounded-full text-xs sm:inline-flex" asChild>
        <a href="/tr/contact">Bizimle İletişime Geçin</a>
      </Button>

      {/* Mobile menu */}
      <div className="sm:hidden">
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <button className="p-1 text-neutral-600 dark:text-neutral-200" aria-label="Menü">
              <Menu className="size-5" />
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="flex flex-row items-center justify-between">
              <DrawerTitle>Menü</DrawerTitle>
              <DrawerClose asChild>
                <button className="p-1" aria-label="Kapat">
                  <X className="size-5" />
                </button>
              </DrawerClose>
            </DrawerHeader>
            <nav className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  className="flex items-center gap-3 text-lg font-medium text-foreground"
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
              <hr className="my-2 border-border" />
              <Button className="w-full rounded-full" asChild>
                <a href="/tr/contact">Bizimle İletişime Geçin</a>
              </Button>
            </nav>
          </DrawerContent>
        </Drawer>
      </div>
    </FloatingNavBase>
  );
}
