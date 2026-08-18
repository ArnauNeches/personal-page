import Button from '../components/Button'
import contact from '../data/contact'

function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-10 px-6 sm:flex-row sm:gap-12">
      <div className="aspect-square w-48 shrink-0 overflow-hidden rounded-sm border border-border sm:w-64">
        <img src="/images/profile.jpg" alt={contact.name} className="h-full w-full object-cover" />
      </div>
      <div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">{contact.name}</h1>
        <p className="mt-4 text-lg text-fg-muted sm:text-xl">
          Computer Science & Mathematics student.
        </p>
        <p className="mt-2 max-w-2xl text-fg-muted">
          Double degree at Universidad de Sevilla, with a year at the University of Sydney,
          researching machine learning and experienced in building production AI systems.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="#experience">View my work</Button>
          <Button href="#contact">Get in touch</Button>
          <Button href="/Arnau-Neches-CV.pdf" download>
            Download CV
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
