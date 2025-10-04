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
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    message: "",
    company: "", // honeypot (leave empty)
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
        msg:
          form.company
            ? "Spam detected."
            : "Please fill all required fields correctly.",
      });
      return;
    }
    try {
      // TODO: Replace with your API / EmailJS / Formspree integration
      console.log("Contact form:", form);
      setStatus({
        type: "success",
        msg: "Thanks! We’ll get back to you within 24 hours.",
      });
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        service: "",
        message: "",
        company: "",
      });
    } catch (err) {
      setStatus({
        type: "error",
        msg: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="pt-16">
      {/* HERO (responsive height) */}
      <section className="relative flex items-center overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 md:py-20 min-h-[45vh] md:min-h-[60vh] lg:min-h-[70vh]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?w=1600&q=80&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Contact Us
          </h1>
          <p className="mt-3 text-lg text-white/90">
            Get in touch with our expert team
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-left">
            <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-2 ring-1 ring-white/20">
              <Phone className="h-4 w-4" /> <span>+92 370-0411833</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-2 ring-1 ring-white/20">
              <Mail className="h-4 w-4" /> <span>info@onestopcreators.com</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-2 ring-1 ring-white/20">
              <Clock4 className="h-4 w-4" />{" "}
              <span>Mon–Sat • 09:00 AM–05:00 PM (PKT)</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* LEFT: Contact Information + CTA */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone Number</h3>
                    <a
                      href="tel:03700411833"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      0370-0411833
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Address</h3>
                    <a
                      href="mailto:info@onestopcreators.com"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      info@onestopcreators.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock4 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Working Hours</h3>
                    <p className="text-gray-600">Mon–Sat: 09:00 AM – 05:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://calendly.com/onestopcreators"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  <CalendarDays className="h-5 w-5" />
                  Schedule Online Meeting
                </a>
              </div>
            </div>

            {/* MIDDLE: Contact Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-8 ring-1 ring-black/5">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h3>

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
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={onChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={onChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={onChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 ${
                        emailOk ? "border-gray-300" : "border-red-300 focus:border-red-500"
                      }`}
                      placeholder="your@email.com"
                      aria-invalid={!emailOk}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Service Interested In</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={onChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600"
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
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={5}
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    Send Message
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>

            {/* RIGHT: Location + Map */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg ring-1 ring-black/5 overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Our Location
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {/* Replace this with your exact address */}
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      Lahore, Pakistan
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Visiting? Please schedule a meeting so we can arrange access.
                  </p>
                </div>

                {/* Map Embed – replace query with your exact location/business name if you want */}
                <div className="h-72 sm:h-80 md:h-96 w-full">
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

                <div className="p-6 border-t">
                  <a
                    href={
                      "https://www.google.com/maps/search/?api=1&query=" +
                      encodeURIComponent("Lahore, Pakistan")
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline"
                  >
                    Open in Google Maps
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <a
              href="mailto:info@onestopcreators.com?subject=Project%20Inquiry"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline"
            >
              Prefer email? Reach out now <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
