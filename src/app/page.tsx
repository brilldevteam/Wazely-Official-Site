import { ArrowDown, ArrowUpRight, BarChart3, Bot, ContactRound, FileText, Globe2, Layers3, MessageCircle, MessagesSquare, Package, Palette, ReceiptText, Send, ShieldCheck, Sparkles, WandSparkles, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ContactForm } from "@/components/marketing/contact-form";
import { HomeSolutionTabs } from "@/components/marketing/home-solution-tabs";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import { faqItems } from "@/data/faq";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site";

const steps = [
  { number: "01", title: "Start with the work", copy: "Choose the product that fits your immediate need: customer relationships, operations, or brand color." },
  { number: "02", title: "Bring your team in", copy: "Set up the people, information, and workflows your team uses every day." },
  { number: "03", title: "Connect the details", copy: "Give conversations, sales, finance, and reporting a clearer place in your business." },
  { number: "04", title: "Keep moving", copy: "Use the knowledge base and product tools as your processes evolve." },
];

const sampleTestimonials = [
  { quote: "Our team can see the conversation and the next step in one place. It makes follow-ups feel much easier to manage.", name: "Maya R.", role: "Sample CRM customer", initials: "MR" },
  { quote: "We spend less time looking for the right numbers and more time making decisions together.", name: "Omar A.", role: "Sample operations lead", initials: "OA" },
  { quote: "Getting a consistent color direction for our brand became a much simpler part of the process.", name: "Nadia K.", role: "Sample design user", initials: "NK" },
];

const productIcons = [
  [
    { icon: MessagesSquare, label: "Shared inbox" },
    { icon: ContactRound, label: "Contacts" },
    { icon: Send, label: "Campaigns" },
    { icon: Bot, label: "Automation" },
  ],
  [
    { icon: Layers3, label: "Operations" },
    { icon: Package, label: "Inventory" },
    { icon: ReceiptText, label: "Invoices" },
    { icon: BarChart3, label: "Reporting" },
  ],
  [
    { icon: Palette, label: "Color palettes" },
    { icon: WandSparkles, label: "AI tools" },
    { icon: ShieldCheck, label: "Contrast checks" },
    { icon: FileText, label: "Exports" },
  ],
] as const;

const productIllustrations = [
  { src: "/illustrations/product-crm-illustration-v2.webp", width: 411, height: 420 },
  { src: "/illustrations/product-erp-illustration-v2.webp", width: 416, height: 420 },
  { src: "/illustrations/product-color-illustration-v2.webp", width: 484, height: 420 },
] as const;

