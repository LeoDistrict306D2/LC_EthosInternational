import type { Metadata } from 'next';
import { club } from '@/content/club';
import { projects } from '@/content/projects';
import { byDateDesc } from '@/lib/utils';
import { PageMasthead } from '@/components/PageMasthead';
import { ProjectBlock } from '@/components/ProjectBlock';

export const metadata: Metadata = {
  title: 'Projects',
  description: `Every campaign run by ${club.name}.`,
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  const entries = byDateDesc(projects);

  return (
    <>
      <PageMasthead
        kicker={`${entries.length} campaigns`}
        title="Everything we have run."
        standfirst="Newest first. Each one was scoped to finish inside a single school term."
      />

      <div className="wrap band flex flex-col gap-20">
        {entries.map((project, index) => (
          <ProjectBlock key={project.id} project={project} index={index} />
        ))}
      </div>
    </>
  );
}
