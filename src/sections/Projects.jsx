import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import projects from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <SectionHeading index={4} title="Projects" />
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            meta={project.context}
            details={<p>{project.details.description}</p>}
          >
            <p>{project.summary}</p>
            <p className="mt-2 font-mono text-xs">Partner: {project.partner}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Projects
