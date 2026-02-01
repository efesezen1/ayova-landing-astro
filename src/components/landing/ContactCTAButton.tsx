"use client";

import React from "react";
import ContactDrawer from "./ContactDrawer";
import type { Translations } from "@/lib/i18n";

interface Props {
  label: string;
  contactDrawer: Translations["contactDrawer"];
  variant?: "primary" | "white";
}

export function ContactCTAButton({ label, contactDrawer, variant = "primary" }: Props) {
  const className =
    variant === "white"
      ? "inline-block rounded-full border border-white/30 bg-white/90 px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg shadow-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-blue-700 hover:shadow-white/30 cursor-pointer"
      : "inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 cursor-pointer";

  return (
    <ContactDrawer contactDrawer={contactDrawer}>
      <button className={className}>{label}</button>
    </ContactDrawer>
  );
}
