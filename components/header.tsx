import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-container nav-row">
        <Link href="/" className="brand-mark" title="BreakTimer home">
          <Image
            alt="BreakTimer logo"
            src="/images/logo.svg"
            width={36}
            height={36}
          />
          <span>BreakTimer</span>
        </Link>
      </div>
    </header>
  );
}
