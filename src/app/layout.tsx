import './globals.css';

// Root layout is a minimal passthrough — [locale]/layout.tsx renders html/body/fonts
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
