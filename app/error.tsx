'use client';

import { useEffect } from 'react';

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
    <div className="wrap flex min-h-[60vh] flex-col justify-center py-24">
      <p className="sticker inline-block self-start bg-highlight px-3 py-1 font-display text-xs font-bold tracking-[0.16em] uppercase">
        Error
      </p>
      <h1 className="mt-6 font-display text-5xl leading-[0.9] font-bold tracking-tight uppercase md:text-7xl">
        That broke.
      </h1>
      <p className="mt-5 max-w-lg text-lg text-ink-muted">
        This page failed to render. Trying again usually clears it.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 self-start bg-ink px-6 py-3.5 font-display text-sm font-bold tracking-tight text-on-inverse uppercase hover:bg-accent"
      >
        Try again
      </button>
    </div>
  );
}
