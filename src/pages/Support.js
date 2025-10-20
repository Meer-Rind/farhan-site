import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  CalendarCheck2,
  MessagesSquare,
  HelpCircle,
  Network,
  Cog,
  Headset,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Clock4,
  Sparkles,
} from "lucide-react";

// Tailwind + framer-motion + lucide-react
// npm i framer-motion lucide-react

const supportMethods = [
  {
    Icon: Phone,
    title: "Phone Support",
    description: "Call us directly for immediate assistance",
    contact: "0370-0411833",
    href: "tel:03700411833",
    hours: "Mon–Sat · 9:00 AM – 5:00 PM",
  },
  {
    Icon: Mail,
    title: "Email Support",
    description: "Send us an email for detailed inquiries",
    contact: "support@onestopcreators.com",
    href: "mailto:support@onestopcreators.com",
    hours: "24/7 · Replies within 24 hours",
  },
  {
    Icon: CalendarCheck2,
    title: "Schedule Meeting",
    description: "Book a consultation with our experts",
    contact: "Calendly Booking",
    href: "https://calendly.com/onestopcreators",
    hours: "Slots available all week",
  },
  {
    Icon: MessagesSquare,
    title: "Live Chat",
    description: "Instant messaging with our support team",
    contact: "Chat on website",
    href: "#livechat",
    hours: "Mon–Sat · 9:00 AM – 5:00 PM",
  },
];

function MethodCard({ item, i }) {
  const { Icon } = item;
  return (
    <motion.a
      href={item.href}
      target={item.href?.startsWith("http") ? "_blank" : undefined}
      rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group block rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5 transition hover:shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-500/30"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: i * 0.05 }}
    >
      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-600 to-amber-500 text-white shadow">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
      <p className="mt-1 text-sm text-gray-600">{item.description}</p>
      <div className="mt-4 text-sm font-semibold text-orange-700 group-hover:underline">{item.contact}</div>
      <p className="mt-1 text-xs text-gray-500">{item.hours}</p>
    </motion.a>
  );
}

function ResourceLink({ href, Icon, label, color = "text-gray-600" }) {
  return (
    <a href={href} className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-orange-50/50">
      <Icon className={`h-5 w-5 ${color}`} />
      <span className="font-medium text-orange-700 hover:underline">{label}</span>
    </a>
  );
}

function Stat({ Icon, label, value }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white/80 p-5 shadow ring-1 ring-black/5 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-600 to-amber-500 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-2xl font-extrabold text-gray-900">{value}</div>
        <div className="text-xs font-medium text-gray-600">{label}</div>
      </div>
    </div>
  );
}

function FaqItem({ q, a }) {
  return (
    <details className="group rounded-2xl border border-gray-200 bg-white p-5 open:shadow-lg">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
        <h4 className="text-sm font-semibold text-gray-900">{q}</h4>
        <span className="grid h-6 w-6 place-items-center rounded-full bg-orange-50 text-orange-700 transition group-open:rotate-45">+</span>
      </summary>
      <p className="mt-3 text-sm text-gray-600">{a}</p>
    </details>
  );
}