export default function Home() {
  return <div className="video-home">
    <section className="hv-hero" aria-labelledby="home-heading">
      <div className="page-shell hv-hero-inner">
        <p className="hv-hero-eyebrow">Connected software for modern businesses</p>
        <h1 id="home-heading">Your business, working<br className="hv-desktop-break" /> better together.</h1>
        <p className="hv-hero-subtitle">Bring customer conversations, sales, finance, and daily operations into focus with Wazely CRM and ERP, built for growing teams across the GCC.</p>
        <div className="hv-hero-actions">
          <Link className="hv-pill hv-pill-dark" href={siteConfig.demoUrl}><MessageCircle size={19} aria-hidden="true" />Try Wazely CRM</Link>
          <Link className="hv-pill hv-pill-outline" href="#contact">Get in touch</Link>
        </div>
        <a className="hv-hero-scroll" href="#platform" aria-label="Scroll to explore Wazely"><ArrowDown size={18} /></a>
      </div>
    </section>

    <section id="platform" className="hv-proof" aria-label="Wazely at a glance">
      <div className="page-shell hv-proof-highlights">
        <div className="hv-proof-item"><span className="hv-proof-symbol hv-proof-symbol-green"><Sparkles size={31} strokeWidth={1.7} aria-hidden="true" /></span><p><strong>3 products</strong><span>One Wazely family</span></p></div>
        <div className="hv-proof-item"><span className="hv-proof-symbol hv-proof-symbol-gold"><Globe2 size={31} strokeWidth={1.7} aria-hidden="true" /></span><p><strong>Across the GCC</strong><span>Built for growing teams</span></p></div>
        <div className="hv-proof-item"><span className="hv-proof-symbol hv-proof-symbol-green"><Palette size={31} strokeWidth={1.7} aria-hidden="true" /></span><p><strong>Free color toolkit</strong><span>Wazely Color</span></p></div>
      </div>
      <div className="hv-proof-marquee" aria-label="Wazely products and capabilities">
        <div className="hv-proof-track">
          {[0, 1].map((copy) => <div className="hv-proof-set" aria-hidden={copy === 1} key={copy}>
            <span><MessageCircle size={27} aria-hidden="true" /> Wazely CRM</span>
            <span><Layers3 size={28} aria-hidden="true" /> Wazely ERP</span>
            <span><Palette size={27} aria-hidden="true" /> Wazely Color</span>
            <span><ArrowUpRight size={26} aria-hidden="true" /> Campaigns</span>
            <span><Wallet size={28} aria-hidden="true" /> Accounting</span>
            <span><BarChart3 size={29} aria-hidden="true" /> Reporting</span>
          </div>)}
        </div>
      </div>
    </section>

    <section id="about" className="hv-intro hv-space" aria-labelledby="wazely-intro-heading">
      <div className="page-shell">
        <ScrollReveal className="hv-intro-statement">
          <p className="hv-intro-pill">Built around the way work happens</p>
          <h2 id="wazely-intro-heading">Wazely helps teams bring customer conversations, daily operations, and brand decisions into focus.</h2>
        </ScrollReveal>
        <div className="hv-intro-pillars">
          <ScrollReveal className="hv-intro-pillar"><span className="hv-pillar-icon hv-pillar-coral"><MessagesSquare size={43} strokeWidth={1.45} aria-hidden="true" /></span><strong>CRM</strong><p>Customer conversations<br />and relationships</p></ScrollReveal>
          <ScrollReveal className="hv-intro-pillar"><span className="hv-pillar-icon hv-pillar-green"><Layers3 size={43} strokeWidth={1.45} aria-hidden="true" /></span><strong>ERP</strong><p>Sales, finance,<br />and operations</p></ScrollReveal>
          <ScrollReveal className="hv-intro-pillar"><span className="hv-pillar-icon hv-pillar-gold"><Palette size={43} strokeWidth={1.45} aria-hidden="true" /></span><strong>Color</strong><p>Free brand palettes<br />and design tools</p></ScrollReveal>
        </div>
      </div>
    </section>

    <section id="solutions" className="hv-solutions-section hv-space">
      <div className="page-shell">
        <ScrollReveal className="hv-center-heading hv-solutions-heading">
          <p className="hv-solutions-overline"><span className="hv-mini-marks" aria-hidden="true"><span>C</span><span>E</span><span>W</span></span><strong>CRM · ERP · COLOR</strong> Built for the work behind your business</p>
          <h2>Specialized solutions for the work that moves your business.</h2>
          <p>Explore the tools Wazely offers for customer conversations, daily operations, and brand design.</p>
        </ScrollReveal>
        <HomeSolutionTabs />
      </div>
    </section>

    <section id="products" className="hv-products-section hv-space"><div className="page-shell"><ScrollReveal className="hv-dark-heading"><p className="hv-section-kicker">/ The Wazely product family</p><h2>Find the right tool.<br /><span>Keep the work moving.</span></h2><p>Start with one product or explore the whole family.</p></ScrollReveal><div className="hv-product-rows">{products.map((product, index) => <Link href={product.href} key={product.slug} className="hv-product-row"><span className="hv-product-number">0{index + 1}</span><span className="hv-product-name">{product.name}</span><span className="hv-product-illustration"><Image src={productIllustrations[index].src} alt="" width={productIllustrations[index].width} height={productIllustrations[index].height} sizes="(max-width: 650px) 120px, 160px" /></span><span className="hv-product-detail"><span className="hv-product-category">{product.category}</span><span className="hv-product-icons" aria-label={`${product.name} capabilities`}>{productIcons[index].map(({ icon: Icon, label }) => <span className="hv-product-icon-tile" title={label} key={label}><Icon size={27} strokeWidth={1.7} aria-hidden="true" /><span className="sr-only">{label}</span></span>)}</span></span><span className="hv-product-arrow"><ArrowUpRight size={24} aria-hidden="true" /></span></Link>)}</div><div className="hv-dark-cta"><span>Ready to see Wazely in action?</span><Link href={siteConfig.demoUrl} className="hv-pill hv-pill-light">Try the demo <ArrowUpRight size={17} aria-hidden="true" /></Link></div></div></section>

    <section className="hv-process hv-space"><div className="page-shell"><ScrollReveal className="hv-center-heading"><p className="hv-section-kicker">/ A simple way to begin</p><h2>Start where you are.<br /><span>Build from there.</span></h2><p>Choose the workspace that answers today’s needs and make it part of your team’s everyday flow.</p></ScrollReveal><div className="hv-process-grid">{steps.map((step) => <ScrollReveal key={step.number} className="hv-process-step"><span>STEP {step.number}</span><div className="hv-process-line" /><h3>{step.title}</h3><p>{step.copy}</p></ScrollReveal>)}</div></div></section>

    <section id="resources" className="hv-faq hv-space"><div className="page-shell hv-faq-grid"><div><p className="hv-section-kicker">/ Before you get started</p><h2>Good questions.<br /><span>Clear answers.</span></h2><p>Want the details? Our knowledge base has guides for getting set up and making the most of Wazely.</p><Link href="/knowledge-base" className="hv-text-link">Visit the knowledge base <ArrowUpRight size={18} aria-hidden="true" /></Link></div><div className="hv-faq-list">{faqItems.map((item) => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></div></section>

    <section className="hv-consult" aria-labelledby="consult-heading">
      <div className="page-shell">
        <ScrollReveal className="hv-consult-panel">
          <div className="hv-consult-copy">
            <p className="hv-consult-eyebrow"><span aria-hidden="true" /> A clearer way forward</p>
            <h2 id="consult-heading">Still have questions?<br /><span>Let’s work through them.</span></h2>
            <p>Tell us what your team is trying to improve. We’ll help you find the right Wazely product and a practical place to start.</p>
          </div>
          <div className="hv-consult-action">
            <span className="hv-consult-mark" aria-hidden="true"><MessageCircle size={36} strokeWidth={1.5} /></span>
            <p>Start with a conversation.</p>
            <Link href="#contact" className="hv-consult-link">Talk to our team <ArrowUpRight size={23} aria-hidden="true" /></Link>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section id="testimonials" className="hv-testimonials hv-space" aria-labelledby="testimonials-heading">
      <div className="page-shell">
        <ScrollReveal className="hv-testimonials-heading">
          <div><p className="hv-section-kicker">/ Sample testimonials</p><h2 id="testimonials-heading">The difference shows up<br /><span>in the everyday.</span></h2></div>
          <p>Example quotes across customer relationships, operations, and design.</p>
        </ScrollReveal>
        <div className="hv-testimonials-grid">
          {sampleTestimonials.map((testimonial, index) => <ScrollReveal className={`hv-testimonial-card${index === 0 ? " hv-testimonial-featured" : ""}`} key={testimonial.name}>
            <span className="hv-testimonial-quote" aria-hidden="true">“</span>
            <blockquote>{testimonial.quote}</blockquote>
            <div className="hv-testimonial-person"><span className="hv-testimonial-avatar" aria-hidden="true">{testimonial.initials}</span><div><strong>{testimonial.name}</strong><span>{testimonial.role}</span></div></div>
          </ScrollReveal>)}
        </div>
      </div>
    </section>

    <section id="contact" className="hv-contact hv-space" aria-labelledby="contact-heading">
      <div className="page-shell hv-contact-layout">
        <div className="hv-contact-copy">
          <p className="hv-section-kicker">/ Let’s talk</p>
          <h2 id="contact-heading">Let’s make the<br /><span>next step clear.</span></h2>
          <p className="hv-contact-intro">Tell us what your team is working through. We’ll help you find a practical starting point with Wazely.</p>
          <div className="hv-contact-note"><span className="hv-contact-note-icon"><MessageCircle size={23} strokeWidth={1.6} aria-hidden="true" /></span><p>A few details are enough to start the conversation.</p></div>
          <Link href={siteConfig.demoUrl} className="hv-contact-secondary">Explore Wazely CRM <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
        <div className="hv-contact-form-wrap">
          <div className="hv-contact-form-heading"><span>01 / GET IN TOUCH</span><h3>Send us a note</h3><p>Share your question or idea below.</p></div>
          <ContactForm />
        </div>
      </div>
    </section>
  </div>;
}
