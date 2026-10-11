import { ArrowUpRight, BookOpen, MessageCircle } from "lucide-react";
import Link from "next/link";

import { ContactForm } from "@/components/marketing/contact-form";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

// Every path here is a real, already-existing channel (the live demo signup,
// the real Knowledge Base, the real social accounts) — no new contact email
// or phone number is invented for this section.
const channels = [
  {
    icon: MessageCircle,
    title: "Talk to our team",
    description: "See Wazely CRM and ERP in a live walkthrough.",
    ctaLabel: "Book a demo",
    href: siteConfig.demoUrl,
  },
  {
    icon: BookOpen,
    title: "Browse the help docs",
    description: "Guides for setting up CRM, ERP, and Color.",
    ctaLabel: "Visit Knowledge Base",
    href: siteConfig.knowledgeBaseUrl,
  },
] as const;

export function ContactSection() {
  return (
    <section
      id="contact"
      className="grid-texture section-space scroll-mt-24 bg-white"
    >
      <div className="page-shell relative z-10">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Get in touch</p>
          <h2 className="section-title mt-4">
            Questions about Wazely? Let&rsquo;s talk.
          </h2>
          <p className="section-copy mt-5">
            Book a live walkthrough, browse the help docs, or follow along
            for updates.
          </p>
        </ScrollReveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 lg:grid-cols-2 lg:items-stretch">
          <ScrollReveal stagger className="flex flex-col gap-5">
            {channels.map(({ icon: Icon, title, description, ctaLabel, href }) => (
              <div
                key={title}
                className="glow-border flex flex-1 flex-col justify-between rounded-[26px] border border-slate-200 bg-white p-7"
              >
                <div>
                  <span className="glow-border glow-border-active text-teal flex size-12 items-center justify-center rounded-2xl bg-cyan-50">
                    <Icon aria-hidden="true" size={22} />
                  </span>
                  <h3 className="text-navy mt-5 text-lg font-semibold tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </div>
                <Button
                  asChild
                  variant="secondary"
                  size="default"
                  className="mt-6 self-start"
                >
                  <Link href={href} target="_blank" rel="noopener noreferrer">
                    {ctaLabel} <ArrowUpRight aria-hidden="true" size={17} />
                  </Link>
                </Button>
              </div>
            ))}
          </ScrollReveal>

          <ScrollReveal className="h-full">
            <ContactForm />
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-12 flex items-center justify-center gap-4">
          <p className="text-sm font-medium text-slate-500">Follow Wazely</p>
          <div className="flex gap-2">
            {Object.entries(siteConfig.socialLinks).map(([network, href]) => (
              <Link
                key={network}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal hover:border-teal flex size-9 items-center justify-center rounded-full border border-slate-200 text-sm font-semibold text-slate-600 capitalize transition-colors focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:outline-none"
                aria-label={network}
              >
                {network.slice(0, 1).toUpperCase()}
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
