"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import { faqItems } from "@/data/faq";
import { cn } from "@/lib/utils";

function FaqRow({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-white">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-slate-50 sm:px-8"
      >
        <span className="text-navy text-base font-semibold">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "glow-border text-teal flex size-8 shrink-0 items-center justify-center rounded-full bg-cyan-50",
            isOpen && "glow-border-active",
          )}
        >
          <Plus aria-hidden="true" size={16} strokeWidth={2.5} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm leading-7 text-slate-600 sm:px-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-space scroll-mt-24 bg-white">
      <div className="page-shell">
        <ScrollReveal className="max-w-2xl">
          <p className="eyebrow">Frequently asked questions</p>
          <h2 className="section-title mt-4">
            What people ask before they start.
          </h2>
        </ScrollReveal>

        <ScrollReveal className="mt-12 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200">
          {faqItems.map((item, index) => (
            <FaqRow
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex((current) => (current === index ? null : index))
              }
            />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
