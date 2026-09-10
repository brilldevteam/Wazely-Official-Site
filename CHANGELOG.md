# Changelog

All notable changes to this project are documented in this file.

## [Unreleased]

### Added

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

- Hero section no longer shows a duplicate "Book a demo" button.
- Product overview buttons are left-aligned and use the gradient button style.
- About section's "Book a demo" button moved under the heading and
  right-aligned.
- Primary button variant is now legible in dark mode.
- Feature showcase sections now keep their copy above the product screenshot
  on mobile, with tighter internal spacing and clearer separation between
  consecutive sections while preserving the desktop alternating layout.

### Fixed

- Dashboard screenshot fragments used by the hero animation are trimmed tight
  with rounded corners, removing stray background edges around the cards.
