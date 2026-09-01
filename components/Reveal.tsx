'use client';

import type { ReactNode } from 'react';
import { useReveal } from '@/lib/hooks';
import { cn } from '@/lib/utils';

/**
 * Reveal wrapper. Content pops in with a slight scale — the snappier motion
 * curve suits a school club better than a slow editorial fade.
 *
 * Renders visible; the hook hides it after mount only when animating is safe,
 * so nothing is lost with JavaScript off or reduced motion on.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn('reveal', className)}
      style={delay ? ({ ['--reveal-delay' as string]: `${delay}ms` }) : undefined}
    >
      {children}
    </div>
  );
}
