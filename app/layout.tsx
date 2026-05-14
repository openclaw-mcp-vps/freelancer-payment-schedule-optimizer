import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PayFlow Optimizer – Freelance Payment Schedule Tool",
  description: "Optimize freelance payment timing for steady cash flow. Track client payment patterns, predict gaps, and send invoices at the perfect time."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="85d4fba2-4dee-457b-9a47-19f9a674c231"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
