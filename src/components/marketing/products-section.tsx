import { ArrowUpRight, CheckCircle2, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import { products } from "@/data/products";

export function ProductsSection() {
  return (
    <section id="products" className="section-space scroll-mt-24 bg-white">
      <div className="page-shell">
        <div>
          <ScrollReveal className="max-w-4xl">
            <p className="eyebrow">Wazely products</p>
            <h2 className="section-title mt-4">
              Focused products for connected business work.
            </h2>
            <p className="section-copy mt-5">
              Choose the workspace that matches the work in front of you. CRM
              connects customer relationships, ERP connects business operations,
              and Color is a free AI toolkit for building your brand palette.
            </p>
          </ScrollReveal>
          <div className="scroll-reveal-stagger mt-12 grid gap-5 lg:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.name}
                className={`product-card product-card-active product-card-${product.slug}`}
              >
                <div>
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      width={product.imageWidth}
                      height={product.imageHeight}
                      sizes="(max-width: 1024px) 94vw, 46vw"
                      className="aspect-[1.9/1] w-full object-cover object-top"
                    />
                  </div>
                  <div className="mt-8">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                        <CheckCircle2 aria-hidden="true" size={14} />
                        {product.status}
                      </span>
                      <span
                        className={
                          product.tier === "Pro"
                            ? "inline-flex rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white dark:bg-violet-500"
                            : "inline-flex rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700 dark:text-cyan-300"
                        }
                      >
                        {product.tier}
                      </span>
                    </div>
                    <p className="mt-3 text-xs font-semibold tracking-[.12em] text-slate-500 uppercase">
                      {product.category}
                    </p>
                  </div>
                  <h3 className="text-navy mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {product.name}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                    {product.description}
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {product.capabilities.map((capability) => (
                    <span
                      key={capability}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {capability}
                    </span>
                  ))}
                </div>
                <Link
                  href={product.href}
                  className="text-teal mt-10 inline-flex items-center gap-2 self-start rounded-sm text-sm font-semibold focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-4 focus-visible:outline-none"
                >
                  {product.cta} <ArrowUpRight aria-hidden="true" size={17} />
                </Link>
              </article>
            ))}

            <article className="product-card product-card-soon flex flex-col">
              <div>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <Image
                    src="/screenshots/coming-soon.png"
                    alt="Coming soon — the next Wazely product"
                    width={1600}
                    height={842}
                    sizes="(max-width: 1024px) 94vw, 46vw"
                    className="aspect-[1.9/1] w-full object-cover object-center"
                  />
                </div>
                <div className="mt-8">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                    <Clock aria-hidden="true" size={14} />
                    Coming soon
                  </span>
                  <p className="mt-3 text-xs font-semibold tracking-[.12em] text-slate-500 uppercase">
                    In development
                  </p>
                </div>
                <h3 className="text-navy mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
                  The next Wazely product
                </h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                  We&rsquo;re building the next focused workspace for connected
                  business work. Details soon.
                </p>
              </div>
              <p className="mt-10 self-start text-sm font-semibold text-slate-400">
                Stay tuned
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
