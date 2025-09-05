import type { Metadata } from "next";
import CursorFX from "../components/CursorFX";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shruti Singh — Portfolio",
  description:
    "PhD CS candidate focusing on RL adversarial defenses, deep learning, and ML systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark cursor-hacker">
      <body className="bg-ink text-mist antialiased">
        <CursorFX />
        {children}
      </body>
    </html>
  );
}

