import React from "react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

export function FloatingNav({
  navItems,
  logo,
  className,
  children,
}: {
  navItems: NavItem[];
  logo?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "fixed inset-x-0 top-4 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-transparent bg-white px-8 py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2] dark:bg-black",
        className
      )}
    >
      {logo}
      {navItems.map((navItem, idx) => {
        const isActive =
          typeof window !== "undefined" &&
          window.location.pathname.replace(/\/$/, "") ===
            navItem.link.replace(/\/$/, "");

        return (
          <a
            key={`nav-${idx}`}
            href={navItem.link}
            onClick={
              isActive
                ? (e: React.MouseEvent) => e.preventDefault()
                : undefined
            }
            className={cn(
              "relative flex items-center space-x-1",
              isActive
                ? "text-neutral-900 dark:text-white cursor-default"
                : "text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden text-sm sm:block">{navItem.name}</span>
          </a>
        );
      })}
      {children}
    </div>
  );
}
