import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { AnimatedHeroHeading } from "@/components/marketing/animated-hero-heading";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

export function CompanyHero() {
  return (
    <section className="hero-surface overflow-hidden pt-16 pb-18 sm:pt-22 sm:pb-24 lg:pt-26 lg:pb-28">
      <div className="page-shell text-center">
        <p className="eyebrow justify-center">Wazely business software</p>
        <AnimatedHeroHeading
          words={[
            "Two",
            "connected",
            "products.",
            "One",
            "smarter",
            "way",
            "to",
            "work.",
          ]}
          gradientWord="work."
          ariaLabel="Two connected products. One smarter way to work."
        />
        <p className="hero-copy-reveal mx-auto mt-7 max-w-3xl text-[clamp(1.05rem,2vw,1.25rem)] leading-8 text-balance text-slate-600">
          Wazely brings customer relationships and everyday business operations
          together through focused CRM and ERP products.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="gradient" size="lg">
            <Link href="#products">
              Explore Wazely products <ArrowDown aria-hidden="true" size={17} />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="#solutions">
              See how Wazely connects work
              <ArrowDown aria-hidden="true" size={17} />
            </Link>
          </Button>
        </div>

        <div className="scroll-reveal-stagger mx-auto mt-14 grid max-w-6xl gap-5 text-left sm:mt-18 lg:grid-cols-2">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={product.href}
              className="product-preview group overflow-hidden rounded-[24px] border border-slate-200 bg-white p-3 shadow-[0_30px_80px_-45px_rgba(15,29,53,.42)] transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-4 focus-visible:outline-none sm:p-4"
            >
              <div className="overflow-hidden rounded-[16px] border border-slate-200 bg-slate-50">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  width={product.slug === "erp" ? 1920 : 1672}
                  height={product.slug === "erp" ? 950 : 940}
                  priority
                  sizes="(max-width: 1024px) 94vw, 44vw"
                  className="aspect-[1.9/1] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
                />
              </div>
              <div className="flex items-center justify-between gap-4 px-2 pt-5 pb-2 sm:px-3">
                <div>
                  <p className="text-teal text-xs font-semibold tracking-[.14em] uppercase">
                    {product.category}
                  </p>
                  <h2 className="text-navy mt-1 text-xl font-semibold">
                    {product.name}
                  </h2>
                </div>
                <span className="text-teal flex size-10 shrink-0 items-center justify-center rounded-full bg-cyan-50">
                  <ArrowUpRight aria-hidden="true" size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
