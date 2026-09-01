'use client';

import type { Statistic } from '@/lib/types';
import { useCountUp } from '@/lib/hooks';
import { formatStatValue } from '@/lib/utils';

/**
 * Impact figures as a flat yellow band with oversized numerals.
 *
 * Yellow is used as a backing block only — the numbers sit in black on top of
 * it, because acid yellow as text on white would fail contrast badly.
 *
 * Module scope so the reference is stable and the count-up effect is not torn
 * down on every parent render.
 */
const formatNumber = (value: number) => value.toLocaleString('en-LK');

function Figure({ stat }: { stat: Statistic }) {
  const numeric = typeof stat.value === 'number';
  const ref = useCountUp(typeof stat.value === 'number' ? stat.value : 0, formatNumber, {
    enabled: numeric,
  });

  return (
    <div>
      <dd className="font-display text-4xl leading-none font-bold tabular-nums md:text-6xl">
        {stat.prefix}
        {/* Final value is in the markup, so the served HTML is already correct;
            the hook only overwrites it while animating. */}
        <span ref={ref}>{formatStatValue(stat.value)}</span>
        {stat.suffix}
      </dd>
      <dt className="mt-3 font-display text-xs font-bold tracking-[0.16em] uppercase">
        {stat.label}
      </dt>
      {stat.note ? <p className="mt-1 text-xs text-ink-muted">{stat.note}</p> : null}
    </div>
  );
}

export function StatBand({ stats, label }: { stats: Statistic[]; label: string }) {
  if (stats.length === 0) return null;

  return (
    <section aria-label={label} className="bg-highlight text-ink">
      <div className="wrap py-14 md:py-20">
        <dl className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <Figure key={stat.id} stat={stat} />
          ))}
        </dl>
      </div>
    </section>
  );
}
