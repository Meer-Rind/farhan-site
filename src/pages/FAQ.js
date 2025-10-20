// src/pages/FAQ.js
import React from "react";
import {
  ChevronDown,
  Search,
  Mail,
  Phone,
  CalendarDays,
  HelpCircle,
  ShieldCheck,
  Info,
  X,
} from "lucide-react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [query, setQuery] = React.useState("");

  // FAQs (same content)
  const faqs = React.useMemo(
    () => [
      {
        question: "What services do you offer?",
        answer:
          "We offer comprehensive e-commerce management services including TikTok Shop optimization, eBay store management, Etsy shop development, Temu store setup, Walmart Marketplace integration, and Mercury business consulting services.",
      },
      {
        question: "How long does it take to see results?",
        answer:
          "Most clients see initial results within 2–4 weeks, with significant growth typically occurring within 3–6 months. The timeline depends on your specific goals, current platform status, and market conditions.",
      },
      {
        question: "Do you offer custom packages?",
        answer:
          "Yes, we create custom service packages tailored to your specific business needs, goals, and budget. Contact us for a personalized consultation and quote.",
      },
      {
        question: "What platforms do you work with?",
        answer:
          "We specialize in TikTok Shop, eBay, Etsy, Temu, and Walmart Marketplace, plus comprehensive business consulting through our Mercury services.",
      },
      {
        question: "How do you measure success?",
        answer:
          "We track KPIs such as sales growth, conversion rate, ROAS, customer engagement, and platform-specific metrics aligned to your goals.",
      },
      {
        question: "What is your pricing structure?",
        answer:
          "Pricing varies by scope and platform complexity. We offer both monthly retainers and project-based pricing. Get in touch for a tailored quote.",
      },
      {
        question: "Do you provide ongoing support?",
        answer:
          "Yes. We provide 24/7 customer support for all clients. You’ll receive proactive updates and iterative strategy adjustments as needed.",
      },
      {
        question: "How do I get started?",
        answer:
          "Book a free consultation. We’ll review your goals, audit your current setup, and share a clear plan with timelines and deliverables.",
      },
      {
        question:
          "Can you integrate with my existing tools (Shopify, CRM, ad platforms)?",
        answer:
          "Absolutely. We routinely integrate storefronts, ERPs, CRMs, analytics, and ad platforms, ensuring clean data flow and accurate reporting.",
      },
      {
        question:
          "Do you sign NDAs and follow compliance best practices?",
        answer:
          "Yes. We can sign mutual NDAs on request and follow data security and compliance best practices throughout our engagements.",
      },
    ],
    []
  );

  const normalized = query.trim().toLowerCase();
  const filteredFaqs = React.useMemo(
    () =>
      !normalized
        ? faqs
        : faqs.filter(
            (f) =>
              f.question.toLowerCase().includes(normalized) ||
              f.answer.toLowerCase().includes(normalized)
          ),
    [faqs, normalized]
  );

  const toggleFAQ = (index) =>
    setActiveIndex((prev) => (prev === index ? null : index));

  const clearQuery = () => setQuery("");

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-white via-white to-orange-50/40">
      {/* HERO */}
      <section className="relative flex items-center overflow-hidden bg-gradient-to-r from-orange-700 via-orange-600 to-amber-500 text-white py-16 md:py-20 min-h-[40vh] md:min-h-[55vh] lg:min-h-[60vh]">
        <div className="absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-white/90 text-lg">
            Find quick answers about our services, process, and support.
          </p>

          {/* Search / filter */}
          <div className="mx-auto mt-8 max-w-2xl">
            <label htmlFor="faq-search" className="sr-only">
              Search FAQs
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/80" />
              <input
                id="faq-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by question, platform, or topic…"
                className="w-full rounded-2xl bg-white/15 px-12 py-3 text-white placeholder-white/70 shadow ring-1 ring-white/20 backdrop-blur focus:outline-none focus:ring-2 focus:ring-white/40"
                autoComplete="off"
              />
              {query && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={clearQuery}
                  className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <p className="mt-2 text-sm text-white/85">
              Showing {filteredFaqs.length} of {faqs.length} questions
            </p>

            {/* Quick chips */}
            <div className="mt-4 flex flex-wrap justify-center gap-2 text-[12px] font-semibold">
              {["Pricing", "Results", "Platforms", "Integrations", "Support"].map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => setQuery(chip)}
                  className="rounded-full bg-white/10 px-3 py-1 text-white ring-1 ring-white/20 hover:bg-white/20"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <main className="mx-auto max-w-4xl px-4 py-12">
        {/* Info strip */}
        <div className="mb-6 grid gap-3 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow ring-1 ring-black/5">
            <HelpCircle className="h-5 w-5 text-orange-600" />
            <span className="text-sm text-gray-700">Clear, concise answers</span>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow ring-1 ring-black/5">
            <ShieldCheck className="h-5 w-5 text-orange-600" />
            <span className="text-sm text-gray-700">Trust & compliance first</span>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow ring-1 ring-black/5">
            <Info className="h-5 w-5 text-orange-600" />
            <span className="text-sm text-gray-700">Updated regularly</span>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 ring-1 ring-black/5">
          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => {
              const isOpen = index === activeIndex;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white transition hover:border-orange-200/80"
                >
                  <button
                    id={buttonId}
                    aria-controls={panelId}
                    aria-expanded={!!isOpen}
                    className="w-full px-5 sm:px-6 py-4 text-left flex items-center justify-between gap-4"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-base sm:text-lg font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-orange-600 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Smooth reveal using CSS grid rows trick */}
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-95"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 sm:px-6 pb-5 pt-0 bg-orange-50/60 border-t border-orange-100">
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <div className="rounded-xl border border-dashed border-gray-300 p-8 text-center">
                <p className="text-gray-600">
                  No results for <span className="font-semibold">“{query}”</span>. Try another term.
                </p>
              </div>
            )}
          </div>

          {/* Help block */}
          <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-700 mb-4">
              Can’t find the answer you’re looking for? Our support team is here to help.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:support@onestopcreators.com"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 text-white px-5 py-2.5 rounded-lg font-medium hover:brightness-110 transition"
              >
                <Mail className="h-4 w-4" /> Email Support
              </a>
              <a
                href="tel:0370-0411833"
                className="inline-flex items-center gap-2 border-2 border-orange-600 text-orange-700 px-5 py-2.5 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition"
              >
                <Phone className="h-4 w-4" /> Call: 0370-0411833
              </a>
              <a
                href="https://calendly.com/onestopcreators"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-700 font-semibold hover:underline"
              >
                <CalendarDays className="h-4 w-4" /> Schedule Free Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Bottom micro-CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            Can’t see your question? Try searching with different keywords or{" "}
            <a
              className="font-semibold text-orange-700 hover:underline"
              href="/contact"
            >
              contact us
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
