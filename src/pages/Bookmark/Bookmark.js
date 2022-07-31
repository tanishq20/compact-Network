import { useEffect } from 'react'

export const Bookmark = () => {
  useEffect(() => {
    document.title = 'Bookmark | Compact Network'
  }, [])
  return (
    <>
      <div>Bookmark</div>
    </>
  )
}
