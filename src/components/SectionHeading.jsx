function SectionHeading({ title }) {
  return (
    <div className="mb-8 flex items-baseline gap-4 border-b border-border pb-4">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
    </div>
  )
}

export default SectionHeading
