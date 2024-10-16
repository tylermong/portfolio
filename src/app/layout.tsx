import "~/styles/globals.css";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Tyler Mong ",
  description: "Home page of my portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={"scroll-smooth "}>
      <body className="flex flex-col min-h-screen max-w-3xl mx-auto px-4 pt-16 sm:px-8 bg-zinc-950 font-mono font-normal text-white text-sm antialiased">{children}</body>
    </html>
  );
}