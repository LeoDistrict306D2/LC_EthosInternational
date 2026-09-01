import type { Metadata } from 'next';
import Link from 'next/link';
import { club } from '@/content/club';
import { gallery } from '@/content/gallery';
import { PageMasthead } from '@/components/PageMasthead';
import { Photo } from '@/components/Photo';

export const metadata: Metadata = {
  title: 'Gallery',
  description: `Photographs from campaigns run by ${club.name}.`,
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return (
    <>
      <PageMasthead
        kicker="Photographs"
        title="Receipts."
        standfirst="Pictures from the campaigns, filed against the project they belong to."
      />

      <div className="wrap band">
        {gallery.length === 0 ? (
          <div className="max-w-xl">
            <p className="text-ink-muted">
              The gallery is empty while the club&rsquo;s photography is being collected. Campaign
              photographs are already published on each project page.
            </p>
            <Link
              href="/projects"
              className="rule-link mt-6 inline-block pb-1 font-display text-sm font-bold tracking-tight uppercase"
            >
              Go to the campaigns →
            </Link>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <Photo
                key={item.id}
                image={item}
                ratio="landscape"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
