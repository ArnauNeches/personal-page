import { useId } from 'react'
import Tag from './Tag'
import useExpandable from '../hooks/useExpandable'

function Card({ title, meta, tags, image, imageAlt, href, children, details }) {
  const isExternal = href?.startsWith('http')
  const linkProps = href
    ? { href, ...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {}) }
    : {}
  const ImageTag = href ? 'a' : 'div'
  const TitleTag = href ? 'a' : 'span'
  const { isExpanded, toggle } = useExpandable()
  const detailsId = useId()

  return (
    <article className="flex flex-col gap-3 rounded-sm border border-border bg-bg-raised p-4">
      <div className="flex gap-3">
        {image && (
          <ImageTag
            {...linkProps}
            className="aspect-square w-28 shrink-0 self-start overflow-hidden rounded-sm border border-border hover:opacity-80"
          >
            <img src={image} alt={imageAlt ?? title} className="h-full w-full object-cover" />
          </ImageTag>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-lg font-medium">
              <TitleTag {...linkProps} className={href ? 'hover:underline' : undefined}>
                {title}
                {isExternal && (
                  <span className="ml-0.5 align-super text-[0.65em]" aria-hidden="true">
                    ↗
                  </span>
                )}
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
        </div>
      </div>
      {details && (
        <>
          <button
            type="button"
            onClick={toggle}
            aria-expanded={isExpanded}
            aria-controls={detailsId}
            className="self-start font-mono text-base text-fg-muted hover:text-fg"
          >
            {isExpanded ? '− less' : '+ more'}
          </button>
          {isExpanded && (
            <div id={detailsId} className="border-t border-border pt-3 text-sm text-fg-muted">
              {details}
            </div>
          )}
        </>
      )}
    </article>
  )
}

export default Card
