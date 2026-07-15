import { useEffect } from 'react'
import { createPortal } from 'react-dom'

function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 p-6 py-16"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="w-full max-w-2xl rounded-sm border border-border bg-bg-raised p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-6 flex items-center justify-between gap-4">
          {title && <h2 className="text-lg font-semibold">{title}</h2>}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="font-mono text-sm text-fg-muted hover:text-fg"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body,
  )
}

export default Modal
