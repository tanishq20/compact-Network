import { Routes, Route } from 'react-router-dom'
import { Bookmark, Error, Explore, Home, Landing, Profile } from '../pages'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />}></Route>
      <Route path='/bookmark' element={<Bookmark />}></Route>
      <Route path='/error' element={<Error />}></Route>
      <Route path='/explore' element={<Explore />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
    </Routes>
  )
}
