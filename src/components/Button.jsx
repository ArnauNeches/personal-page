function Button({ href, children, className = '', ...props }) {
  const Component = href ? 'a' : 'button'
  const externalProps = href?.startsWith('http')
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Component
      href={href}
      className={`inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 font-mono text-sm text-fg transition-colors hover:border-fg ${className}`}
      {...externalProps}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Button
