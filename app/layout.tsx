export const metadata = {
  title: "Shruti Singh — Portfolio",
  description:
    "PhD CS candidate focusing on RL adversarial defenses, deep learning, and ML systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-mist text-ink antialiased">{children}</body>
    </html>
  );
}