export default function Support() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = React.useState({ type: "idle", msg: "" });

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email);
  const canSubmit = formData.name.trim() && emailOk && formData.subject.trim() && formData.message.trim();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) {
      setStatus({ type: "error", msg: "Please fill all required fields correctly." });
      return;
    }
    try {
      console.log("Support form:", formData);
      setStatus({ type: "success", msg: "Thanks! We'll get back to you within 24 hours." });
      setFormData({ name: "", email: "", subject: "", service: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", msg: "Something went wrong. Please try again." });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-orange-50/40 pt-16">
      {/* HERO */}
      <section className="relative flex min-h-[45vh] items-center overflow-hidden bg-gradient-to-r from-orange-700 via-orange-600 to-amber-500 py-16 text-white md:min-h-[60vh] lg:min-h-[70vh] md:py-20">
        <div className="absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            Support Center
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-3 max-w-2xl text-white/90"
          >
            We're here to help you succeed. Choose the best way to get in touch.
          </motion.p>

          {/* quick highlights */}
          <div className="mt-8 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3">
            <Stat Icon={Clock4} label="Avg. First Response" value="< 2 hrs" />
            <Stat Icon={ShieldCheck} label="SLA Resolution" value="24–48 hrs" />
            <Stat Icon={Sparkles} label="CSAT" value="98%" />
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-12">
        {/* METHODS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {supportMethods.map((m, i) => (
            <MethodCard key={m.title} item={m} i={i} />
          ))}
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          {/* FORM (spans 2 columns) */}
          <div className="lg:col-span-2 rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5">
            <h2 className="text-2xl font-extrabold text-gray-900">Send us a Message</h2>
            <p className="mt-1 text-sm text-gray-600">Tell us what you need help with and we'll respond swiftly.</p>

            {status.type !== "idle" && (
              <div
                className={`mt-4 flex items-start gap-3 rounded-xl border p-3 text-sm ${
                  status.type === "success"
                    ? "border-green-200 bg-green-50 text-green-800"
                    : "border-red-200 bg-red-50 text-red-800"
                }`}
                role="status"
                aria-live="polite"
              >
                {status.type === "success" ? (
                  <CheckCircle2 className="mt-0.5 h-4 w-4" />
                ) : (
                  <AlertCircle className="mt-0.5 h-4 w-4" />
                )}
                <span>{status.msg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500/20"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full rounded-xl border px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 ${
                      emailOk
                        ? "border-gray-200 focus:border-orange-600 focus:ring-orange-500/20"
                        : "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                    }`}
                    placeholder="you@example.com"
                    aria-invalid={!emailOk}
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500/20"
                    placeholder="Brief subject line"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="service">
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500/20"
                  >
                    <option value="">Select a service</option>
                    <option value="tiktok">TikTok Shop</option>
                    <option value="ebay">eBay Store</option>
                    <option value="etsy">Etsy Shop</option>
                    <option value="temu">Temu Store</option>
                    <option value="walmart">Walmart Marketplace</option>
                    <option value="mercury">Mercury Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500/20"
                  placeholder="Describe your issue or question in detail..."
                />
              </div>

              <button
                type="submit"
                disabled={!canSubmit}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-orange-500/30 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Send Message
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-gradient-to-r from-orange-700 via-orange-600 to-amber-500 p-8 text-white shadow-lg">
              <h3 className="text-2xl font-extrabold">Emergency Support</h3>
              <p className="mt-2 text-white/90">For urgent issues affecting your operations.</p>
              <a
                href="tel:03700411833"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20"
              >
                <Phone className="h-4 w-4" /> Call Now: 0370‑0411833
              </a>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5">
              <h3 className="text-xl font-extrabold text-gray-900">Support Resources</h3>
              <div className="mt-4 divide-y divide-gray-100">
                <ResourceLink href="/faq" Icon={HelpCircle} label="Frequently Asked Questions" />
                <ResourceLink href="/sitemap" Icon={Network} label="Website Sitemap" />
                <ResourceLink href="/services" Icon={Cog} label="Service Documentation" />
                <ResourceLink href="/contact" Icon={Headset} label="General Contact" />
              </div>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-amber-900">
              <h4 className="flex items-center gap-2 font-semibold">
                <AlertCircle className="h-4 w-4" /> Support Hours Notice
              </h4>
              <p className="mt-1 text-sm">
                Phone support is available <b>Mon–Sat • 9:00 AM – 5:00 PM</b>. Email responses typically within <b>24 hours</b>.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ SECTION */}
        <section className="mt-16">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-extrabold text-gray-900">Frequently Asked Questions</h3>
            <p className="mt-2 text-sm text-gray-600">Quick answers to common questions.</p>
          </div>
          <div className="mx-auto mt-6 grid max-w-4xl gap-4 md:grid-cols-2">
            <FaqItem q="How fast do you reply to emails?" a="Within 2 hours on business days, 24 hours max." />
            <FaqItem q="Do you offer weekend support?" a="Yes, Monday to Saturday. Emergency phone support is prioritized." />
            <FaqItem q="Can I reschedule a booked call?" a="Absolutely. Use your Calendly link to pick another slot." />
            <FaqItem q="What details help solve issues faster?" a="Screenshots, order IDs, URLs, and steps to reproduce the problem." />
          </div>
        </section>

        {/* CTA */}
        <section className="relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-orange-900 via-orange-800 to-amber-800 p-10 text-center text-white">
          <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-transparent to-black/10" />
          <h3 className="text-2xl font-extrabold sm:text-3xl">Need priority assistance?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-white/80">Get a dedicated specialist for mission‑critical issues.</p>
          <a
            href="mailto:support@onestopcreators.com?subject=Priority%20Support%20Request"
            className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white/10 px-7 py-3 text-base font-semibold text-white shadow-lg ring-1 ring-white/20 transition hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-orange-500/30"
          >
            Contact Priority Support <ArrowRight className="h-5 w-5" />
          </a>
        </section>
      </main>
    </div>
  );
}
