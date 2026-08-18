import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import activities from '../data/activities'

function Activities() {
  return (
    <section id="activities" className="px-6 py-14">
      <SectionHeading title="Activities" />
      <div className="flex flex-col gap-6">
        {activities.map((activity) => (
          <Card
            key={activity.id}
            title={activity.organization}
            meta={`${activity.role} · ${activity.period}`}
            href={activity.url}
            details={<p>{activity.details.description}</p>}
          >
            <p>{activity.summary}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Activities
