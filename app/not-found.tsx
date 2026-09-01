import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="wrap flex min-h-[60vh] flex-col justify-center py-24">
      <p className="sticker inline-block self-start bg-highlight px-3 py-1 font-display text-xs font-bold tracking-[0.16em] uppercase">
        404
      </p>
      <h1 className="mt-6 font-display text-5xl leading-[0.9] font-bold tracking-tight uppercase md:text-7xl">
        Nothing here.
      </h1>
      <p className="mt-5 max-w-lg text-lg text-ink-muted">
        That page does not exist. It may have been renamed or moved.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="bg-ink px-6 py-3.5 font-display text-sm font-bold tracking-tight text-on-inverse uppercase hover:bg-accent"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="border-2 border-ink px-6 py-3.5 font-display text-sm font-bold tracking-tight uppercase hover:bg-highlight"
        >
          Our projects
        </Link>
      </div>
    </div>
  );
}
