import React from "react";
import logo from "../app/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className={"container"}>
        <div className={"top-menu"}>
          <div className={"logo"}>
            <Link href="/" title={"BreakTimer"}>
              <Image alt={"Logo"} src={logo} />
              <span className={"title"}>BreakTimer</span>
            </Link>
          </div>

          <div className={"get-started"}>
            <a href={"/#download"}>Download</a>
          </div>
        </div>
      </div>
    </header>
  );
}
