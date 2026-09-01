import type { Metadata } from 'next';
import { club } from '@/content/club';
import { board } from '@/content/board';
import { getInitials, sortExecutives } from '@/lib/utils';
import { PageMasthead } from '@/components/PageMasthead';
import { Photo } from '@/components/Photo';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Board',
  description: `The student board of ${club.name}.`,
  alternates: { canonical: '/board' },
};

export default function BoardPage() {
  const members = sortExecutives(board);
  const officers = members.slice(0, 4);
  const rest = members.slice(4);
  const term = members[0]?.term ?? '';

  return (
    <>
      <PageMasthead
        kicker={term ? `Board ${term}` : 'Board'}
        title="Who runs it."
        standfirst="Elected by the members. Every one of them runs a project as well as holding a post."
      />

      <div className="wrap band">
        <ul className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {officers.map((member, index) => (
            <li key={member.id}>
              <Reveal delay={index * 60}>
                {member.photo ? (
                  <Photo image={member.photo} ratio="portrait" sizes="(min-width: 1024px) 24vw, 45vw" />
                ) : (
                  <div
                    aria-hidden
                    className="flex aspect-[3/4] items-center justify-center bg-ink font-display text-4xl font-bold text-highlight"
                  >
                    {getInitials(member.name)}
                  </div>
                )}
                <p className="mt-3 font-display text-base leading-tight font-bold uppercase">
                  {member.name}
                </p>
                <p className="mt-1 text-xs text-ink-faint">{member.position}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        {rest.length > 0 ? (
          <section className="mt-16" aria-labelledby="directors">
            <h2 id="directors" className="font-display text-2xl font-bold tracking-tight uppercase">
              Directors and officers
            </h2>
            <ul className="mt-6 grid gap-x-10 sm:grid-cols-2">
              {rest.map((member) => (
                <li
                  key={member.id}
                  className="flex flex-col gap-0.5 border-b-2 border-ink py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                >
                  <span className="font-display font-bold uppercase">{member.name}</span>
                  <span className="shrink-0 text-xs text-ink-faint">{member.position}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </>
  );
}
