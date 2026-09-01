import type { Club } from '@/lib/types';

/**
 * Leo Club of Ethos International College Colombo VII — club record.
 *
 * A school-based club, so the voice here is younger and the copy shorter than a
 * community club's. Everything on the site reads off this file.
 *
 * TODO(content): charter date, roster, contact details and photography are
 * placeholders pending real values from the club.
 */
export const club: Club = {
  name: 'Leo Club of Ethos International College Colombo VII',
  shortName: 'Ethos International',
  tagline: 'Loud about the right things.',
  motto: 'Leadership · Experience · Opportunity',
  description:
    'A school-based Leo club at Ethos International College, Colombo 07. Run by students, for whatever the school and the neighbourhood need next — and we would rather be noisy about a cause than quiet about ourselves.',
  charterDate: '2022-09-05',

  district: 'Leo District 306 D2',
  multipleDistrict: 'Leo Multiple District 306',
  sponsoringLionsClub: 'Lions Club of Colombo Host',
  districtUrl: 'https://leodistrict306d2.org/',
  multipleDistrictUrl: 'https://www.leomd306.org/',

  logo: {
    src: '/images/logo/logo.png',
    alt: 'Leo Club of Ethos International College emblem',
    width: 512,
    height: 512,
  },
  heroImage: {
    src: '/images/hero/hero.png',
    alt: 'Students of the Leo Club of Ethos International College at a campus event',
    width: 2000,
    height: 1000,
  },

  contact: {
    email: 'leoethosinternational@gmail.com',
    address: 'Ethos International College, Colombo 07, Sri Lanka',
  },

  socials: {
    instagram: 'https://www.instagram.com/leoethosinternational',
    facebook: 'https://www.facebook.com/leoethosinternational',
    email: 'leoethosinternational@gmail.com',
  },

  siteUrl: 'https://ethos.leo306d2.org',

  stats: [
    { id: 'members', value: 74, label: 'Student members' },
    { id: 'projects', value: 29, label: 'Projects run' },
    { id: 'raised', value: 1850000, prefix: 'Rs ', label: 'Raised for causes' },
    { id: 'years', value: 4, label: 'Years running' },
  ],

  about: {
    story: [
      'The club started in 2022 with fourteen students and one idea: the school already had plenty of clubs that met, and not many that did anything.',
      'Four years later it is the largest society in the school. We run campaigns, not meetings — a blood drive, a book drive, an exam-stress week, a beach clean. If it can be organised in a term, we will try it.',
      'The point is not the projects. It is that a fifteen-year-old who has run a project with a real budget and a real deadline is a different person by the time they leave school.',
    ],
    mission:
      'To give every member a project of their own to run before they leave school, and to make the causes we back impossible to ignore.',
    vision:
      'A school where volunteering is the normal thing to do, not the notable thing to do.',
    values: [
      {
        title: 'Say it loud',
        description:
          'A cause nobody hears about raises nothing. We are unembarrassed about making noise for the things that need it.',
      },
      {
        title: 'Everyone runs one',
        description:
          'Every member leads a project before they leave. That is the deal when you join.',
      },
      {
        title: 'Finish the term',
        description:
          'Projects are scoped to fit one school term, so they actually get finished rather than handed on.',
      },
      {
        title: 'No passengers',
        description:
          'Turning up matters. Attendance is tracked, and the roster is published to the club.',
      },
    ],
  },
};
