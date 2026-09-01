'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { club } from '@/content/club';
import { cn } from '@/lib/utils';

/**
 * Header.
 *
 * Black bar, white type, thick yellow rule underneath. Nav links use the
 * `.rule-link` underline that grows on hover and stays put on the current page,
 * so the active state is the same gesture as the hover state rather than a
 * separate colour.
 *
 * The mobile menu is a full-screen black takeover with oversized type — a
 * school site should not hide its navigation in a cramped dropdown.
 *
 * Accessibility is structural: a real `aria-expanded`/`aria-controls`
 * disclosure, Escape closes and returns focus to the toggle, body scroll locks
 * while open, and the current route carries `aria-current`.
 */
const nav = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/board', label: 'Board' },
  { href: '/achievements', label: 'Awards' },
  { href: '/past-presidents', label: 'History' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Reset on navigation by adjusting state during render — React's documented
  // pattern — rather than in an effect, which costs an extra render pass.
  const [menuPathname, setMenuPathname] = useState(pathname);
  if (pathname !== menuPathname) {
    setMenuPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    panelRef.current?.querySelector<HTMLElement>('a')?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-inverse text-on-inverse">
        <div className="wrap flex h-18 items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3" aria-label={`${club.name} — home`}>
            <Image
              src={club.logo.src}
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 shrink-0 object-contain"
              priority
            />
            <span className="font-display text-sm leading-none font-bold tracking-tight uppercase sm:text-base">
              Leo Ethos
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {nav.map((item) => {
                const active = pathname === item.href || pathname.startsWith(item.href + '/');
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className="rule-link pb-1 font-display text-sm font-bold tracking-tight uppercase"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Link
            href="/join"
            className="hidden shrink-0 bg-highlight px-5 py-2.5 font-display text-sm font-bold tracking-tight text-ink uppercase transition-colors hover:bg-accent hover:text-on-inverse lg:inline-block"
          >
            Join
          </Link>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center lg:hidden"
          >
            {open ? <X aria-hidden size={24} /> : <Menu aria-hidden size={24} />}
          </button>
        </div>
      </div>

      {/* Yellow rule: the club's line across the top of every page. */}
      <div aria-hidden className="h-1.5 bg-highlight" />

      {/* Full-screen mobile takeover */}
      <div
        id="site-menu"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-0 top-[calc(4.5rem+0.375rem)] z-40 overflow-y-auto bg-inverse text-on-inverse lg:hidden"
      >
        <nav aria-label="Primary" className="wrap py-6">
          <ul>
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <li key={item.href} className="border-b border-white/15">
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'block py-5 font-display text-3xl font-bold tracking-tight uppercase',
                      active ? 'text-highlight' : 'text-on-inverse',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/join"
            className="mt-8 block bg-highlight px-5 py-4 text-center font-display text-xl font-bold tracking-tight text-ink uppercase"
          >
            Join the club
          </Link>
        </nav>
      </div>
    </header>
  );
}
