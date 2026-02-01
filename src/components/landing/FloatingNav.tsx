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
import { Home, Package, Menu, X, Sun, Moon, Globe } from "lucide-react";
import ContactDrawer from "./ContactDrawer";
import type { Lang, Translations } from "@/lib/i18n";

interface Props {
  lang: Lang;
  navbar: Translations["navbar"];
  contactDrawer: Translations["contactDrawer"];
  currentPath: string;
}

export function LandingFloatingNav({ lang, navbar, contactDrawer, currentPath }: Props) {
  const [isDark, setIsDark] = useState(true);

  const otherLang: Lang = lang === "en" ? "tr" : "en";

  const navItems = [
    { name: navbar.home, link: `/${lang}`, icon: <Home className="size-4" /> },
    { name: navbar.products, link: `/${lang}/products`, icon: <Package className="size-4" /> },
  ];

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const update = () => {
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
    };

    if (document.startViewTransition) {
      document.startViewTransition(update);
    } else {
      update();
    }
  }

  function getSwitchedLangPath() {
    const path = typeof window !== "undefined" ? window.location.pathname : currentPath;
    return path.replace(`/${lang}`, `/${otherLang}`);
  }

  return (
    <FloatingNavBase
      navItems={navItems}
      logo={
        <a href={`/${lang}`} className="flex items-center">
          <img src="/logo-light.png" alt="Ayova" className="block w-32 dark:hidden" />
          <img src="/logo-dark.png" alt="Ayova" className="hidden w-32 dark:block" />
        </a>
      }
    >
      {/* Language switcher */}
      <a
        href={getSwitchedLangPath()}
        className="relative flex items-center justify-center gap-1 rounded-full p-1.5 text-xs font-medium text-neutral-600 hover:text-neutral-500 dark:text-neutral-200 dark:hover:text-neutral-100"
        aria-label={navbar.language}
      >
        <Globe className="size-4" />
        <span className="uppercase">{otherLang}</span>
      </a>

      <button
        onClick={toggleTheme}
        className="relative flex items-center justify-center rounded-full p-1.5 text-neutral-600 hover:text-neutral-500 dark:text-neutral-200 dark:hover:text-neutral-100"
        aria-label={navbar.theme}
      >
        {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
      </button>

      <ContactDrawer contactDrawer={contactDrawer}>
        <Button size="sm" className="hidden cursor-pointer rounded-full text-xs sm:inline-flex">
          {navbar.contact}
        </Button>
      </ContactDrawer>

      {/* Mobile menu */}
      <div className="sm:hidden">
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <button className="p-1 text-neutral-600 dark:text-neutral-200" aria-label={navbar.menu}>
              <Menu className="size-5" />
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="flex flex-row items-center justify-between">
              <DrawerTitle>{navbar.menu}</DrawerTitle>
              <DrawerClose asChild>
                <button className="p-1" aria-label="Close">
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
              {/* Mobile language switcher */}
              <a
                href={getSwitchedLangPath()}
                className="flex items-center gap-3 text-lg font-medium text-foreground"
              >
                <Globe className="size-4" />
                {navbar.language}
              </a>
              <hr className="my-2 border-border" />
              <ContactDrawer contactDrawer={contactDrawer}>
                <Button className="w-full cursor-pointer rounded-full">
                  {navbar.contact}
                </Button>
              </ContactDrawer>
            </nav>
          </DrawerContent>
        </Drawer>
      </div>
    </FloatingNavBase>
  );
}
