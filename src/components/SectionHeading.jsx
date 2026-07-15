function SectionHeading({ index, title }) {
  return (
    <div className="mb-8 flex items-baseline gap-4 border-b border-border pb-4">
      {index != null && (
        <span className="font-mono text-sm text-fg-muted">
          {String(index).padStart(2, '0')}
        </span>
      )}
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
    </div>
  )
}

export default SectionHeading
