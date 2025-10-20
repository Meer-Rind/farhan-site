import React from "react";
import {
  Phone,
  Mail,
  Clock4,
  MapPin,
  CalendarDays,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Headphones,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    message: "",
    company: "", // honeypot
  });
  const [status, setStatus] = React.useState({ type: "idle", msg: "" });

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email);
  const canSubmit =
    form.firstName.trim() &&
    form.lastName.trim() &&
    emailOk &&
    form.message.trim();

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit || form.company) {
      setStatus({
        type: "error",
        msg: form.company
          ? "Spam detected."
          : "Please fill all required fields correctly.",
      });
      return;
    }
    try {
      // TODO: Replace with your API / EmailJS / Formspree integration
      console.log("Contact form:", form);
      setStatus({ type: "success", msg: "Thanks! We’ll get back to you within 24 hours." });
      setForm({ firstName: "", lastName: "", email: "", service: "", message: "", company: "" });
    } catch (err) {
      setStatus({ type: "error", msg: "Something went wrong. Please try again." });
    }
  };

  return (
    <div className="pt-16">
      {/* HERO */}
      <section className="relative overflow-hidden py-16 text-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50" />
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-orange-200/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-amber-200/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 ring-1 ring-orange-200">
            <ShieldCheck className="h-3.5 w-3.5" /> NDA‑ready • Secure by default
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
            Talk to a specialist about your storefront, ads, or marketplace ops. We’ll reply within 24 hours.
          </p>

          {/* quick touchpoints */}
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-4 text-left">
            <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-2 shadow-sm ring-1 ring-black/5">
              <Phone className="h-4 w-4 text-orange-600" /> <span>+92 370-0411833</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-2 shadow-sm ring-1 ring-black/5">
              <Mail className="h-4 w-4 text-orange-600" /> <span>info@onestopcreators.com</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-2 shadow-sm ring-1 ring-black/5">
              <Clock4 className="h-4 w-4 text-orange-600" /> <span>Mon–Sat • 09:00–17:00 (PKT)</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-gradient-to-b from-white to-orange-50/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* LEFT: Info */}
            <aside className="lg:col-span-1">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">Get In Touch</h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-orange-100 p-3">
                    <Phone className="h-5 w-5 text-orange-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone Number</h3>
                    <a href="tel:03700411833" className="text-gray-600 transition hover:text-orange-700">
                      0370-0411833
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-orange-100 p-3">
                    <Mail className="h-5 w-5 text-orange-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Address</h3>
                    <a href="mailto:info@onestopcreators.com" className="text-gray-600 transition hover:text-orange-700">
                      info@onestopcreators.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-orange-100 p-3">
                    <Clock4 className="h-5 w-5 text-orange-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Working Hours</h3>
                    <p className="text-gray-600">Mon–Sat: 09:00–17:00</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://calendly.com/onestopcreators"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-600 to-amber-500 px-6 py-3 font-semibold text-white shadow-md transition hover:brightness-110"
                >
                  <CalendarDays className="h-5 w-5" /> Schedule Online Meeting
                </a>
              </div>

              {/* trust chips */}
              <div className="mt-6 flex flex-wrap gap-2 text-[12px] font-semibold text-orange-800/80">
                <span className="rounded-full bg-orange-500/10 px-2.5 py-1 ring-1 ring-orange-400/20">NDA on request</span>
                <span className="rounded-full bg-orange-500/10 px-2.5 py-1 ring-1 ring-orange-400/20">24h response SLA</span>
                <span className="rounded-full bg-orange-500/10 px-2.5 py-1 ring-1 ring-orange-400/20">Dedicated manager</span>
              </div>
            </aside>

            {/* MIDDLE: Form */}
            <div className="lg:col-span-1">
              <div className="rounded-xl bg-white p-8 shadow-lg ring-1 ring-black/5">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">Send us a Message</h3>

                {status.type !== "idle" && (
                  <div
                    className={`mb-4 flex items-start gap-3 rounded-xl border p-3 text-sm ${
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

                <form onSubmit={onSubmit} className="space-y-6">
                  {/* Honeypot */}
                  <input type="text" name="company" value={form.company} onChange={onChange} className="hidden" tabIndex={-1} autoComplete="off" />

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-gray-700">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={onChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 outline-none ring-orange-500/0 transition focus:border-orange-600 focus:ring-4 focus:ring-orange-500/20"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-gray-700">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={onChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 outline-none ring-orange-500/0 transition focus:border-orange-600 focus:ring-4 focus:ring-orange-500/20"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-gray-700">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      required
                      className={`w-full rounded-lg border px-4 py-3 placeholder-gray-400 outline-none transition focus:ring-4 ${
                        emailOk
                          ? "border-gray-300 focus:border-orange-600 focus:ring-orange-500/20"
                          : "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                      }`}
                      placeholder="your@email.com"
                      aria-invalid={!emailOk}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-gray-700">Service Interested In</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={onChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-600 focus:ring-4 focus:ring-orange-500/20"
                    >
                      <option value="">Select a service</option>
                      <option value="tiktok">TikTok Shop</option>
                      <option value="ebay">eBay</option>
                      <option value="etsy">Etsy</option>
                      <option value="temu">Temu</option>
                      <option value="walmart">Walmart</option>
                      <option value="mercury">Mercury</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-gray-700">Message</label>
                    <textarea
                      rows={5}
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-600 focus:ring-4 focus:ring-orange-500/20"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-600 to-amber-500 py-3 font-semibold text-white shadow-lg transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    Send Message
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>

            {/* RIGHT: Location + Map */}
            <div className="lg:col-span-1">
              <div className="overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-black/5">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900">Our Location</h3>
                  <p className="mt-2 text-gray-600">
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-orange-700" /> Lahore, Pakistan
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-gray-500">Visiting? Please schedule a meeting so we can arrange access.</p>
                </div>

                <div className="h-72 w-full sm:h-80 md:h-96">
                  <iframe
                    title="Office Location Map"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full border-0"
                    src={
                      "https://www.google.com/maps?q=" +
                      encodeURIComponent("Lahore, Pakistan") +
                      "&z=12&output=embed"
                    }
                  />
                </div>

                <div className="border-t p-6">
                  <a
                    href={
                      "https://www.google.com/maps/search/?api=1&query=" +
                      encodeURIComponent("Lahore, Pakistan")
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-orange-700 hover:underline"
                  >
                    Open in Google Maps <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Support strip */}
          <div className="mt-12 rounded-2xl border border-orange-200/60 bg-white/70 p-5 backdrop-blur">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-700">
              <span className="inline-flex items-center gap-2 font-semibold text-orange-700">
                <Headphones className="h-4 w-4" /> 24/7 support channel
              </span>
              <span className="hidden h-4 w-px bg-gray-300 sm:block" />
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-orange-600" /> SOC‑ready security & NDA
              </span>
              <span className="hidden h-4 w-px bg-gray-300 sm:block" />
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-orange-600" /> 5‑day sprint onboarding
              </span>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <a
              href="mailto:info@onestopcreators.com?subject=Project%20Inquiry"
              className="inline-flex items-center gap-2 font-semibold text-orange-700 hover:underline"
            >
              Prefer email? Reach out now <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
