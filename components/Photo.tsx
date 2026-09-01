import Image from 'next/image';
import type { ImageRef } from '@/lib/types';
import { cn } from '@/lib/utils';

const ratios = {
  wide: 'aspect-[2/1]',
  landscape: 'aspect-[4/3]',
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
} as const;

/**
 * Every photograph goes through here, so all of them get intrinsic dimensions
 * and a fixed aspect box — no image can shift the layout as it loads.
 *
 * `block` puts a flat yellow slab behind the frame. It is the site's one
 * decorative move and it is deliberately flat: no shadow, no blur, no gradient.
 */
export function Photo({
  image,
  ratio = 'landscape',
  priority = false,
  sizes = '100vw',
  block = false,
  className,
}: {
  image: ImageRef;
  ratio?: keyof typeof ratios;
  priority?: boolean;
  sizes?: string;
  block?: boolean;
  className?: string;
}) {
  return (
    <figure className={cn('relative m-0', className)}>
      {block ? (
        <div
          aria-hidden
          className="absolute top-4 left-4 hidden h-full w-full bg-highlight sm:block"
        />
      ) : null}
      <div className={cn('relative overflow-hidden bg-panel', ratios[ratio])}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          className="object-cover"
        />
      </div>
      {image.caption ? (
        <figcaption className="relative mt-2 text-xs text-ink-faint">{image.caption}</figcaption>
      ) : null}
    </figure>
  );
}
