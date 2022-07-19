import { useEffect, useState } from 'react'
import './Auth.css'
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { guestLoginUser, loginUser } from '../../firebase/utils/auth'
import { userLogin, loading } from '../../redux/features'
import { checkInputs } from '../../authValidation/authValidation'

export const Login = ({ setSignupForm }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const { isAuthLoading } = useSelector((store) => store.auth)

  const [showPassword, setShowPassword] = useState(false)
  const [formValidation, setFormValidation] = useState(false)
  const [inputValidation, setInputValidation] = useState({
    email: { isValid: true, msg: '' },
    password: { isValid: true, msg: '' },
  })

  useEffect(() => {
    let flag = true
    Object.entries(inputValidation).forEach((item) => {
      if (!item[1].isValid) {
        flag = false
      }
    })
    setFormValidation(flag)
  }, [inputValidation])

  const toggleShowPassword = (e) => {
    e.preventDefault()
    setShowPassword((showPassword) => !showPassword)
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    if (value === '') {
      setInputValidation((prev) => ({
        ...prev,
        [name]: { isValid: true, msg: '' },
      }))
    } else {
      const validateValue = checkInputs(name, value)
      setInputValidation((prev) => ({ ...prev, [name]: { ...validateValue } }))
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const loginData = {
      email: data.get('email'),
      password: data.get('password'),
    }
    loginUser(loginData, dispatch, userLogin, loading, navigate, location)
  }
  return (
    <Container component='main' maxWidth='xs'>
      <Stack alignItems='center' mt={5}>
        <Typography
          component='h1'
          variant='h5'
          mt={1}
          gutterBottom
          style={{ color: 'var(--white)' }}
        >
          Login
        </Typography>
        <Box component='form' textAlign='center' onSubmit={submitHandler}>
          <TextField
            label='Email'
            name='email'
            id='email'
            autoComplete='email'
            onChange={(e) => handleChange(e)}
            type='email'
            margin='normal'
            fullWidth
            required
            autoFocus
            error={inputValidation.email.isValid ? false : true}
            helperText={
              !inputValidation.email.isValid && inputValidation.email.msg
            }
            focused
          />
          <Box position='relative'>
            <TextField
              label='Password'
              name='password'
              id='password'
              autoComplete='password'
              onChange={(e) => handleChange(e)}
              type={showPassword ? 'text' : 'password'}
              margin='normal'
              fullWidth
              required
              error={inputValidation.password.isValid ? false : true}
              helperText={
                !inputValidation.password.isValid &&
                inputValidation.password.msg
              }
              focused
            />
            {showPassword ? (
              <IconButton
                onClick={(e) => toggleShowPassword(e)}
                className='password-icon'
                sx={{ position: 'absolute' }}
              >
                <VisibilityIcon />
              </IconButton>
            ) : (
              <IconButton
                onClick={(e) => toggleShowPassword(e)}
                className='password-icon'
                sx={{ position: 'absolute' }}
              >
                <VisibilityOffIcon />
              </IconButton>
            )}
          </Box>
          <Button
            type='submit'
            variant='contained'
            fullWidth
            sx={{ mt: 3, mb: 1 }}
            disabled={formValidation ? false : true}
          >
            {isAuthLoading ? (
              <CircularProgress sx={{ color: 'var(--white)' }} />
            ) : (
              'Login'
            )}
          </Button>
          <Button
            onClick={() =>
              guestLoginUser(
                { email: 'guest@gmail.com', password: 'Guest@1234' },
                dispatch,
                userLogin,
                loading,
                navigate,
                location
              )
            }
            variant='outlined'
            fullWidth
            sx={{ mb: 2 }}
            disabled={formValidation ? false : true}
          >
            {isAuthLoading ? (
              <CircularProgress sx={{ color: 'var(--white)' }} />
            ) : (
              'Guest Login'
            )}
          </Button>
          <Button size='small' fullWidth onClick={() => setSignupForm(true)}>
            Don't have an account? Sign Up
          </Button>
        </Box>
      </Stack>
    </Container>
  )
}
