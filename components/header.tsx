import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className={"container"}>
        <div className={"top-menu"}>
          <div className={"logo"}>
            <Link href="/" title={"BreakTimer"}>
              <img alt="Logo" src="/images/logo.svg" />
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
