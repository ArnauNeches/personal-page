function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-border px-2 py-0.5 font-mono text-xs text-fg-muted">
      {children}
    </span>
  )
}

export default Tag
