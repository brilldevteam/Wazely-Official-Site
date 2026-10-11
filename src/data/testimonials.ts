// No real Wazely customer testimonials exist yet. Each entry below is an
// explicit placeholder, not a fabricated quote, so the component renders an
// obvious "needs real content" state instead of something that could pass
// for a genuine review. Replace every field before this ships with real
// testimonials, and swap TestimonialsSection's placeholder styling for the
// real-card styling once you do (see the component file).
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: readonly Testimonial[] = [
  {
    quote: "Add a real customer quote here.",
    name: "Customer name",
    role: "Role, company",
  },
  {
    quote: "Add a real customer quote here.",
    name: "Customer name",
    role: "Role, company",
  },
  {
    quote: "Add a real customer quote here.",
    name: "Customer name",
    role: "Role, company",
  },
  {
    quote: "Add a real customer quote here.",
    name: "Customer name",
    role: "Role, company",
  },
  {
    quote: "Add a real customer quote here.",
    name: "Customer name",
    role: "Role, company",
  },
  {
    quote: "Add a real customer quote here.",
    name: "Customer name",
    role: "Role, company",
  },
] as const;
