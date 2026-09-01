import { Inter, Space_Grotesk } from 'next/font/google';

/**
 * Space Grotesk for display, Inter for body.
 *
 * Space Grotesk carries the oversized uppercase headlines without turning to
 * mush at 6rem, and its slightly odd letterforms keep the loud treatment from
 * reading as corporate. Inter does the reading.
 *
 * Loaded via next/font, which self-hosts the files and removes the
 * render-blocking request to fonts.googleapis.com.
 */
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const fontVariables = `${spaceGrotesk.variable} ${inter.variable}`;
