import { useEffect } from 'react'

export const Home = () => {
  useEffect(() => {
    document.title = 'Home | Compact Network'
  }, [])
  return (
    <>
      <div>Home</div>
    </>
  )
}
