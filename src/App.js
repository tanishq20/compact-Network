import './App.css'
import { Router } from './router/Router'
import { Box, Grid } from '@mui/material'
import { ToastContainer } from 'react-toastify'
import { AsideLeftNav, AsideRightNav, Header } from './components'
import { useSelector } from 'react-redux'

function App() {
  const { isLoggedIn } = useSelector((store) => store.auth)

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
