import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { club } from '@/content/club';
import { projects } from '@/content/projects';
import { board } from '@/content/board';
import { byDateDesc, getInitials, sortExecutives } from '@/lib/utils';
import { Photo } from '@/components/Photo';
import { Reveal } from '@/components/Reveal';
import { StatBand } from '@/components/StatBand';
import { ProjectBlock } from '@/components/ProjectBlock';

/**
 * Home.
 *
 * Opens with type at full volume and no image at all — the headline IS the
 * hero. The photograph arrives underneath it, full width, so the page reads
 * as a statement followed by evidence rather than a stock banner.
 */
export default function HomePage() {
  const featured = byDateDesc(projects.filter((project) => project.featured)).slice(0, 3);
  const leadership = sortExecutives(board).slice(0, 4);
  const charterYear = club.charterDate ? new Date(club.charterDate).getFullYear() : null;

  return (
    <>
      {/* Hero: type only ------------------------------------------------ */}
      <section className="wrap pt-14 pb-12 md:pt-24 md:pb-16">
        <p className="sticker inline-block bg-highlight px-3 py-1 font-display text-xs font-bold tracking-[0.16em] uppercase">
          {club.district}
          {charterYear ? ` · Est. ${charterYear}` : ''}
        </p>

        <h1 className="mt-8 font-display text-6xl leading-[0.86] font-bold tracking-tight uppercase md:text-giant">
          {club.tagline}
        </h1>

        <div className="mt-10 grid gap-8 border-t-4 border-ink pt-8 md:grid-cols-12">
          <p className="text-lg leading-relaxed text-ink-muted md:col-span-7">{club.description}</p>

          <div className="flex flex-wrap items-start gap-3 md:col-span-5 md:justify-end">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 bg-accent px-6 py-4 font-display text-sm font-bold tracking-tight text-on-inverse uppercase transition-colors hover:bg-accent-strong"
            >
              What we do
              <ArrowRight
                aria-hidden
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/join"
              className="inline-flex items-center border-2 border-ink px-6 py-4 font-display text-sm font-bold tracking-tight uppercase transition-colors hover:bg-highlight"
            >
              Join us
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap">
        <Photo image={club.heroImage} ratio="wide" priority sizes="100vw" />
      </section>

      <StatBand stats={club.stats} label="Club record to date" />

      {/* How we work ---------------------------------------------------- */}
      <section className="wrap band" aria-labelledby="rules">
        <h2
          id="rules"
          className="font-display text-4xl leading-[0.92] font-bold tracking-tight uppercase md:text-6xl"
        >
          Four rules
        </h2>

        <ol className="mt-10 grid gap-px bg-ink sm:grid-cols-2">
          {club.about.values.map((value, index) => (
            <li key={value.title} className="bg-page p-7">
              <Reveal delay={index * 70}>
                <span
                  aria-hidden
                  className="font-display text-5xl leading-none font-bold text-highlight tabular-nums"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight uppercase">
                  {value.title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-ink-muted">{value.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* Projects ------------------------------------------------------- */}
      <section className="bg-panel band" aria-labelledby="projects-heading">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2
              id="projects-heading"
              className="font-display text-4xl leading-[0.92] font-bold tracking-tight uppercase md:text-6xl"
            >
              Campaigns
            </h2>
            <Link
              href="/projects"
              className="rule-link pb-1 font-display text-sm font-bold tracking-tight uppercase"
            >
              All {projects.length} projects →
            </Link>
          </div>

          <div className="mt-14 flex flex-col gap-20">
            {featured.map((project, index) => (
              <ProjectBlock key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Board ---------------------------------------------------------- */}
      <section className="wrap band" aria-labelledby="board-heading">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2
            id="board-heading"
            className="font-display text-4xl leading-[0.92] font-bold tracking-tight uppercase md:text-6xl"
          >
            Who runs it
          </h2>
          <Link
            href="/board"
            className="rule-link pb-1 font-display text-sm font-bold tracking-tight uppercase"
          >
            Full board →
          </Link>
        </div>

        <p className="mt-5 max-w-xl text-ink-muted">
          Elected by the members for {leadership[0]?.term ?? 'this year'}. Every one of them runs a
          project as well as holding a post.
        </p>

        <ul className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {leadership.map((member, index) => (
            <li key={member.id}>
              <Reveal delay={index * 60}>
                {member.photo ? (
                  <Photo
                    image={member.photo}
                    ratio="portrait"
                    sizes="(min-width: 1024px) 24vw, 45vw"
                  />
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
      </section>

      {/* Close ---------------------------------------------------------- */}
      <section className="cut-top bg-accent pt-[6vw] text-on-inverse">
        <div className="wrap pt-8 pb-20">
          <h2 className="font-display text-4xl leading-[0.9] font-bold tracking-tight uppercase md:text-6xl">
            Join the loudest
            <br />
            club in school.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-on-inverse/80">
            Open to every student at Ethos International College. You will be running something of
            your own before you leave.
          </p>
          <Link
            href="/join"
            className="group mt-8 inline-flex items-center gap-2 bg-highlight px-7 py-4 font-display text-sm font-bold tracking-tight text-ink uppercase transition-colors hover:bg-page"
          >
            Sign up
            <ArrowRight
              aria-hidden
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
