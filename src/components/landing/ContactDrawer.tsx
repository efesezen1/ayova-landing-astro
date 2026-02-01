"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Mail, ArrowRight, X, Check, Copy } from "lucide-react";
import { toast } from "sonner";
import type { Translations } from "@/lib/i18n";

interface ContactDrawerProps {
  children: React.ReactNode;
  contactDrawer: Translations["contactDrawer"];
}

export default function ContactDrawer({
  children,
  contactDrawer: t,
}: ContactDrawerProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleMailRedirect = () => {
    window.location.href = "mailto:info@ayova.co";
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("info@ayova.co");
      setIsCopied(true);
      toast.success(t.copied, {
        description: t.copiedDesc,
        duration: 3000,
      });
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
      toast.error(t.copyFailed, {
        description: t.copyFailedDesc,
        duration: 3000,
      });
    }
  };

  return (
    <Drawer direction="bottom">
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="text-center">
            <DrawerTitle className="mb-2 text-2xl font-bold">
              {t.title}
            </DrawerTitle>
            <DrawerDescription>
              {t.description}
            </DrawerDescription>
          </DrawerHeader>

          <div className="px-4 pb-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCopyEmail}
              className="mb-6 flex cursor-pointer items-center justify-center space-x-3 rounded-lg border border-border bg-muted/50 p-4 transition-all duration-200 hover:bg-muted"
            >
              <Mail className="h-6 w-6 text-foreground" />
              <span className="font-medium text-foreground">
                info@ayova.co
              </span>
              {isCopied ? (
                <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
              ) : (
                <Copy className="h-4 w-4 text-muted-foreground" />
              )}
            </motion.div>

            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleMailRedirect}
                className="flex w-full items-center justify-center space-x-2 rounded-full bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-primary/90"
              >
                <span>{t.openEmail}</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>

              <DrawerClose asChild>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center space-x-2 rounded-full border border-border bg-muted px-6 py-3 font-medium text-muted-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
                >
                  <X className="h-4 w-4" />
                  <span>{t.cancel}</span>
                </motion.button>
              </DrawerClose>
            </div>
          </div>

          <DrawerFooter className="pt-0">
            <p className="text-center text-xs text-muted-foreground">
              {t.footer}
            </p>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
