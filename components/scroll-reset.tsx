"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
