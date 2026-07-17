import Button from './Button'
import Modal from './Modal'
import Card from './Card'
import useExpandable from '../hooks/useExpandable'
import { publications } from '../data/research'

function PublicationsModal({ label }) {
  const { isExpanded, toggle } = useExpandable()

  return (
    <>
      <Button type="button" onClick={toggle} className="mt-3">
        {label}
      </Button>
      <Modal isOpen={isExpanded} onClose={toggle} title="Publications">
        <div className="flex flex-col gap-4">
          {publications.map((pub) => (
            <Card
              key={pub.id}
              title={pub.title}
              meta={pub.venue}
              tags={[pub.authorRole, pub.status]}
              href={pub.link ?? undefined}
              details={<p>{pub.details.description}</p>}
            >
              {!pub.link && <p className="font-mono text-xs">Link not available yet</p>}
            </Card>
          ))}
        </div>
      </Modal>
    </>
  )
}

export default PublicationsModal
