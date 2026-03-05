"use client";

import { useEffect } from "react";

export default function Error({
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
    <main style={{ padding: "3rem 1.5rem" }}>
      <h1>Something went wrong</h1>
      <p style={{ marginTop: "0.75rem" }}>
        An unexpected error occurred while loading this page.
      </p>
      <button
        type="button"
        onClick={reset}
        style={{ marginTop: "1rem", padding: "0.55rem 0.9rem" }}
      >
        Try again
      </button>
    </main>
  );
}
