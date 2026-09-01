import type { Project } from '@/lib/types';

/**
 * Projects.
 *
 * TODO(content): illustrative records in the club's format — replace with real
 * project data. `heroImage` points at the shared placeholder until real
 * photography exists.
 */
const placeholder = (alt: string) => ({
  src: '/images/projects/placeholder.png',
  alt,
  width: 1600,
  height: 1200,
});

export const projects: Project[] = [
  {
    id: 'red-week',
    slug: 'red-week',
    title: 'Red Week',
    summary:
      'A week-long blood donation campaign across the school, run with the National Blood Transfusion Service.',
    category: 'health',
    year: '2025/26',
    date: '2025-08-25',
    location: 'Ethos International College',
    featured: true,
    heroImage: placeholder('Students queuing at the Red Week blood donation camp'),
    story: [
      'The first year we ran a one-day camp and collected 41 units. The second year we ran a full week of awareness first, then the camp — and collected 138.',
      'The lesson we took from that: the camp is the easy part. The week of getting people over the fear is the actual project.',
      'Sixth-formers who are old enough to donate run the awareness sessions for the younger years, which works far better than a teacher doing it.',
    ],
    objectives: [
      'Run five days of awareness before the camp, not just the camp',
      'Get first-time donors over the line, not only repeat donors',
      'Have students, not staff, deliver the awareness sessions',
    ],
    impact: [
      { id: 'units', value: 138, label: 'Units collected' },
      { id: 'first', value: 86, label: 'First-time donors' },
      { id: 'sessions', value: 22, label: 'Awareness sessions' },
    ],
    partners: [{ name: 'National Blood Transfusion Service' }],
  },
  {
    id: 'exam-week',
    slug: 'exam-week',
    title: 'Breathe',
    summary:
      'An exam-stress support week: quiet rooms, peer counselling, and free breakfast during O/L and A/L season.',
    category: 'youth-development',
    year: '2025/26',
    date: '2025-05-12',
    location: 'Ethos International College',
    featured: true,
    heroImage: placeholder('A quiet study room set up during exam season'),
    story: [
      'Exam season at this school used to mean students skipping breakfast, sleeping four hours, and nobody talking about it.',
      'Breathe is not a campaign with a slogan. It is three quiet rooms, a breakfast table from 6:30, and twelve trained peer listeners on a rota. Small, boring, and the single most used thing the club does.',
    ],
    objectives: [
      'Open three quiet rooms for the full exam period',
      'Train peer listeners with the school counsellor before the season',
      'Serve breakfast every exam morning',
    ],
    impact: [
      { id: 'students', value: 310, label: 'Students used it' },
      { id: 'breakfasts', value: 1240, label: 'Breakfasts served' },
      { id: 'listeners', value: 12, label: 'Peer listeners trained' },
    ],
  },
  {
    id: 'shelf-life',
    slug: 'shelf-life',
    title: 'Shelf Life',
    summary:
      'A book drive that restocked two under-resourced school libraries in the Colombo district.',
    category: 'education',
    year: '2024/25',
    date: '2025-02-07',
    location: 'Colombo district',
    featured: true,
    heroImage: placeholder('Donated books sorted into boxes by reading level'),
    story: [
      'We collected 2,300 books and gave away 1,780. The gap is the interesting number: a third of what people donate to a book drive is not usable — wrong reading level, wrong language, or falling apart.',
      'So we sorted by reading level and language before delivery rather than dumping boxes on two libraries that did not have the staff to sort them.',
    ],
    impact: [
      { id: 'collected', value: 2300, label: 'Books collected' },
      { id: 'placed', value: 1780, label: 'Books placed' },
      { id: 'libraries', value: 2, label: 'Libraries restocked' },
    ],
  },
  {
    id: 'clean-coast',
    slug: 'clean-coast',
    title: 'Clean Coast',
    summary: 'A joint beach clean-up at Mount Lavinia with three other school Leo clubs.',
    category: 'environment',
    year: '2024/25',
    date: '2024-10-05',
    location: 'Mount Lavinia',
    heroImage: placeholder('Students collecting waste on Mount Lavinia beach'),
    impact: [
      { id: 'students', value: 160, label: 'Students took part' },
      { id: 'waste', value: 620, suffix: ' kg', label: 'Waste collected' },
      { id: 'clubs', value: 4, label: 'Clubs joined' },
    ],
  },
  {
    id: 'kit-out',
    slug: 'kit-out',
    title: 'Kit Out',
    summary: 'School supply packs for 90 students at the start of the January term.',
    category: 'community-service',
    year: '2023/24',
    date: '2024-01-15',
    location: 'Colombo',
    heroImage: placeholder('Supply packs prepared for the January term'),
    impact: [
      { id: 'packs', value: 90, label: 'Packs given out' },
      { id: 'raised', value: 340000, prefix: 'Rs ', label: 'Raised by students' },
    ],
  },
  {
    id: 'first-charter',
    slug: 'first-charter',
    title: 'Charter Day',
    summary: 'The club charter ceremony, and the first project run the same week.',
    category: 'leadership',
    year: '2022/23',
    date: '2022-09-05',
    location: 'Ethos International College',
    heroImage: placeholder('The Leo club charter ceremony at the school hall'),
    impact: [{ id: 'founding', value: 14, label: 'Founding members' }],
  },
];
