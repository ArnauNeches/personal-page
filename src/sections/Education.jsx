import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import Tag from '../components/Tag'
import education from '../data/education'

function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <SectionHeading index={2} title="Education" />
      <div className="flex flex-col gap-6">
        {education.map((entry) => (
          <Card
            key={entry.id}
            title={entry.degree}
            meta={`${entry.startDate} – ${entry.endDate}`}
            image={entry.image}
            imageAlt={`${entry.institution} logo`}
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
      </div>
    </section>
  )
}

export default Education
