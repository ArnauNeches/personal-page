import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import Button from '../components/Button'
import PublicationsModal from '../components/PublicationsModal'
import experience from '../data/experience'

function formatDateRange(startDate, endDate) {
  return `${startDate} – ${endDate ?? 'Present'}`
}

function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <SectionHeading index={3} title="Experience" />
      <div className="flex flex-col gap-6">
        {experience.map((entry) => (
          <Card
            key={entry.id}
            title={`${entry.role}, ${entry.organization}`}
            meta={formatDateRange(entry.startDate, entry.endDate)}
            href={entry.url}
            image
          >
            <p>{entry.location}</p>
            <p className="mt-2">{entry.details.description}</p>
            {entry.details.group && (
              <p className="mt-2 font-mono text-xs">{entry.details.group}</p>
            )}
            {entry.relatedLink &&
              (entry.id === 'research-assistant' ? (
                <PublicationsModal label={entry.relatedLink.label} />
              ) : (
                <Button href={entry.relatedLink.href} className="mt-3">
                  {entry.relatedLink.label}
                </Button>
              ))}
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Experience
