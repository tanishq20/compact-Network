import './App.css'
import { Router } from './router/Router'
import { Box } from '@mui/material'
import { ToastContainer } from 'react-toastify'
import { Header } from './components'

function App() {
  return (
    <Box component='main' sx={{ backgroundColor: 'var(--bg-dark)' }}>
      <Header />
      <Router />
      <ToastContainer />
    </Box>
  )
}

export default App
