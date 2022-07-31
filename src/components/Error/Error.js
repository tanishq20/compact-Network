import { Stack, Box, Typography } from '@mui/material'
import { useEffect } from 'react'
import error from '../../assets/error.svg'
import './Error.css'

export const Error = () => {
  useEffect(() => {
    document.title = '404 | Compact Network'
  }, [])
  return (
    <Stack
      height='100vh'
      direction='column'
      alignItems='center'
      justifyContent='center'
      flexWrap='wrap'
      gap={2}
    >
      <Box
        component='img'
        src={error}
        alt='404 Error'
        className='error-image'
      />
      <Typography variant='h3' sx={{ color: 'var(--text-primary)' }}>
        Page Not Found
      </Typography>
    </Stack>
  )
}
