"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        <main style={{ padding: "3rem 1.5rem" }}>
          <h1>Something went wrong</h1>
          <p style={{ marginTop: "0.75rem" }}>
            A global application error occurred.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{ marginTop: "1rem", padding: "0.55rem 0.9rem" }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
