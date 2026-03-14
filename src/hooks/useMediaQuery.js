import { useEffect, useState } from 'react'

export const useMediaQuery = (width) => {
  const [matches, setMatches] = useState(() => window.innerWidth <= width)

  useEffect(() => {
    const handleResize = () => {
      setMatches(window.innerWidth <= width)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [width])

  return matches
}
