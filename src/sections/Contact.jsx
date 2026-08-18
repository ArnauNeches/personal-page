import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import contact from '../data/contact'

function Contact() {
  return (
    <section id="contact" className="px-6 py-14">
      <SectionHeading title="Contact" />
      <p className="mb-6 text-fg-muted">{contact.name}</p>
      <div className="flex flex-wrap gap-3">
        {contact.links.map((link) => (
          <Button key={link.label} href={link.href} download={link.download}>
            {link.label}
          </Button>
        ))}
      </div>
    </section>
  )
}

export default Contact
