import { useEffect, useState } from 'react'
import './Auth.css'
import {
  Avatar,
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
import { createUser } from '../../firebase/utils/auth'
import { userLogin, loading } from '../../redux/features'
import { checkInputs } from '../../authValidation/authValidation'
import { userAvatars } from '../../utilities'

export const Signup = ({ setSignupForm }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const { isAuthLoading } = useSelector((store) => store.auth)

  const [userProfileAvatar, setUserProfileAvatar] = useState(
    'https://ik.imagekit.io/tanishq20/Compact_Network/avatar/man_one_8l6ilg0i0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658149008851'
  )
  const [showPassword, setShowPassword] = useState(false)
  const [formValidation, setFormValidation] = useState(false)
  const [inputValidation, setInputValidation] = useState({
    firstname: { isValid: true, msg: '' },
    lastname: { isValid: true, msg: '' },
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

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const userData = {
      firstname: data.get('firstname'),
      lastname: data.get('lastname'),
      username: data.get('username'),
      email: data.get('email'),
      password: data.get('password'),
      avatar: userProfileAvatar,
    }
    createUser(userData, dispatch, userLogin, loading, navigate, location)
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Stack alignItems='center' mt={6}>
        <Typography
          component='h1'
          variant='h5'
          mt={3}
          style={{ color: 'var(--white)' }}
        >
          Sign Up
        </Typography>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='center'
          flexWrap='wrap'
          gap={1}
          padding={1}
        >
          {userAvatars.map(({ id, userAvatar }) => {
            return (
              <Box
                key={id}
                component='span'
                className={
                  userProfileAvatar === userAvatar
                    ? 'user-avatar-focus'
                    : 'user-avatar'
                }
              >
                <Avatar
                  alt='user avatar'
                  src={userAvatar}
                  onClick={() => setUserProfileAvatar(userAvatar)}
                  style={{
                    height: '4rem',
                    width: '4rem',
                    padding: '0.1rem',
                    borderRadius: '50%',
                  }}
                />
              </Box>
            )
          })}
        </Stack>
        <Box component='form' textAlign='center' onSubmit={handleSubmit}>
          <TextField
            label='First Name'
            name='firstname'
            id='firstname'
            autoComplete='firstname'
            onChange={(e) => handleChange(e)}
            type='text'
            margin='normal'
            fullWidth
            required
            autoFocus
            error={inputValidation.firstname.isValid ? false : true}
            helperText={
              !inputValidation.firstname.isValid &&
              inputValidation.firstname.msg
            }
            focused
          />
          <TextField
            label='Last Name'
            name='lastname'
            id='lastname'
            autoComplete='lastname'
            onChange={(e) => handleChange(e)}
            type='text'
            margin='normal'
            fullWidth
            required
            error={inputValidation.lastname.isValid ? false : true}
            helperText={
              !inputValidation.lastname.isValid && inputValidation.lastname.msg
            }
            focused
          />
          <TextField
            label='Username'
            name='username'
            id='username'
            autoComplete='off'
            type='text'
            margin='normal'
            fullWidth
            required
            focused
          />
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
            sx={{ mt: 3, mb: 2 }}
            disabled={formValidation ? false : true}
          >
            {isAuthLoading ? (
              <CircularProgress sx={{ color: 'var(--white)' }} />
            ) : (
              'Sign Up'
            )}
          </Button>
          <Button size='small' fullWidth onClick={() => setSignupForm(false)}>
            Already have an account? Login
          </Button>
        </Box>
      </Stack>
    </Container>
  )
}
