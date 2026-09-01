import type { Metadata } from 'next';
import { club } from '@/content/club';
import { achievements } from '@/content/achievements';
import { PageMasthead } from '@/components/PageMasthead';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Awards',
  description: `Recognition earned by ${club.name}.`,
  alternates: { canonical: '/achievements' },
};

const levelLabel: Record<string, string> = {
  winner: 'Winner',
  'runner-up': 'Runner-up',
  merit: 'Merit',
  recognition: 'Recognition',
};

export default function AchievementsPage() {
  const awards = [...achievements].sort((a, b) => b.year.localeCompare(a.year));

  return (
    <>
      <PageMasthead
        kicker={awards.length > 0 ? `${awards.length} awards` : 'Awards'}
        title="Trophy shelf."
        standfirst="Not why we do it, but we are not going to pretend we are not pleased."
      />

      <div className="wrap band">
        {awards.length === 0 ? (
          <p className="max-w-xl text-ink-muted">No awards recorded yet.</p>
        ) : (
          <ul className="grid gap-6 md:grid-cols-3">
            {awards.map((award, index) => (
              <li key={award.id}>
                <Reveal delay={index * 60} className="h-full">
                  <div className="flex h-full flex-col border-4 border-ink p-6">
                    <p className="font-display text-5xl leading-none font-bold tabular-nums">
                      {award.year}
                    </p>
                    <h2 className="mt-4 font-display text-xl font-bold tracking-tight uppercase">
                      {award.title}
                    </h2>
                    {award.competition ? (
                      <p className="mt-1.5 text-xs text-ink-faint">{award.competition}</p>
                    ) : null}
                    {award.description ? (
                      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                        {award.description}
                      </p>
                    ) : null}
                    {award.level ? (
                      <span className="mt-auto pt-6">
                        <span className="sticker inline-block bg-highlight px-3 py-1 font-display text-xs font-bold tracking-[0.14em] uppercase">
                          {levelLabel[award.level] ?? award.level}
                        </span>
                      </span>
                    ) : null}
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
