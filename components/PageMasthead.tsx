import Link from 'next/link';

/**
 * Page heading block: black slab, oversized uppercase title, diagonal cut on
 * the bottom edge so every interior page opens with the same gesture as the
 * home page.
 */
export function PageMasthead({
  kicker,
  title,
  standfirst,
  breadcrumb,
}: {
  kicker: string;
  title: string;
  standfirst?: string;
  breadcrumb?: { href: '/projects'; label: string };
}) {
  return (
    <div className="cut-bottom bg-inverse pb-[6vw] text-on-inverse">
      <div className="wrap pt-14 pb-6 md:pt-20">
        {breadcrumb ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <Link
              href={breadcrumb.href}
              className="font-display text-sm font-bold tracking-tight text-highlight uppercase hover:text-accent"
            >
              ← {breadcrumb.label}
            </Link>
          </nav>
        ) : null}

        <p className="sticker bg-highlight px-3 py-1 font-display text-xs font-bold tracking-[0.16em] text-ink uppercase">
          {kicker}
        </p>

        <h1 className="mt-6 max-w-5xl font-display text-5xl leading-[0.9] font-bold tracking-tight uppercase md:text-7xl">
          {title}
        </h1>

        {standfirst ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-inverse/70">{standfirst}</p>
        ) : null}
      </div>
    </div>
  );
}
