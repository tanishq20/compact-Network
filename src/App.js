import './App.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { Box, Grid } from '@mui/material'
import { Router } from './router/Router'
import { AsideLeftNav, AsideRightNav, Header } from './components'
import { getUserData } from './firebase/utils/auth'

function App() {
  const { isLoggedIn } = useSelector((store) => store.auth)
  const dispatch = useDispatch()

  let userId = localStorage.getItem('userId')

  useEffect(() => {
    dispatch(getUserData(userId))
  }, [dispatch, userId])

  return (
    <Box component='main' sx={{ backgroundColor: 'var(--bg-dark)' }}>
      <Header />
      <Box className={isLoggedIn ? 'main-container' : ''}>
        <Grid container justifyContent='center'>
          {isLoggedIn && <AsideLeftNav />}
          <Grid item className={isLoggedIn ? 'main-body' : ''}>
            <Router />
          </Grid>
          {isLoggedIn && <AsideRightNav />}
        </Grid>
      </Box>
      <ToastContainer />
    </Box>
  )
}

export default App
