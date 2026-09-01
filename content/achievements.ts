import type { Achievement } from '@/lib/types';

/** TODO(content): confirm against the club's award records. */
export const achievements: Achievement[] = [
  {
    id: 'school-club-2025',
    title: 'Best School Leo Club',
    competition: 'Leo District 306 D2 Convention',
    year: '2025',
    level: 'winner',
    description: 'Awarded in the club’s third year, largely on the strength of Red Week.',
  },
  {
    id: 'health-2025',
    title: 'Outstanding Health Project',
    competition: 'Leo District 306 D2 Convention',
    year: '2025',
    level: 'winner',
    description: 'For Red Week and the shift from a one-day camp to a full awareness campaign.',
  },
  {
    id: 'newcomer-2023',
    title: 'Most Promising New Club',
    competition: 'Leo District 306 D2 Convention',
    year: '2023',
    level: 'runner-up',
  },
];
