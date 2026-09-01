import type { Metadata } from 'next';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';
import { Photo } from '@/components/Photo';
import { StatBand } from '@/components/StatBand';

export const metadata: Metadata = {
  title: 'About',
  description: club.about.mission,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageMasthead
        kicker="About the club"
        title="Started with fourteen."
        standfirst={club.about.mission}
      />

      <div className="wrap band grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          {club.about.story.map((paragraph, index) => (
            <p key={index} className="mb-6 text-lg leading-relaxed text-ink-muted last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="md:col-span-4 md:col-start-9">
          <Photo image={club.heroImage} ratio="landscape" block sizes="(min-width: 768px) 33vw, 100vw" />
          <dl className="mt-12">
            {[
              { term: 'Chartered', value: club.charterDate?.slice(0, 4) ?? '—' },
              { term: 'District', value: club.district },
              { term: 'Multiple district', value: club.multipleDistrict },
              { term: 'Sponsor', value: club.sponsoringLionsClub ?? '—' },
            ].map((row) => (
              <div key={row.term} className="flex justify-between gap-4 border-b-2 border-ink py-3">
                <dt className="font-display text-xs font-bold tracking-[0.14em] uppercase">
                  {row.term}
                </dt>
                <dd className="text-right text-sm text-ink-muted">{row.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <section className="bg-inverse band text-on-inverse">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-xs font-bold tracking-[0.18em] text-highlight uppercase">
              Mission
            </h2>
            <p className="mt-5 font-display text-2xl leading-snug font-bold tracking-tight uppercase">
              {club.about.mission}
            </p>
          </div>
          <div>
            <h2 className="font-display text-xs font-bold tracking-[0.18em] text-highlight uppercase">
              Vision
            </h2>
            <p className="mt-5 font-display text-2xl leading-snug font-bold tracking-tight uppercase">
              {club.about.vision}
            </p>
          </div>
        </div>
      </section>

      <StatBand stats={club.stats} label="Club record to date" />
    </>
  );
}
