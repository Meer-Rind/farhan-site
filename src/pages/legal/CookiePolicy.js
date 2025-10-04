import React from "react";
import { Link } from "react-router-dom";

export default function CookiePolicy() {
  const lastUpdated = new Date().toLocaleDateString();

  // Simple helper to smooth-scroll to sections
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
          <h1 className="text-4xl font-extrabold tracking-tight">Cookie Policy</h1>
          <p className="mt-2 text-white/90">Last updated: {lastUpdated}</p>

          {/* Quick nav / TOC */}
          <div className="mx-auto mt-6 flex flex-wrap justify-center gap-3">
            {[
              { label: "What Are Cookies", id: "what-are-cookies" },
              { label: "How We Use Cookies", id: "how-we-use-cookies" },
              { label: "Managing Cookies", id: "managing-cookies" },
              { label: "Third-Party Cookies", id: "third-party" },
              { label: "Your Choices", id: "your-choices" },
              { label: "DNT & Changes", id: "dnt-changes" },
              { label: "Contact Us", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => goto(item.id)}
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
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
          {/* Intro Notice */}
          <div className="mb-8 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
            This Cookie Policy explains what cookies are, how we use them, and how you can
            manage your preferences on this website. For general privacy terms, please see our{" "}
            <Link to="/privacy-policy" className="font-semibold text-blue-700 hover:underline">
              Privacy Policy
            </Link>.
          </div>

          {/* What Are Cookies */}
          <section id="what-are-cookies" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">What Are Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies are small text files stored on your device when you visit a website.
              They allow the site to remember your actions and preferences (such as login,
              language, and display settings) over a period of time, so you don’t have to keep
              re-entering them whenever you come back to the site or browse from one page to another.
            </p>
          </section>

          {/* How We Use Cookies */}
          <section id="how-we-use-cookies" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">How We Use Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies to operate our website securely, enhance performance, and deliver
              a better experience. Below are the main categories we use:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <span className="font-semibold">Essential Cookies:</span> Required for core
                functionality such as page navigation, session management, and security.
              </li>
              <li>
                <span className="font-semibold">Analytics Cookies:</span> Help us understand
                how visitors use our site (e.g., page views, time on page) so we can improve
                performance and content.
              </li>
              <li>
                <span className="font-semibold">Preference Cookies:</span> Remember your
                choices (e.g., language, region) and personalize your experience.
              </li>
              <li>
                <span className="font-semibold">Marketing Cookies:</span> Used to measure the
                effectiveness of our campaigns and, where applicable, show relevant content.
              </li>
            </ul>

            {/* Example table (edit with your real cookies if needed) */}
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse overflow-hidden rounded-xl text-left ring-1 ring-gray-200">
                <thead className="bg-gray-50 text-gray-600 text-sm">
                  <tr>
                    <th className="px-4 py-3">Cookie</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Purpose</th>
                    <th className="px-4 py-3">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3">__session</td>
                    <td className="px-4 py-3">Essential</td>
                    <td className="px-4 py-3">Maintains secure session state</td>
                    <td className="px-4 py-3">Session</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">_ga</td>
                    <td className="px-4 py-3">Analytics</td>
                    <td className="px-4 py-3">Insights into site usage and performance</td>
                    <td className="px-4 py-3">13 months</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">pref_lang</td>
                    <td className="px-4 py-3">Preference</td>
                    <td className="px-4 py-3">Saves your selected language</td>
                    <td className="px-4 py-3">6 months</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-2 text-xs text-gray-500">
                *This is an example list. Your actual cookies may differ based on features in use.
              </p>
            </div>
          </section>

          {/* Managing Cookies */}
          <section id="managing-cookies" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Managing Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can control and/or delete cookies as you wish. Most browsers let you manage
              cookies through their settings. If you disable cookies, some parts of our site
              may not function as intended.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-blue-700 hover:bg-gray-100"
              >
                Manage Cookies in Chrome
              </a>
              <a
                href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-blue-700 hover:bg-gray-100"
              >
                Manage Cookies in Firefox
              </a>
              <a
                href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-blue-700 hover:bg-gray-100"
              >
                Manage Cookies in Safari
              </a>
              <a
                href="https://support.microsoft.com/microsoft-edge"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-blue-700 hover:bg-gray-100"
              >
                Manage Cookies in Edge
              </a>
            </div>

            <p className="mt-4 text-gray-700 leading-relaxed">
              If you prefer not to be tracked by Google Analytics, you can also install the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 font-semibold hover:underline"
              >
                Google Analytics Opt-Out Browser Add-on
              </a>
              .
            </p>
          </section>

          {/* Third-Party Cookies */}
          <section id="third-party" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Some cookies may be set by third parties—such as analytics providers, embedded
              media, or marketing partners—to deliver services or measure performance. We do
              not control these cookies directly. Please review each provider’s policy for
              details on how they handle data.
            </p>
          </section>

          {/* Your Choices */}
          <section id="your-choices" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Your Choices & Consent</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              By continuing to use this site, you agree to our use of cookies as described
              here. Where required, we will display a consent banner the first time you visit,
              allowing you to accept or manage non-essential cookies.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => alert("Open your cookie preferences panel here.")}
                className="rounded-lg bg-blue-600 px-5 py-2.5 text-white font-semibold hover:bg-blue-700 transition"
              >
                Manage Preferences
              </button>
              <Link
                to="/privacy-policy"
                className="rounded-lg border border-blue-600 px-5 py-2.5 text-blue-700 font-semibold hover:bg-blue-50 transition"
              >
                View Privacy Policy
              </Link>
            </div>
          </section>

          {/* Do Not Track & Changes */}
          <section id="dnt-changes" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">“Do Not Track” & Changes</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Some browsers include a “Do Not Track” (DNT) signal. Because there is no
              industry standard for responding to DNT signals, our site does not currently
              respond to them. We will update this policy if standards evolve.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in
              technology, law, or our services. When we make material changes, we’ll update
              the “Last updated” date at the top of this page.
            </p>
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Cookie Policy, please contact us at{" "}
              <a
                href="mailto:privacy@onestopcreators.com"
                className="text-blue-700 font-semibold hover:underline"
              >
                privacy@onestopcreators.com
              </a>{" "}
              or{" "}
              <a href="tel:03700411833" className="text-blue-700 font-semibold hover:underline">
                +92 370-0411833
              </a>.
            </p>
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
