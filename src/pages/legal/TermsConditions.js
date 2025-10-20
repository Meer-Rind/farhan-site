// src/pages/TermsConditions.js
import React from "react";
import { Link } from "react-router-dom";

export default function TermsConditions() {
  const lastUpdated = new Date().toLocaleDateString();

  const goto = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-white via-white to-orange-50/40">
      {/* HERO (brand orange gradient, image-free for clarity) */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-700 via-orange-600 to-amber-500 text-white">
        <div className="relative mx-auto max-w-4xl px-4 py-14 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight">Terms & Conditions</h1>
          <p className="mt-2 text-white/90">Last updated: {lastUpdated}</p>

          {/* TOC / Quick Nav */}
          <div className="mx-auto mt-6 flex flex-wrap justify-center gap-2">
            {[
              { id: "agreement", label: "Agreement" },
              { id: "definitions", label: "Definitions" },
              { id: "services", label: "Services" },
              { id: "payments", label: "Payments" },
              { id: "changes", label: "Scope & Changes" },
              { id: "ip", label: "Intellectual Property" },
              { id: "confidentiality", label: "Confidentiality" },
              { id: "thirdparty", label: "Third-Party Tools" },
              { id: "warranties", label: "Warranties" },
              { id: "limitation", label: "Limitation of Liability" },
              { id: "indemnity", label: "Indemnity" },
              { id: "force", label: "Force Majeure" },
              { id: "termination", label: "Termination" },
              { id: "law", label: "Governing Law" },
              { id: "disputes", label: "Dispute Resolution" },
              { id: "updates", label: "Changes to Terms" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => goto(item.id)}
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-lg ring-1 ring-black/5">
          {/* Intro notice */}
          <div className="mb-8 rounded-xl border-l-4 border-orange-600 bg-orange-50 p-4">
            <p className="text-sm text-orange-900">
              These Terms & Conditions (“Terms”) govern your access to and use of the services provided by
              <b> One Stop Creators</b> (“we”, “us”, “our”). By using our website or services, you agree to these Terms.
              For privacy details, see our{" "}
              <Link to="/privacy-policy" className="font-semibold text-orange-700 hover:underline">
                Privacy Policy
              </Link>.
            </p>
          </div>

          {/* 1 Agreement */}
          <section id="agreement" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using our services, you confirm that you have read, understood, and agree to be bound by
              these Terms. If you do not agree, you may not access or use our services.
            </p>
          </section>

          {/* 2 Definitions */}
          <section id="definitions" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Definitions</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li><b>Client</b>: The individual or entity purchasing our services.</li>
              <li><b>Deliverables</b>: The outputs specified in a proposal, SOW, or order form.</li>
              <li><b>SOW</b>: Statement of Work describing scope, timelines, and fees.</li>
            </ul>
          </section>

          {/* 3 Services */}
          <section id="services" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Services Description</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We provide digital marketing and e-commerce services which may include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>TikTok Shop management and optimization</li>
              <li>eBay and Etsy store management</li>
              <li>Temu/Walmart marketplace services</li>
              <li>Content creation, social/influencer marketing, and strategy</li>
              <li>Consulting and performance analytics</li>
            </ul>
            <p className="mt-3 text-gray-700">
              Specific scope, timelines, and deliverables are defined in the applicable proposal or SOW.
            </p>
          </section>

          {/* 4 Payments */}
          <section id="payments" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Payment Terms</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Fees are due in advance unless otherwise agreed in writing.</li>
              <li>Recurring services are billed monthly; late payments may pause/suspend services.</li>
              <li>All prices are in USD unless specified otherwise; taxes/fees may apply.</li>
              <li>Third-party costs (ads, apps, subscriptions) are the Client’s responsibility unless stated.</li>
            </ul>
            <p className="mt-3 text-gray-700">
              For refunds, please review our{" "}
              <Link to="/refund-policy" className="text-orange-700 font-semibold hover:underline">Refund Policy</Link>.
            </p>
          </section>

          {/* 5 Scope & Changes */}
          <section id="changes" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Scope & Changes</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Any changes to scope, deliverables, or timelines must be agreed in writing (e.g., change order or revised SOW)
              and may affect fees and schedules.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Client delays or missing inputs may impact delivery dates.</li>
              <li>We may recommend alternatives if requested changes affect performance or compliance.</li>
            </ul>
          </section>

          {/* 6 IP */}
          <section id="ip" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Unless otherwise stated in an SOW, we retain ownership of all pre-existing IP, frameworks, and tools.
              Upon full payment, the Client receives a non-exclusive license (or ownership as specified) to use the
              Deliverables for their intended business purpose.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Client represents that materials provided to us do not infringe third-party rights.</li>
              <li>We may showcase non-confidential work results in our portfolio unless the Client opts out in writing.</li>
            </ul>
          </section>

          {/* 7 Confidentiality */}
          <section id="confidentiality" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Confidentiality</h2>
            <p className="text-gray-700 leading-relaxed">
              Each party agrees to protect the other’s confidential information and use it only for performing or
              receiving the services. This obligation survives termination.
            </p>
          </section>

          {/* 8 Third-Party Tools */}
          <section id="thirdparty" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Third-Party Tools & Platforms</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services may rely on third-party platforms (e.g., TikTok, eBay, analytics, ad networks). Their
              availability, policies, or performance are outside our control; you agree to comply with their terms.
            </p>
          </section>

          {/* 9 Warranties */}
          <section id="warranties" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">9. Warranties & Disclaimers</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>We provide services with reasonable care and skill consistent with industry practice.</li>
              <li>No guarantee of specific results (e.g., sales, rankings) due to external variables.</li>
              <li>Except as expressly stated, services are provided “as is” without other warranties.</li>
            </ul>
          </section>

          {/* 10 Limitation */}
          <section id="limitation" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">10. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              To the maximum extent permitted by law, we are not liable for indirect, incidental, special, or
              consequential damages. Our total aggregate liability for any claim will not exceed the amounts paid by
              you to us for the service giving rise to the claim in the 3 months preceding the event.
            </p>
          </section>

          {/* 11 Indemnity */}
          <section id="indemnity" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">11. Indemnity</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify and hold us harmless from claims, damages, liabilities, or expenses arising from
              your misuse of the services, violation of laws, or infringement of third-party rights.
            </p>
          </section>

          {/* 12 Force Majeure */}
          <section id="force" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">12. Force Majeure</h2>
            <p className="text-gray-700 leading-relaxed">
              We are not responsible for delays or failures caused by events beyond our reasonable control, including
              but not limited to outages, acts of God, war, terrorism, labor disputes, or governmental actions.
            </p>
          </section>

          {/* 13 Termination */}
          <section id="termination" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">13. Termination</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Either party may terminate for material breach if not cured within a reasonable notice period.</li>
              <li>Upon termination, fees due for work performed remain payable; licenses may cease as stated in the SOW.</li>
              <li>Sections relating to IP, confidentiality, limitation, and indemnity survive termination.</li>
            </ul>
          </section>

          {/* 14 Governing Law */}
          <section id="law" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">14. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms are governed by the laws of <b>[Your Country/State]</b>, without regard to conflict-of-law rules.
              You are responsible for compliance with local laws where you access our services.
            </p>
          </section>

          {/* 15 Dispute Resolution */}
          <section id="disputes" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">15. Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Parties will first attempt to resolve disputes amicably. If unresolved, the dispute shall be submitted to
              confidential mediation or arbitration in <b>[Your City, Country/State]</b>, except where prohibited by law.
            </p>
            <p className="text-gray-700">
              Nothing limits either party’s right to seek injunctive relief for misuse of IP or confidential information.
            </p>
          </section>

          {/* 16 Updates */}
          <section id="updates" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">16. Changes to These Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update these Terms from time to time. When we make material changes, we will update the
              “Last updated” date above and, if appropriate, provide additional notice. Your continued use of the
              services after changes indicates acceptance.
            </p>
          </section>

          {/* 17 Contact */}
          <section id="contact" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">17. Contact Us</h2>
            <div className="rounded-xl bg-gray-50 p-6">
              <p className="text-gray-700">
                Email:{" "}
                <a href="mailto:legal@onestopcreators.com" className="text-orange-700 font-semibold hover:underline">
                  legal@onestopcreators.com
                </a>
              </p>
              <p className="text-gray-700">Phone: +92 370-0411833</p>
              <p className="text-gray-700">Address: [Your Business Address]</p>
              <p className="mt-3 text-sm text-gray-500">
                Related policies:{" "}
                <Link to="/privacy-policy" className="font-semibold text-orange-700 hover:underline">
                  Privacy Policy
                </Link>{" "}
                •{" "}
                <Link to="/cookie-policy" className="font-semibold text-orange-700 hover:underline">
                  Cookie Policy
                </Link>{" "}
                •{" "}
                <Link to="/refund-policy" className="font-semibold text-orange-700 hover:underline">
                  Refund Policy
                </Link>
              </p>
            </div>
          </section>
        </div>

        {/* Back to top */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-orange-700 font-semibold hover:underline"
          >
            Back to top
          </button>
        </div>
      </div>
    </div>
  );
}
