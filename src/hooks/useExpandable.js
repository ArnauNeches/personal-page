import { useState } from 'react'

function useExpandable(initial = false) {
  const [isExpanded, setIsExpanded] = useState(initial)
  const toggle = () => setIsExpanded((prev) => !prev)

  return { isExpanded, toggle }
}

export default useExpandable
