import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import "./styles/_variables.scss";
import "./styles/_reset.scss";
import "./styles/_grid.scss";
import "./styles/_all.scss";
import Header from "@/components/header";
import Link from "next/link";
import logo from "./images/logo.svg";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <footer>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-5"}>
                <div className={"widget__item"}>
                  <div className={"logo"}>
                    <Link href="/" title={"BreakTimer"}>
                      <Image alt={"Logo"} src={logo} />
                    </Link>
                  </div>

                  <div className={"about"}>
                    <p>
                      BreakTimer is free and open source software. It was
                      originally developed by{" "}
                      <a href="https://tomjwatson.com">Tom Watson</a> to fulfill
                      his own desire for a similar tool, and is now shared with
                      the world for free.
                    </p>
                  </div>
                </div>
              </div>

              <div className={"col-2"}>
                <div className={"widget__item"}>
                  <div className={"links"}>
                    <h4>Support</h4>
                    <ul>
                      <li>
                        <a href="https://github.com/tom-james-watson/breaktimer-app">
                          GitHub
                        </a>
                      </li>
                      <li>
                        <Link href="/contact" title={"Contact Us"}>
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className={"copyright"}>
              <p>
                Both the BreakTimer application and website are licensed under
                the GNU General Public License v3.0.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
