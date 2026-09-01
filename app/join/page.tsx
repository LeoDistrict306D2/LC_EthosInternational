import type { Metadata } from 'next';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';
import { JoinForm } from '@/components/JoinForm';

export const metadata: Metadata = {
  title: 'Join',
  description: `Membership of ${club.name} is open to every student at the college.`,
  alternates: { canonical: '/join' },
};

const reasons = [
  {
    title: 'You will run one',
    body: 'Every member leads a project before they leave school. Real budget, real deadline, your name on it.',
  },
  {
    title: 'It fits a term',
    body: 'Projects are scoped to finish inside one school term, so nothing drags into your exam year.',
  },
  {
    title: 'It counts',
    body: 'Leadership on a real project is worth more on a university application than another certificate.',
  },
  {
    title: 'You will not be alone',
    body: 'Every first-time lead is paired with someone who has done it before. Nobody is thrown in cold.',
  },
];

export default function JoinPage() {
  return (
    <>
      <PageMasthead
        kicker="Membership"
        title="Come and run something."
        standfirst="Open to every student at Ethos International College. No experience needed, no audition."
      />

      <div className="wrap band grid gap-14 md:grid-cols-12">
        <section className="md:col-span-5" aria-labelledby="why">
          <h2 id="why" className="font-display text-2xl font-bold tracking-tight uppercase">
            What you are signing up for
          </h2>
          <ol className="mt-7">
            {reasons.map((reason, index) => (
              <li key={reason.title} className="border-t-2 border-ink py-5 last:border-b-2">
                <div className="flex gap-5">
                  <span
                    aria-hidden
                    className="font-display text-2xl leading-none font-bold text-highlight tabular-nums"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold tracking-tight uppercase">
                      {reason.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{reason.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="md:col-span-6 md:col-start-7" aria-labelledby="enquiry">
          <h2 id="enquiry" className="font-display text-2xl font-bold tracking-tight uppercase">
            Sign up
          </h2>
          <p className="mt-4 mb-8 max-w-lg text-ink-muted">
            Fill this in and it opens a pre-written email to the club secretary. We reply to
            everything, usually within a week.
          </p>
          <JoinForm email={club.contact.email ?? ''} />
          {club.contact.email ? (
            <p className="mt-6 text-sm text-ink-faint">
              Or write straight to{' '}
              <a
                href={`mailto:${club.contact.email}`}
                className="font-medium text-ink-muted underline underline-offset-2 hover:text-accent"
              >
                {club.contact.email}
              </a>
              .
            </p>
          ) : null}
        </section>
      </div>
    </>
  );
}
