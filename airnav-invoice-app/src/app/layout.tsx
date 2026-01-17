import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AirNav Invoice WITT",
  description: "AirNav Indonesia Advance/Extend Charges"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
