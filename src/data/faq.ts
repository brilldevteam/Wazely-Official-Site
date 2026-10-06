export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: readonly FaqItem[] = [
  {
    question: "Can I use Wazely CRM and Wazely ERP separately?",
    answer:
      "Yes. CRM and ERP are two independent products. Start with whichever one matches the work in front of you, or run both if you need customer conversations and business operations connected.",
  },
  {
    question: "Does Wazely CRM replace WhatsApp Business?",
    answer:
      "Wazely connects to your WhatsApp Business or Cloud API account, so your agents work from a shared inbox under one business number instead of a personal phone, with contact history and assignment visible to the whole team.",
  },
  {
    question: "Can a quotation turn into an invoice without re-entering it?",
    answer:
      "Yes. In Wazely ERP, an accepted quotation converts directly into a sales invoice, keeping customer, item, and pricing details intact instead of retyping them.",
  },
  {
    question: "Does Wazely ERP handle payments in more than one currency?",
    answer:
      "Customer and vendor payments support recording a transaction currency and exchange rate alongside your company's base currency, so foreign-currency receipts stay accurate in your books.",
  },
  {
    question: "Is Wazely Color actually free?",
    answer:
      "Yes. Wazely Color is a free AI-powered brand color toolkit: generate palettes, build brand boards, check WCAG contrast, and export to CSS, Tailwind, or Figma.",
  },
  {
    question: "Can I control what each team member can see or do?",
    answer:
      "Yes. Both products support role-based permissions, so you can control access by action (view, create, update, manage) rather than giving every teammate full access.",
  },
] as const;
