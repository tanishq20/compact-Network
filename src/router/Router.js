import { Routes, Route } from 'react-router-dom'
import { NonRequiredAuth, RequiredAuth, Error } from '../components'
import { Bookmark, Explore, Home, Landing, Profile } from '../pages'

export const Router = () => {
  return (
    <Routes>
      <Route element={<NonRequiredAuth />}>
        <Route path='/' element={<Landing />} />
      </Route>
      <Route element={<RequiredAuth />}>
        <Route path='/bookmark' element={<Bookmark />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Route>
      <Route path='*' element={<Error />} />
    </Routes>
  )
}
