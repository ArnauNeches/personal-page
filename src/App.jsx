import Nav from './components/Nav'
import SectionHeading from './components/SectionHeading'
import Card from './components/Card'
import Tag from './components/Tag'
import Button from './components/Button'
import education from './data/education'
import Hero from './sections/Hero'
import About from './sections/About'
import HighlightStrip from './sections/HighlightStrip'
import Education from './sections/Education'
import Research from './sections/Research'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Activities from './sections/Activities'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <Nav />

      <div className="flex flex-col gap-6 px-6 py-16">
        <SectionHeading index={1} title="Component preview" />
        {education.map((entry) => (
          <Card
            key={entry.id}
            title={entry.degree}
            meta={`${entry.startDate} – ${entry.endDate}`}
            image
            href={entry.url}
            details={
              <div className="flex flex-col gap-2">
                <p>{entry.details.description}</p>
                {entry.details.distinctions && <p>{entry.details.distinctions}</p>}
                {entry.details.coursework?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {entry.details.coursework.map((course) => (
                      <Tag key={course}>{course}</Tag>
                    ))}
                  </div>
                )}
              </div>
            }
          >
            <p>
              {entry.institution} · {entry.location}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Tag>{entry.grade}</Tag>
            </div>
          </Card>
        ))}
        <Button>Button preview</Button>
      </div>

      <Hero />
      <About />
      <HighlightStrip />
      <Education />
      <Research />
      <Experience />
      <Projects />
      <Activities />
      <Contact />
    </>
  )
}

export default App
