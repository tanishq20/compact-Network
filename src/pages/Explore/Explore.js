import { useEffect } from 'react'

export const Explore = () => {
  useEffect(() => {
    document.title = 'Explore | Compact Network'
  }, [])
  return (
    <>
      <div>Explore</div>
    </>
  )
}
