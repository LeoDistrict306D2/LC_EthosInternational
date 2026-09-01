import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/lib/types';
import { cn, formatDate } from '@/lib/utils';
import { Photo } from './Photo';
import { Reveal } from './Reveal';

/**
 * A project as a full-width block, alternating side to side down the page.
 *
 * Deliberately not a card grid: at this scale a school club has a handful of
 * campaigns a year, and each one deserves the width. The oversized index number
 * is the connective tissue that makes a stack of blocks read as a set.
 */
export function ProjectBlock({ project, index = 0 }: { project: Project; index?: number }) {
  const flipped = index % 2 === 1;

  return (
    <Reveal delay={Math.min(index, 3) * 70}>
      <article className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
        <div className={cn(flipped && 'md:order-2')}>
          <Link href={`/projects/${project.slug}`} tabIndex={-1} aria-hidden>
            <Photo
              image={project.heroImage}
              ratio="landscape"
              block={!flipped}
              sizes="(min-width: 768px) 48vw, 100vw"
            />
          </Link>
        </div>

        <div className={cn(flipped && 'md:order-1')}>
          <span
            aria-hidden
            className="block font-display text-6xl leading-none font-bold text-highlight tabular-nums md:text-8xl"
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          <p className="mt-3 font-display text-xs font-bold tracking-[0.16em] text-accent uppercase">
            {formatDate(project.date, { year: 'numeric', month: 'long' })}
            {project.location ? ` · ${project.location}` : ''}
          </p>

          <h3 className="mt-3 font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase md:text-5xl">
            <Link href={`/projects/${project.slug}`} className="hover:text-accent">
              {project.title}
            </Link>
          </h3>

          <p className="mt-4 max-w-md leading-relaxed text-ink-muted">{project.summary}</p>

          {project.impact && project.impact.length > 0 ? (
            <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
              {project.impact.slice(0, 3).map((stat) => (
                <div key={stat.id}>
                  <dd className="font-display text-3xl font-bold tabular-nums">
                    {stat.prefix}
                    {typeof stat.value === 'number'
                      ? stat.value.toLocaleString('en-LK')
                      : stat.value}
                    {stat.suffix}
                  </dd>
                  <dt className="mt-0.5 text-[0.65rem] font-bold tracking-[0.14em] text-ink-faint uppercase">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          ) : null}

          <Link
            href={`/projects/${project.slug}`}
            className="group mt-7 inline-flex items-center gap-2 bg-ink px-5 py-3 font-display text-sm font-bold tracking-tight text-on-inverse uppercase transition-colors hover:bg-accent"
          >
            Read more
            <ArrowRight
              aria-hidden
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
