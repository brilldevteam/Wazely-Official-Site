"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Boxes,
  CalendarDays,
  ClipboardList,
  ContactRound,
  FileText,
  FolderKanban,
  LayoutDashboard,
  MessagesSquare,
  Package,
  Palette,
  Send,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  UsersRound,
  WandSparkles,
} from "lucide-react";
import { products } from "@/data/products";

const solutionSections = [
  {
    id: "conversations",
    label: "Customer Conversations",
    icon: MessagesSquare,
    category: "Wazely CRM / Customer relationships",
    title: "Every customer conversation,",
    accent: "in one place.",
    description:
      "Bring messages, contacts, campaigns, and team context into one shared CRM workspace.",
    capabilities: [
      { label: "Shared customer inbox", icon: MessagesSquare },
      { label: "Contact management", icon: ContactRound },
      { label: "Campaign planning", icon: Send },
      { label: "Team collaboration", icon: UsersRound },
      { label: "Follow-up workflows", icon: CalendarDays },
      { label: "Customer insights", icon: BarChart3 },
    ],
    image: "/screenshots/crm-shared-inbox.png",
    imageAlt: "Wazely CRM shared customer inbox",
    imageWidth: 1742,
    imageHeight: 903,
    href: products[0].href,
    cta: "Explore Wazely CRM",
  },
  {
    id: "operations",
    label: "Business Operations",
    icon: Boxes,
    category: "Wazely ERP / Daily operations",
    title: "Daily operations,",
    accent: "clearer at a glance.",
    description:
      "Keep purchases, inventory, reports, and everyday business activity in view.",
    capabilities: [
      { label: "Purchase workflows", icon: ClipboardList },
      { label: "Inventory visibility", icon: Package },
      { label: "Business dashboard", icon: LayoutDashboard },
      { label: "Team coordination", icon: UsersRound },
      { label: "Operational reports", icon: BarChart3 },
      { label: "Work in one place", icon: FolderKanban },
    ],
    image: "/screenshots/erp/dashboard.png",
    imageAlt: "Wazely ERP business dashboard",
    imageWidth: 1920,
    imageHeight: 950,
    href: products[1].href,
    cta: "Explore Wazely ERP",
  },
  {
    id: "brand",
    label: "Brand & Design",
    icon: Palette,
    category: "Wazely Color / Free design toolkit",
    title: "A stronger brand starts",
    accent: "with the right colors.",
    description:
      "Build brand palettes, check contrast, and export colors for the tools you use.",
    capabilities: [
      { label: "AI color palettes", icon: WandSparkles },
      { label: "Brand boards", icon: Palette },
      { label: "Contrast checks", icon: ShieldCheck },
      { label: "Color adjustments", icon: SlidersHorizontal },
      { label: "Creative exploration", icon: Sparkles },
      { label: "Ready-to-use exports", icon: FileText },
    ],
    image: "/screenshots/color-hero-light.png",
    imageAlt: "Wazely Color palette and brand board toolkit",
    imageWidth: 1200,
    imageHeight: 630,
    href: products[2].href,
    cta: "Open Wazely Color",
  },
] as const;

export function HomeSolutionTabs() {
  const [active, setActive] = useState(0);
  const [isPinned, setIsPinned] = useState(false);
  const tabsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame = 0;
    const updateActive = () => {
      frame = 0;
      const headerHeight = document.querySelector<HTMLElement>(".site-header")?.getBoundingClientRect().height ?? 0;
      const tabsRect = tabsRef.current?.getBoundingClientRect();
      const activationLine = headerHeight + (tabsRect?.height ?? 76) + 12;
      setIsPinned(Boolean(tabsRect && tabsRect.top <= headerHeight + 1 && tabsRect.bottom > headerHeight));
      let current = 0;
      solutionSections.forEach((section, index) => {
        const element = document.getElementById(`solution-${section.id}`);
        if (element && element.getBoundingClientRect().top <= activationLine) {
          current = index;
        }
      });
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActive);
    };
    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const goToSection = (event: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    const section = document.getElementById(`solution-${solutionSections[index].id}`);
    if (!section) return;
    event.preventDefault();
    const headerHeight = document.querySelector<HTMLElement>(".site-header")?.getBoundingClientRect().height ?? 0;
    const tabHeight = tabsRef.current?.getBoundingClientRect().height ?? 76;
    const top = section.getBoundingClientRect().top + window.scrollY - headerHeight - tabHeight;
    window.scrollTo({ top, behavior: "instant" });
    window.history.replaceState(null, "", `#solution-${solutionSections[index].id}`);
    setActive(index);
  };

  return (
    <div className="hv-solutions hv-scroll-solutions">
      <nav ref={tabsRef} className={`hv-tab-list hv-sticky-tabs${isPinned ? " is-pinned" : ""}`} aria-label="Wazely solution sections">
        {solutionSections.map((section, index) => {
          const Icon = section.icon;
          return (
            <a
              key={section.id}
              href={`#solution-${section.id}`}
              className={active === index ? "hv-tab is-active" : "hv-tab"}
              aria-label={section.label}
              aria-current={active === index ? "location" : undefined}
              onClick={(event) => goToSection(event, index)}
            >
              <Icon className="hv-tab-icon" size={21} strokeWidth={1.7} aria-hidden="true" />
              <span>{section.label}</span>
            </a>
          );
        })}
      </nav>
      <div className="hv-solution-sections">
        {solutionSections.map((section, index) => (
          <article
            id={`solution-${section.id}`}
            className={`hv-solution-story hv-story-${section.id}`}
            aria-labelledby={`solution-heading-${section.id}`}
            key={section.id}
          >
            <div className="hv-solution-content">
              <p className="hv-small-label">0{index + 1} / {section.category}</p>
              <h3 id={`solution-heading-${section.id}`}>
                {section.title}<br /><span>{section.accent}</span>
              </h3>
              <p className="hv-solution-description">{section.description}</p>
              <Link className="hv-pill hv-pill-dark" href={section.href}>
                {section.cta}<ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
            <div className="hv-solution-visual">
              <div className="hv-solution-image">
                <Image
                  src={section.image}
                  alt={section.imageAlt}
                  width={section.imageWidth}
                  height={section.imageHeight}
                  sizes="(max-width: 800px) 90vw, 75vw"
                />
              </div>
            </div>
            <div className="hv-solution-features" aria-label={`${section.label} features`}>
              {section.capabilities.map((capability) => {
                const Icon = capability.icon;
                return <div className="hv-solution-feature" key={capability.label}><Icon size={24} strokeWidth={1.7} aria-hidden="true" /><span>{capability.label}</span></div>;
              })}
            </div>
            <div className="hv-solution-banner">
              <p>Make this workflow fit the way your team works.</p>
              <Link className="hv-pill hv-pill-dark" href="/#contact">Talk to our team <ArrowUpRight size={18} aria-hidden="true" /></Link>
              <div className="hv-solution-banner-art" aria-hidden="true"><span /><span /><span /></div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
