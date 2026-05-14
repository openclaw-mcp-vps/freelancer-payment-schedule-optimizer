export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Freelancers &amp; Consultants
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Guessing When to Invoice.{" "}
          <span className="text-[#58a6ff]">Optimize Your Cash Flow.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          PayFlow Optimizer analyzes your client payment patterns, predicts cash flow gaps before they hit, and tells you exactly when to send invoices to keep money flowing steadily.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors duration-150"
        >
          Start Optimizing — $19/mo
        </a>
        <p className="mt-3 text-sm text-[#6e7681]">Cancel anytime. No contracts.</p>

        {/* Visual mock */}
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <p className="text-xs text-[#6e7681] uppercase tracking-widest mb-4">Cash Flow Forecast — Next 30 Days</p>
          <div className="flex items-end gap-2 h-24">
            {[60, 30, 80, 45, 90, 55, 100, 40, 75, 85, 50, 95].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{ height: `${h}%`, background: h > 70 ? "#238636" : h > 45 ? "#58a6ff" : "#da3633" }}
              />
            ))}
          </div>
          <div className="mt-4 flex gap-4 text-xs">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-[#238636] inline-block"></span>Strong</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-[#58a6ff] inline-block"></span>Moderate</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-[#da3633] inline-block"></span>Gap Risk</span>
          </div>
          <div className="mt-4 bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-3">
            <p className="text-[#58a6ff] text-sm font-semibold">Recommendation</p>
            <p className="text-[#c9d1d9] text-sm mt-1">Send invoice to Acme Corp today — their 14-day payment cycle means funds arrive before your projected gap on the 18th.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#6e7681] text-sm mb-6">/month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Unlimited client tracking",
              "30-day cash flow forecast",
              "Smart invoice timing alerts",
              "Payment pattern analysis",
              "CSV export"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#238636] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg text-sm transition-colors duration-150"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the payment pattern analysis work?",
              a: "You log when you send invoices and when clients pay. PayFlow learns each client's typical payment delay and uses that to predict when money will arrive, so you can time future invoices to fill gaps."
            },
            {
              q: "Do I need to connect my bank account?",
              a: "No. PayFlow works with manual data entry or CSV imports. You stay in full control of your financial data — no bank linking required."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel with one click from your account settings. You keep access until the end of your billing period with no penalties."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} PayFlow Optimizer. All rights reserved.
      </footer>
    </main>
  );
}
