import { useState } from 'react'
import { Stack, Box } from '@mui/material'
import { Login, Signup } from '../../components'
import authImg from '../../assets/auth.svg'

export const Landing = () => {
  const [signupForm, setSignupForm] = useState(false)

  return (
    <Stack
      direction='row'
      alignContent='center'
      alignItems='center'
      minHeight='100vh'
    >
      <Box
        component='img'
        src={authImg}
        alt='login-img'
        className='login-image'
        display={{ xs: 'none', sm: 'none', md: 'inherit' }}
      />
      {signupForm ? (
        <Signup setSignupForm={setSignupForm} />
      ) : (
        <Login setSignupForm={setSignupForm} />
      )}
    </Stack>
  )
}
