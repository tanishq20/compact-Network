import { useEffect } from 'react'
import { UserProfile } from '../../components'

export const Profile = () => {
  useEffect(() => {
    document.title = 'Profile | Compact Network'
  }, [])
  return (
    <>
      <UserProfile />
    </>
  )
}
