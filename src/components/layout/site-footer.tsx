import Link from "next/link";

import { BrandLogo } from "@/components/layout/brand-logo";
import { footerGroups } from "@/data/navigation";

export function SiteFooter() {
  return (
    <footer className="site-footer border-t border-slate-200 bg-white py-14 sm:py-18">
      <div className="page-shell grid gap-12 lg:grid-cols-[1.5fr_2fr]">
        <div className="max-w-sm">
          <BrandLogo />
          <p className="mt-5 text-sm leading-6 text-slate-600">
            Wazely creates connected software that helps teams handle customer
            relationships, communication, workflows, and everyday operational
            work.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-navy text-sm font-semibold">{group.title}</h2>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      className="hover:text-teal text-sm text-slate-600 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:outline-none"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h2 className="text-navy text-sm font-semibold">Legal</h2>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Legal links will appear here when available.
            </p>
          </div>
        </div>
      </div>
      <div className="page-shell mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Wazely
      </div>
    </footer>
  );
}
