import { useId } from 'react'
import useExpandable from '../hooks/useExpandable'
import useScrollSpy from '../hooks/useScrollSpy'

const links = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'activities', label: 'Activities' },
  { id: 'contact', label: 'Contact' },
]

const ids = links.map((link) => link.id)

function Nav() {
  const activeId = useScrollSpy(ids)
  const { isExpanded, toggle } = useExpandable()
  const menuId = useId()

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur">
      <div className="flex items-center justify-between px-6 py-4">
        <ul className="hidden gap-6 sm:flex">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`font-mono text-sm transition-colors ${
                  activeId === id ? 'text-fg' : 'text-fg-muted hover:text-fg'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={toggle}
          aria-expanded={isExpanded}
          aria-controls={menuId}
          className="font-mono text-sm sm:hidden"
        >
          {isExpanded ? 'Close' : 'Menu'}
        </button>
      </div>
      {isExpanded && (
        <ul id={menuId} className="flex flex-col gap-4 border-t border-border px-6 py-4 sm:hidden">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={toggle}
                className={`font-mono text-sm ${activeId === id ? 'text-fg' : 'text-fg-muted'}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Nav
