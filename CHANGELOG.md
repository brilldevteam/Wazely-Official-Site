# Changelog

All notable changes to this project are documented in this file.

## [Unreleased]

### Added

- A redesigned homepage with solution stories for CRM, ERP, and Wazely Color,
  illustrated product rows, a consultation callout, and clearly labeled sample
  testimonials.
- New product illustrations used by the homepage product family section.
- Separate Wazely CRM and Wazely ERP destinations in the desktop and mobile
  Knowledge Base navigation, with descriptive product-specific menu entries.
- A responsive "Coming soon" card that previews the next Wazely product in
  both light and dark modes.
- Wazely Color as a third product across the company hero, product grid,
  desktop and mobile product navigation, and footer, with its free AI color
  toolkit capabilities and product screenshot.
- Product-aware knowledge-base destinations so the ERP page links directly to
  ERP help while CRM continues to use the Enterprise knowledge base.
- A company-level homepage that presents Wazely CRM and Wazely ERP as two
  available products with clear paths into each product experience.
- Dedicated `/crm` and `/erp` product pages with route-specific metadata,
  product positioning, feature showcases, calls to action, and sitemap entries.
- Wazely ERP marketing content using approved dashboard, quotation, accounting,
  and reporting screenshots from the ERP knowledge-base assets.
- A Wazely ERP hero with the same character reveal and scroll-driven dashboard
  assembly experience as Wazely CRM, using ERP-specific dashboard regions.
- Three Wazely ERP pricing plans—Starter, Business, and Enterprise—with
  Business highlighted as the most popular option and tailored-support guidance
  for Enterprise customers.
- Product navigation for Wazely CRM and Wazely ERP across desktop, mobile, and
  footer navigation.
- **Hero scroll-assembly animation** — dashboard fragments cropped from the
  Wazely CRM screenshot fly in from the viewport edges and lock into a
  hole-punched base image as the hero section scrolls. The assembly is driven
  by a scroll listener rather than `animation-timeline`, so it works in every
  browser; visitors with reduced motion enabled or without JavaScript simply
  see the completed screenshot.
- Staggered on-scroll reveal animations wired across the marketing sections
  (capability grid, company intro, CTAs, feature showcase, pricing, product
  overview, products).

### Changed

- Homepage navigation, contact form presentation, and section typography now
  follow the updated Wazely design; the main header remains visible above the
  sticky solution tabs while visitors scroll or switch sections.
- The homepage now moves from the four-step process directly into the FAQ,
  consultation callout, testimonials, and contact section.
- Wazely Color product previews now use the light ChromaForge hero artwork
  across the homepage hero strip and product catalog, served from a new asset
  URL so deployed sites do not reuse the previous dark preview from cache.
- Homepage product cards now use a centered two-column catalog layout with
  larger product previews, and the company hero copy is more compact.
- Company messaging and product layouts now support three focused products,
  including responsive three-column presentation on larger screens.
- Demo calls to action now use the clearer "Try the demo" wording.
- Knowledge-base links open safely in a new tab, while Wazely Color product
  links keep visitors in the current tab for a continuous product journey.
- Shared company, CRM, and ERP hero headings now use a smaller responsive type
  scale and wider measure to stay near two lines on desktop.
- The ERP hero description now uses a wider desktop measure to avoid an
  unnecessary third line.
- The ERP hero heading now uses a deliberate desktop line break for a balanced
  two-line composition.
- Large section and final CTA headings now share a smaller responsive scale and
  wider measure, keeping homepage, CRM, and ERP headings within two desktop
  lines wherever the available layout width allows.
- Homepage messaging now represents the Wazely company and its CRM and ERP
  product family instead of presenting the entire site as CRM-only.
- Existing detailed CRM sections and CRM pricing now live on the dedicated CRM
  product page.
- Hero section no longer shows a duplicate "Book a demo" button.
- Product overview buttons are left-aligned and use the gradient button style.
- About section's "Book a demo" button moved under the heading and
  right-aligned.
- Primary button variant is now legible in dark mode.
- Feature showcase sections now keep their copy above the product screenshot
  on mobile, with tighter internal spacing and clearer separation between
  consecutive sections while preserving the desktop alternating layout.

### Fixed

- Mobile solution tabs now appear when they reach their sticky position below
  the main header, avoiding a clipped tab bar at the bottom of the viewport.
- Centered the visible icon-and-copy column within each mobile proof row,
  keeping the dividers and row content aligned to the same section center.
- The Wazely symbol keeps its color in the dark header while the wordmark
  switches to white; the mobile theme control now sits beside the menu button.
- Mobile solution tabs now expand only the active section label while keeping
  the other two as icon buttons, updating as each story reaches the sticky tabs.
- Centered the three homepage proof highlights as a consistent column on mobile.
- Dark-mode navigation now keeps the logo, links, mobile menu button, and
  desktop appearance toggle visible against the header.
- The homepage contact form stays visually integrated with its light card in
  dark mode, without a contrasting inner panel or stray border.
- Solution tab links account for the height of both navigation bars, so each
  selected story begins below them.
- Scroll reveal motion now uses a consistent Intersection Observer fallback,
  ensuring all three CRM and all three ERP feature showcases animate when they
  enter the viewport even without full CSS scroll-timeline support.
- Dashboard screenshot fragments used by the hero animation are trimmed tight
  with rounded corners, removing stray background edges around the cards.
- The ERP hero now uses a dedicated fully light base dashboard asset with the
  animated regions removed, preventing duplicate blocks from showing beneath
  the flying scroll-assembly pieces.
