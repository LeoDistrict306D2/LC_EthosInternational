import type { Metadata } from 'next';
import { club } from '@/content/club';
import { pastPresidents } from '@/content/past-presidents';
import { PageMasthead } from '@/components/PageMasthead';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'History',
  description: `Every president of ${club.name} since charter.`,
  alternates: { canonical: '/past-presidents' },
};

export default function PastPresidentsPage() {
  const years = [...pastPresidents].sort((a, b) => b.year.localeCompare(a.year));

  return (
    <>
      <PageMasthead
        kicker={`${years.length} terms`}
        title="Short history."
        standfirst="A young club, so the list is short. Each president sets a theme for the year."
      />

      <div className="wrap band">
        <ol className="grid gap-px bg-ink">
          {years.map((president, index) => (
            <li key={president.year} className="bg-page p-7">
              <Reveal delay={index * 60}>
                <div className="grid gap-4 md:grid-cols-12">
                  <p className="font-display text-3xl leading-none font-bold text-highlight tabular-nums md:col-span-2">
                    {president.year}
                  </p>
                  <div className="md:col-span-4">
                    <p className="font-display text-xl font-bold tracking-tight uppercase">
                      {president.name}
                    </p>
                    {president.theme ? (
                      <p className="mt-1 text-sm text-accent">{president.theme}</p>
                    ) : null}
                  </div>
                  <div className="md:col-span-6">
                    {president.highlights && president.highlights.length > 0 ? (
                      <ul className="space-y-1">
                        {president.highlights.map((highlight) => (
                          <li key={highlight} className="text-sm leading-relaxed text-ink-muted">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-ink-faint">—</p>
                    )}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
