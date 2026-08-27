import { ArrowUpRight, Plus } from "lucide-react";
import Link from "next/link";

import { products } from "@/data/products";

export function ProductsSection() {
  return (
    <section id="products" className="section-space scroll-mt-24 bg-white">
      <div className="page-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Wazely products</p>
          <h2 className="section-title mt-4">
            Built as a family, starting with CRM.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.name}
              className={
                product.available
                  ? "product-card product-card-active"
                  : "product-card"
              }
            >
              <div>
                {product.status ? (
                  <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                    {product.status}
                  </span>
                ) : (
                  <span className="flex size-9 items-center justify-center rounded-full border border-slate-300 text-slate-500">
                    <Plus aria-hidden="true" size={18} />
                  </span>
                )}
                <h3 className="text-navy mt-8 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {product.name}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                  {product.description}
                </p>
              </div>
              {product.href && product.cta ? (
                <Link
                  href={product.href}
                  className="text-teal mt-10 inline-flex items-center gap-2 self-start rounded-sm text-sm font-semibold focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-4 focus-visible:outline-none"
                >
                  {product.cta} <ArrowUpRight aria-hidden="true" size={17} />
                </Link>
              ) : (
                <p className="mt-10 text-sm font-medium text-slate-500">
                  Designed to expand
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
