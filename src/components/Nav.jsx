const links = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'research', label: 'Research' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'activities', label: 'Activities' },
  { id: 'contact', label: 'Contact' },
]

function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <ul className="flex gap-6">
        {links.map(({ id, label }) => (
          <li key={id}>
            <a href={`#${id}`}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav