import type { Metadata } from 'next';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';

export const metadata: Metadata = {
  title: 'Contact',
  description: `How to reach ${club.name}.`,
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageMasthead
        kicker="Contact"
        title="Talk to us."
        standfirst="Sponsorship, partnerships, or another club that wants to run something together."
      />

      <div className="wrap band grid gap-12 md:grid-cols-12">
        <section className="md:col-span-7" aria-labelledby="details">
          <h2 id="details" className="font-display text-2xl font-bold tracking-tight uppercase">
            Details
          </h2>
          <dl className="mt-6 border-t-4 border-ink">
            {club.contact.email ? (
              <div className="flex items-start gap-4 border-b border-rule py-5">
                <Mail aria-hidden size={18} className="mt-1.5 shrink-0 text-accent" />
                <div>
                  <dt className="font-display text-xs font-bold tracking-[0.14em] uppercase">
                    Email
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={`mailto:${club.contact.email}`}
                      className="font-display text-xl font-bold tracking-tight break-all hover:text-accent"
                    >
                      {club.contact.email}
                    </a>
                  </dd>
                </div>
              </div>
            ) : null}

            {club.contact.phone ? (
              <div className="flex items-start gap-4 border-b border-rule py-5">
                <Phone aria-hidden size={18} className="mt-1.5 shrink-0 text-accent" />
                <div>
                  <dt className="font-display text-xs font-bold tracking-[0.14em] uppercase">
                    Phone
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={`tel:${club.contact.phone}`}
                      className="font-display text-xl font-bold tracking-tight hover:text-accent"
                    >
                      {club.contact.phone}
                    </a>
                  </dd>
                </div>
              </div>
            ) : null}

            {club.contact.address ? (
              <div className="flex items-start gap-4 border-b border-rule py-5">
                <MapPin aria-hidden size={18} className="mt-1.5 shrink-0 text-accent" />
                <div>
                  <dt className="font-display text-xs font-bold tracking-[0.14em] uppercase">
                    Find us
                  </dt>
                  <dd className="mt-1.5 font-display text-xl font-bold tracking-tight">
                    {club.contact.address}
                  </dd>
                </div>
              </div>
            ) : null}
          </dl>
        </section>

        <section className="md:col-span-4 md:col-start-9" aria-labelledby="social">
          <h2 id="social" className="font-display text-2xl font-bold tracking-tight uppercase">
            Follow
          </h2>
          <ul className="mt-6">
            {club.socials.instagram ? (
              <li className="border-t-2 border-b-2 border-ink">
                <a
                  href={club.socials.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 py-4 font-display font-bold uppercase transition-colors hover:text-accent"
                >
                  <Instagram aria-hidden size={18} />
                  Instagram
                </a>
              </li>
            ) : null}
            {club.socials.facebook ? (
              <li className="border-b-2 border-ink">
                <a
                  href={club.socials.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 py-4 font-display font-bold uppercase transition-colors hover:text-accent"
                >
                  <Facebook aria-hidden size={18} />
                  Facebook
                </a>
              </li>
            ) : null}
          </ul>

          <p className="mt-8 text-sm leading-relaxed text-ink-faint">
            Want to join instead? The membership page has a form that reaches the secretary
            directly.
          </p>
        </section>
      </div>
    </>
  );
}
