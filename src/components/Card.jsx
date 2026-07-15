import { useId } from 'react'
import Tag from './Tag'
import useExpandable from '../hooks/useExpandable'

function Card({ title, meta, tags, image, href, children, details }) {
  const isExternal = href?.startsWith('http')
  const linkProps = href
    ? { href, ...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {}) }
    : {}
  const ImageTag = href ? 'a' : 'div'
  const TitleTag = href ? 'a' : 'span'
  const { isExpanded, toggle } = useExpandable()
  const detailsId = useId()

  return (
    <article className="flex gap-3 rounded-sm border border-border bg-bg-raised p-4">
      {image && (
        <ImageTag
          {...linkProps}
          className="flex aspect-square w-28 shrink-0 items-center justify-center self-start rounded-sm border border-dashed border-border font-mono text-xs text-fg-muted hover:opacity-80"
        >
          IMG
        </ImageTag>
      )}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-lg font-medium">
            <TitleTag {...linkProps} className={href ? 'hover:underline' : undefined}>
              {title}
            </TitleTag>
          </h3>
          {meta && <span className="font-mono text-xs text-fg-muted">{meta}</span>}
        </div>
        {tags?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}
        {children && <div className="mt-4 text-md text-fg-muted">{children}</div>}
        {details && (
          <>
            <button
              type="button"
              onClick={toggle}
              aria-expanded={isExpanded}
              aria-controls={detailsId}
              className="mt-3 font-mono text-sm text-fg-muted hover:text-fg"
            >
              {isExpanded ? '− less' : '+ more'}
            </button>
            {isExpanded && (
              <div id={detailsId} className="mt-3 border-t border-border pt-3 text-sm text-fg-muted">
                {details}
              </div>
            )}
          </>
        )}
      </div>
    </article>
  )
}

export default Card
