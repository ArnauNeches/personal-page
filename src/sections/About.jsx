import SectionHeading from '../components/SectionHeading'

function About() {
  return (
    <section id="about" className="px-6 py-24">
      <SectionHeading index={1} title="About" />
      <div className="flex max-w-2xl flex-col gap-4 text-fg-muted">
        <p>
          I'm a Computer Science and Mathematics student at Universidad de Sevilla, currently
          completing a five-year double degree that included a year abroad at the University of
          Sydney. My focus sits at the intersection of applied machine learning and research,
          particularly feature selection, paired with hands-on experience turning research into
          working products.
        </p>
        <p>
          Alongside my studies, I work as a research assistant at MINERVA and as an engineer at
          Welyto, an early-stage startup building AI products for elderly care. I'm also active in
          competitive programming and Sevilla's Sputnik entrepreneurship community.
        </p>
      </div>
    </section>
  )
}

export default About
