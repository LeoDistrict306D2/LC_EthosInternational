'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Membership enquiry form.
 *
 * No backend, so rather than render a form that silently discards what students
 * type, this composes a pre-filled email and hands it to their mail client. It
 * works, needs no server or third-party form service, and no personal data
 * passes through anyone else's hands.
 */
export function JoinForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '');

    const body = [
      `Name: ${name}`,
      `Year group: ${String(data.get('year') ?? '')}`,
      `Age: ${String(data.get('age') ?? '')}`,
      '',
      String(data.get('message') ?? ''),
    ].join('\n');

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      `Membership enquiry — ${name}`,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  const field =
    'mt-2 w-full border-2 border-ink bg-page px-3 py-3 text-ink focus:border-accent focus:outline-none';
  const label = 'block font-display text-xs font-bold uppercase tracking-[0.14em]';

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="join-name" className={label}>
            Your name
          </label>
          <input id="join-name" name="name" type="text" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="join-year" className={label}>
            Year group
          </label>
          <input id="join-year" name="year" type="text" required className={field} />
        </div>
        <div>
          <label htmlFor="join-age" className={label}>
            Age
          </label>
          <input id="join-age" name="age" type="number" min={12} max={30} required className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="join-message" className={label}>
            What do you want to work on?
          </label>
          <textarea id="join-message" name="message" rows={5} className={field} />
        </div>
      </div>

      <button
        type="submit"
        className="group mt-6 inline-flex items-center gap-2 bg-ink px-6 py-4 font-display text-sm font-bold tracking-tight text-on-inverse uppercase transition-colors hover:bg-accent"
      >
        Send it
        <ArrowRight aria-hidden size={16} className="transition-transform group-hover:translate-x-1" />
      </button>

      <p aria-live="polite" className="mt-4 min-h-[1.5rem] text-sm text-ink-muted">
        {sent
          ? 'Your email app should have opened with the message ready. If it did not, write to us at the address below.'
          : ''}
      </p>
    </form>
  );
}
