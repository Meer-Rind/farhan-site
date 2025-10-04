import React from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  const lastUpdated = new Date().toLocaleDateString();

  const goto = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?w=1600&q=80&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-4xl px-4 py-14 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
          <p className="mt-2 text-white/90">Last updated: {lastUpdated}</p>

          {/* TOC */}
          <div className="mx-auto mt-6 flex flex-wrap justify-center gap-3">
            {[
              { n: "1", label: "Introduction", id: "intro" },
              { n: "2", label: "Information We Collect", id: "info" },
              { n: "3", label: "How We Use Info", id: "use" },
              { n: "4", label: "Legal Bases", id: "bases" },
              { n: "5", label: "Sharing", id: "sharing" },
              { n: "6", label: "Security", id: "security" },
              { n: "7", label: "Retention", id: "retention" },
              { n: "8", label: "International Transfers", id: "transfers" },
              { n: "9", label: "Your Rights", id: "rights" },
              { n: "10", label: "Children", id: "children" },
              { n: "11", label: "Changes", id: "changes" },
              { n: "12", label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => goto(item.id)}
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
              >
                {item.n}. {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-lg ring-1 ring-black/5">
          {/* Notice */}
          <div className="mb-8 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
            This policy explains how <b>One Stop Creators</b> (“we”, “us”, “our”) collects, uses,
            shares, and safeguards personal information across our website and services.
            For cookie details, see our{" "}
            <Link to="/cookie-policy" className="font-semibold text-blue-700 hover:underline">
              Cookie Policy
            </Link>.
          </div>

          {/* 1 Intro */}
          <section id="intro" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              We are committed to protecting your privacy and handling your data responsibly.
              This Policy covers information collected when you browse our site, contact us,
              subscribe to updates, or use our services.
            </p>
          </section>

          {/* 2 Info We Collect */}
          <section id="info" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>

            <h3 className="text-lg font-semibold text-gray-900">2.1 Personal Information</h3>
            <ul className="mb-4 list-disc list-inside text-gray-700 space-y-1">
              <li>Name, email address, phone number</li>
              <li>Business details and preferences</li>
              <li>Billing and payment information (processed via secure providers)</li>
              <li>Communications and support requests</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900">2.2 Automatically Collected</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>IP address, device and browser type, operating system</li>
              <li>Pages viewed, referring URLs, and general usage analytics</li>
              <li>Cookies and similar technologies (see Cookie Policy)</li>
            </ul>
          </section>

          {/* 3 Use of Info */}
          <section id="use" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Provide, maintain, and improve our website and services</li>
              <li>Process requests, payments, and deliver projects</li>
              <li>Communicate updates, support responses, and service notices</li>
              <li>Personalize content and measure performance</li>
              <li>Detect, prevent, and address fraud or abuse</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </section>

          {/* 4 Legal Bases */}
          <section id="bases" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Legal Bases for Processing</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Where applicable (e.g., under GDPR), we rely on these legal bases:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li><b>Contract:</b> To perform a contract or take steps at your request.</li>
              <li><b>Legitimate Interests:</b> To operate and improve our business in ways that do not override your rights.</li>
              <li><b>Consent:</b> When you opt in (e.g., marketing communications). You can withdraw at any time.</li>
              <li><b>Legal Obligation:</b> To meet legal, tax, or regulatory requirements.</li>
            </ul>
          </section>

          {/* 5 Sharing */}
          <section id="sharing" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Data Sharing & Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We do not sell your personal information. We may share limited data:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>With vetted service providers (e.g., hosting, analytics, payment processors)</li>
              <li>To comply with law, enforce agreements, or protect rights and safety</li>
              <li>In a business transaction (merger, acquisition, asset sale)</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          {/* 6 Security */}
          <section id="security" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational measures to protect data
              against unauthorized access, alteration, disclosure, or destruction. However,
              no method of transmission or storage is 100% secure.
            </p>
          </section>

          {/* 7 Retention */}
          <section id="retention" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain personal information only as long as necessary for the purposes set
              out in this Policy, unless a longer retention is required by law (e.g., tax or
              accounting obligations). We then securely delete or anonymize the data.
            </p>
          </section>

          {/* 8 International Transfers */}
          <section id="transfers" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">8. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              If we transfer personal data across borders, we do so in compliance with
              applicable laws and use appropriate safeguards (e.g., Standard Contractual
              Clauses or equivalent mechanisms) to protect your information.
            </p>
          </section>

          {/* 9 Your Rights */}
          <section id="rights" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">9. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Depending on your location, you may have rights such as:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-3">
              <li>Access, correction, deletion (erasure)</li>
              <li>Restriction or objection to processing</li>
              <li>Data portability</li>
              <li>Withdrawal of consent (where processing is based on consent)</li>
              <li>Complaint to a supervisory authority</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              To exercise your rights, contact us at{" "}
              <a href="mailto:privacy@onestopcreators.com" className="text-blue-700 font-semibold hover:underline">
                privacy@onestopcreators.com
              </a>.
            </p>
          </section>

          {/* 10 Children */}
          <section id="children" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">10. Children’s Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not directed to children under the age of 13 (or the
              equivalent age of consent in your jurisdiction). We do not knowingly collect
              personal information from children. If you believe a child has provided us
              data, please contact us so we can take appropriate action.
            </p>
          </section>

          {/* 11 Changes */}
          <section id="changes" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">11. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Policy to reflect changes in our practices or legal
              requirements. When we make material changes, we will update the “Last updated”
              date above and, where appropriate, provide additional notice.
            </p>
          </section>

          {/* 12 Contact */}
          <section id="contact" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">12. Contact Us</h2>
            <div className="rounded-xl bg-gray-50 p-6">
              <p className="text-gray-700">
                <b>Email:</b>{" "}
                <a href="mailto:privacy@onestopcreators.com" className="text-blue-700 font-semibold hover:underline">
                  privacy@onestopcreators.com
                </a>
              </p>
              <p className="text-gray-700"><b>Phone:</b> +92 370-0411833</p>
              <p className="text-gray-700">
                <b>Address:</b> [Your Business Address]
              </p>
              <p className="mt-3 text-sm text-gray-500">
                For cookies and tracking, visit our{" "}
                <Link to="/cookie-policy" className="font-semibold text-blue-700 hover:underline">
                  Cookie Policy
                </Link>.
              </p>
            </div>
          </section>
        </div>

        {/* Back to top */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-blue-700 font-semibold hover:underline"
          >
            Back to top
          </button>
        </div>
      </div>
    </div>
  );
}
