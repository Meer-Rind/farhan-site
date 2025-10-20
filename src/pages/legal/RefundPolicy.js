// src/pages/RefundPolicy.js
import React from "react";
import { Link } from "react-router-dom";

export default function RefundPolicy() {
  const lastUpdated = new Date().toLocaleDateString();

  const goto = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-white via-white to-orange-50/40">
      {/* HERO (orange gradient, image-free for clarity) */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-700 via-orange-600 to-amber-500 text-white">
        <div className="relative mx-auto max-w-4xl px-4 py-14 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight">Refund Policy</h1>
          <p className="mt-2 text-white/90">Last updated: {lastUpdated}</p>

          {/* TOC */}
          <div className="mx-auto mt-6 flex flex-wrap justify-center gap-2">
            {[
              { id: "eligibility", label: "Eligibility" },
              { id: "windows", label: "Refund Windows" },
              { id: "nonref", label: "Non-Refundable" },
              { id: "process", label: "Process" },
              { id: "exceptions", label: "Exceptions" },
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
              We aim to be fair and transparent. This policy explains when refunds apply, how to request them, and
              which fees or services are excluded. For general terms, see our{" "}
              <Link to="/terms-conditions" className="font-semibold text-orange-700 hover:underline">
                Terms & Conditions
              </Link>
              .
            </p>
          </div>

          {/* ELIGIBILITY */}
          <section id="eligibility" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Refund Eligibility</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Refunds are available under the circumstances below. Requests must be submitted by the purchasing party.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <h3 className="font-semibold text-gray-900">Digital Services</h3>
                <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Full refund if work has not started within <b>7 days</b> of payment.</li>
                  <li>Prorated refund for cancelled ongoing retainers (unused portion only).</li>
                  <li>No refund once deliverables, ad assets, or content production has begun.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <h3 className="font-semibold text-gray-900">Quality & SLA</h3>
                <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>We’ll review verifiable defects or missed SLAs and offer a fair remedy or refund.</li>
                  <li>Client delays or scope changes may affect eligibility.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* WINDOWS TABLE */}
          <section id="windows" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Refund Windows</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse overflow-hidden rounded-xl text-left ring-1 ring-gray-200">
                <thead className="bg-orange-50 text-gray-700 text-sm">
                  <tr>
                    <th className="px-4 py-3">Scenario</th>
                    <th className="px-4 py-3">Window</th>
                    <th className="px-4 py-3">Refund</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3">Service not initiated</td>
                    <td className="px-4 py-3">Within 7 days of payment</td>
                    <td className="px-4 py-3">100%</td>
                    <td className="px-4 py-3">No kickoff or work logs</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Retainer cancellation</td>
                    <td className="px-4 py-3">Anytime (current cycle)</td>
                    <td className="px-4 py-3">Prorated</td>
                    <td className="px-4 py-3">Unused period only</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">After deliverables started</td>
                    <td className="px-4 py-3">—</td>
                    <td className="px-4 py-3">Not eligible</td>
                    <td className="px-4 py-3">Work-in-progress or assets issued</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-gray-500">Refunds are issued to the original payment method only.</p>
          </section>

          {/* NON-REFUNDABLE */}
          <section id="nonref" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Non-Refundable Items</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Custom content production after work begins (video, graphics, copy, listings).</li>
              <li>Strategy/audit documentation once delivered.</li>
              <li>One-time setup/onboarding fees.</li>
              <li>Third-party costs (ads, apps, subscriptions, marketplace fees).</li>
              <li>Rush/expedite fees and bank/processor fees.</li>
            </ul>
          </section>

          {/* PROCESS */}
          <section id="process" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">How to Request a Refund</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-3">
              <li>
                Email{" "}
                <a
                  href="mailto:billing@onestopcreators.com"
                  className="text-orange-700 font-semibold hover:underline"
                >
                  billing@onestopcreators.com
                </a>{" "}
                from your registered address.
              </li>
              <li>Include order/invoice number, purchase date, and reason for request.</li>
              <li>We’ll acknowledge within <b>1–3 business days</b> and review within <b>3–5 business days</b>.</li>
              <li>Approved refunds are processed within <b>10 business days</b>.</li>
            </ol>
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
              Tip: Attach any relevant evidence (briefs, logs, screenshots) to speed up review.
            </div>
          </section>

          {/* EXCEPTIONS & CLARIFICATIONS */}
          <section id="exceptions" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Exceptions & Clarifications</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <b>Chargebacks:</b> If a chargeback is filed, refund evaluation pauses until the card network resolves the dispute.
              </li>
              <li>
                <b>Scope changes:</b> Material changes requested by the client may affect timelines and eligibility.
              </li>
              <li>
                <b>Promotions:</b> Discounted or promotional services follow the same criteria but are refunded at the paid rate.
              </li>
              <li>
                <b>Force Majeure:</b> Delays caused by factors outside our control are not eligible for refunds.
              </li>
            </ul>
          </section>

          {/* CONTACT */}
          <section id="contact" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact for Refunds</h2>
            <div className="rounded-2xl bg-orange-50/50 p-6 ring-1 ring-orange-100">
              <p className="text-gray-700 mb-2">
                <b>Email:</b>{" "}
                <a href="mailto:billing@onestopcreators.com" className="text-orange-700 font-semibold hover:underline">
                  billing@onestopcreators.com
                </a>
              </p>
              <p className="text-gray-700 mb-2">
                <b>Phone:</b>{" "}
                <a href="tel:03700411833" className="text-orange-700 font-semibold hover:underline">
                  +92 370-0411833
                </a>
              </p>
              <p className="text-gray-700">
                <b>Response Time:</b> 1–3 business days
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
