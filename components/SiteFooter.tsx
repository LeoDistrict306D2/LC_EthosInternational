import Link from 'next/link';
import { Facebook, Instagram, Mail } from 'lucide-react';
import { club } from '@/content/club';

/**
 * Footer: a black slab with a diagonal cut on its top edge, so the page ends
 * with the same angle it opened on.
 *
 * The affiliation chain is set as a sentence rather than a row of logos — the
 * district should not out-shout the club on the club's own site.
 *
 * A server component: no state, and the year resolves at build time.
 */
const columns = [
  {
    heading: 'Club',
    links: [
      { href: '/about', label: 'About' },
      { href: '/board', label: 'Board' },
      { href: '/past-presidents', label: 'History' },
      { href: '/achievements', label: 'Awards' },
    ],
  },
  {
    heading: 'Work',
    links: [
      { href: '/projects', label: 'Projects' },
      { href: '/gallery', label: 'Gallery' },
    ],
  },
  {
    heading: 'Join in',
    links: [
      { href: '/join', label: 'Become a member' },
      { href: '/contact', label: 'Contact' },
    ],
  },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="cut-top mt-20 bg-inverse pt-[6vw] text-on-inverse">
      <div className="wrap pb-14">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-3xl leading-[0.95] font-bold tracking-tight uppercase">
              Leo Club of
              <br />
              <span className="text-highlight">Ethos International</span>
            </p>
            <p className="mt-4 text-sm text-on-inverse/50">{club.motto}</p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-on-inverse/75">
              {club.description}
            </p>

            <ul className="mt-7 flex gap-3">
              {club.socials.instagram ? (
                <li>
                  <a
                    href={club.socials.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Instagram"
                    className="inline-flex h-11 w-11 items-center justify-center border-2 border-white/25 transition-colors hover:border-highlight hover:bg-highlight hover:text-ink"
                  >
                    <Instagram aria-hidden size={18} />
                  </a>
                </li>
              ) : null}
              {club.socials.facebook ? (
                <li>
                  <a
                    href={club.socials.facebook}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Facebook"
                    className="inline-flex h-11 w-11 items-center justify-center border-2 border-white/25 transition-colors hover:border-highlight hover:bg-highlight hover:text-ink"
                  >
                    <Facebook aria-hidden size={18} />
                  </a>
                </li>
              ) : null}
              {club.contact.email ? (
                <li>
                  <a
                    href={`mailto:${club.contact.email}`}
                    aria-label="Email"
                    className="inline-flex h-11 w-11 items-center justify-center border-2 border-white/25 transition-colors hover:border-highlight hover:bg-highlight hover:text-ink"
                  >
                    <Mail aria-hidden size={18} />
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 md:col-span-6 md:col-start-7">
            {columns.map((column) => (
              <nav key={column.heading} aria-label={column.heading}>
                <h2 className="font-display text-xs font-bold tracking-[0.16em] text-highlight uppercase">
                  {column.heading}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-on-inverse/85 transition-colors hover:text-highlight"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-white/15 pt-6">
          <p className="text-xs leading-relaxed text-on-inverse/55">
            {club.name} is a member club of{' '}
            <a
              href={club.districtUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="underline underline-offset-2 hover:text-highlight"
            >
              {club.district}
            </a>
            , part of{' '}
            <a
              href={club.multipleDistrictUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="underline underline-offset-2 hover:text-highlight"
            >
              {club.multipleDistrict}
            </a>
            , within Lions Clubs International.
            {club.sponsoringLionsClub ? ` Sponsored by the ${club.sponsoringLionsClub}.` : ''}
          </p>
          <p className="mt-3 text-xs text-on-inverse/40">
            © {year} {club.name}. {club.contact.address}
          </p>
        </div>
      </div>
    </footer>
  );
}
