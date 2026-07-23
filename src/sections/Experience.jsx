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
    <section id="experience" className="px-6 py-14">
      <SectionHeading title="Experience" />
      <div className="flex flex-col gap-6">
        {experience.map((entry) => (
          <Card
            key={entry.id}
            title={`${entry.role}, ${entry.organization}`}
            meta={formatDateRange(entry.startDate, entry.endDate)}
            href={entry.url}
            details={
              <div className="flex flex-col gap-2">
                <p>{entry.details.description}</p>
                {entry.details.group && (
                  <p className="font-mono text-xs">{entry.details.group}</p>
                )}
              </div>
            }
          >
            <p>{entry.location}</p>
            <p className="mt-2">{entry.summary}</p>
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
