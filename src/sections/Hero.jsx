import Button from '../components/Button'
import contact from '../data/contact'

function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-10 px-6 sm:flex-row sm:gap-12">
      <div className="flex aspect-square w-48 shrink-0 items-center justify-center rounded-sm border border-dashed border-border font-mono text-xs text-fg-muted sm:w-64">
        Photo placeholder
      </div>
      <div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">{contact.name}</h1>
        <p className="mt-4 text-lg text-fg-muted sm:text-xl">
          Computer Science & Mathematics student and ML researcher.
        </p>
        <p className="mt-2 max-w-2xl text-fg-muted">
          Double degree at Universidad de Sevilla, with a year at the University of Sydney,
          researching ML and building AI products at Welyto.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="#experience">View my work</Button>
          <Button href="#contact">Get in touch</Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
