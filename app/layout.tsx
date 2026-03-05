import type { Metadata } from "next";
import { Instrument_Sans, Sora } from "next/font/google";
import Header from "@/components/header";
import ScrollReset from "@/components/scroll-reset";
import GithubButtons from "@/components/github-buttons";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "BreakTimer",
  description: "Save yourself from RSI and eye-strain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${sora.variable}`}>
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <div className="site-shell">
          <ScrollReset />
          <Header />
          <main id="content">{children}</main>
          <footer className="site-footer">
            <div className="site-container footer-grid">
              <div>
                <div className="footer-brand">
                  <Link href="/" className="brand-mark footer-logo" title="BreakTimer">
                    <Image
                      alt="BreakTimer logo"
                      src="/images/logo.svg"
                      width={36}
                      height={36}
                    />
                    <span>BreakTimer</span>
                  </Link>
                  <GithubButtons />
                </div>
              </div>

              <div>
                <h2 className="meta-label">Resources</h2>
                <ul>
                  <li>
                    <a href="https://github.com/tom-james-watson/breaktimer-app">
                      GitHub Repository
                    </a>
                  </li>
                  <li>
                    <Link href="/#download" title="Downloads">
                      Downloads
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" title="Contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="site-container footer-legal">
              <p>
                BreakTimer and this website are licensed under GNU General
                Public License v3.0.
              </p>
              <p>
                We do not offer support for enterprise environments or
                commercial deployment. This software is provided &apos;as
                is&apos; without any warranties or guarantees of support.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
