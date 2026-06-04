import SectionWrapper from "../components/SectionWrapper";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/siteData";

export default function Projects() {
  const [featuredProject, ...secondaryProjects] = projects;

  return (
    <SectionWrapper
      eyebrow="Projects"
      title="Selected works with measurable intent."
      description="Residential, commercial, hospitality, and interior case studies designed as immersive stories with performance, material, and execution intelligence."
    >
      <div className="grid gap-6">
        <ProjectCard project={featuredProject} featured />
        <div className="grid gap-6 md:grid-cols-3">
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
