import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './UserProfile.css'
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Link,
  Modal,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined'
import { checkInputs } from '../../authValidation/authValidation'
import { updateUserData } from '../../firebase/utils/auth'
import { loadingUser } from '../../redux/features/auth/authSlice'

export const UserProfile = () => {
  const { user, isUserLoading } = useSelector((store) => store.auth)
  const dispatch = useDispatch()

  const defaultProfileData = {
    firstname: user?.firstname,
    lastname: user?.lastname,
    username: user?.username,
    bio: user?.bio,
    website: user?.website,
  }

  const [profileData, setProfileData] = useState(defaultProfileData)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formValidation, setFormValidation] = useState(false)
  const [inputValidation, setInputValidation] = useState({
    firstname: { isValid: true, msg: '' },
    lastname: { isValid: true, msg: '' },
  })

  let userId = localStorage.getItem('userId')

  useEffect(() => {
    let flag = true
    Object.entries(inputValidation).forEach((item) => {
      if (!item[1].isValid) {
        flag = false
      }
    })
    setFormValidation(flag)
  }, [inputValidation])

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfileData((prev) => ({ ...prev, [name]: value }))
    if (name === '') {
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
      ...user,
      firstname: data.get('firstname'),
      lastname: data.get('lastname'),
      username: data.get('username'),
      bio: data.get('bio'),
      website: data.get('website'),
    }
    updateUserData(userData, userId, dispatch, loadingUser)
    setProfileData(defaultProfileData)
    setIsModalOpen(false)
  }

  return (
    <>
      {isUserLoading ? (
        <Stack
          spacing={1}
          sx={{
            backgroundColor: 'var(--secondary-dark)',
            borderRadius: '10px',
            padding: '1rem',
          }}
        >
          <Skeleton animation='wave' variant='text' />
          <Skeleton
            animation='wave'
            variant='circular'
            width={80}
            height={80}
            sx={{ backgroundColor: 'grey' }}
          />
          <Skeleton
            animation='wave'
            variant='rectangular'
            width='100%'
            height={118}
          />
        </Stack>
      ) : (
        <Stack
          direction='column'
          alignItems='center'
          sx={{
            backgroundColor: 'var(--secondary-dark)',
            borderRadius: '10px',
          }}
        >
          <Box sx={{ padding: '1rem', borderRadius: '1rem' }}>
            <img
              src='https://ik.imagekit.io/tanishq20/Compact_Network/banner/profile_banner_b72l4_8qB.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658333938715'
              alt='img'
              style={{ borderRadius: '10px' }}
            />
          </Box>
          <Stack
            direction='column'
            sx={{
              padding: '1rem',
              color: 'white',
              width: '95%',
              position: 'relative',
              bottom: '7rem',
            }}
          >
            <Stack
              direction='row'
              alignItems='flex-end'
              justifyContent='space-between'
              flexWrap='wrap'
            >
              <Box
                component='span'
                sx={{
                  width: '8rem',
                  minHeight: '8rem',
                  backgroundColor: 'var(--secondary-dark)',
                  border: '5px solid var(--secondary-dark)',
                  borderRadius: '100%',
                }}
              >
                <Avatar
                  src={user?.avatar}
                  alt={user?.firstname}
                  aria-label={user?.firstname}
                  className='profile-avatar'
                />
              </Box>
              <Button variant='outlined' onClick={() => setIsModalOpen(true)}>
                Edit Profile
              </Button>
              <Modal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                aria-labelledby='edit-profile-modal-title'
                aria-describedby='edit-profile-modal-description'
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 'fit-content',
                    bgcolor: 'var(--bg-dark)',
                    border: '2px solid var(--white)',
                    borderRadius: '10px',
                    boxShadow: 24,
                    p: 2,
                  }}
                >
                  <Stack
                    direction='row'
                    alignItems='center'
                    justifyContent='space-between'
                    sx={{
                      color: 'var(--white)',
                      borderBottom: '2px solid var(--white)',
                    }}
                    mb={1}
                  >
                    <Typography
                      id='edit-profile-modal-title'
                      variant='h6'
                      component='h2'
                    >
                      Edit Profile
                    </Typography>
                    <HighlightOffOutlinedIcon
                      sx={{ cursor: 'pointer' }}
                      onClick={() => setIsModalOpen(false)}
                    />
                  </Stack>
                  <Box
                    id='edit-profile-modal-description'
                    component='form'
                    textAlign='center'
                    onSubmit={handleSubmit}
                  >
                    <TextField
                      label='First Name'
                      name='firstname'
                      id='firstname'
                      value={profileData.firstname}
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
                      value={profileData.lastname}
                      autoComplete='lastname'
                      onChange={(e) => handleChange(e)}
                      type='text'
                      margin='normal'
                      fullWidth
                      required
                      error={inputValidation.lastname.isValid ? false : true}
                      helperText={
                        !inputValidation.lastname.isValid &&
                        inputValidation.lastname.msg
                      }
                      focused
                    />
                    <TextField
                      label='Username'
                      name='username'
                      id='username'
                      value={profileData.username}
                      autoComplete='off'
                      type='text'
                      margin='normal'
                      fullWidth
                      required
                      focused
                    />
                    <TextField
                      label='Bio'
                      name='bio'
                      id='bio'
                      value={profileData.bio}
                      autoComplete='bio'
                      type='text'
                      margin='normal'
                      fullWidth
                      required
                      focused
                    />
                    <Box position='relative'>
                      <TextField
                        label='Website'
                        name='website'
                        id='website'
                        value={profileData.website}
                        autoComplete='website'
                        type='text'
                        margin='normal'
                        fullWidth
                        required
                        focused
                      />
                    </Box>
                    <Button
                      type='submit'
                      variant='contained'
                      fullWidth
                      sx={{ mt: 3, mb: 2 }}
                      disabled={formValidation ? false : true}
                    >
                      {isUserLoading ? (
                        <CircularProgress sx={{ color: 'var(--white)' }} />
                      ) : (
                        'Update'
                      )}
                    </Button>
                  </Box>
                </Box>
              </Modal>
            </Stack>
            <Stack direction='column' alignItems='flex-start' gap={0.5} mt={2}>
              <Stack direction='row' alignItems='center' gap={1}>
                <Typography
                  variant='h5'
                  sx={{
                    color: 'var(--white)',
                    fontWeight: '700',
                    lineHeight: '1.2',
                  }}
                >
                  {user?.firstname + ' ' + user?.lastname}
                </Typography>
                <Box
                  component='img'
                  src='https://ik.imagekit.io/tanishq20/Compact_Network/icons/verified-icon_11TkrkPch.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1658817998853'
                  alt='verified_icon'
                  height='25px'
                  width='25px'
                ></Box>
              </Stack>
              <Typography
                variant='body2'
                sx={{ color: 'var(--text-secondary)' }}
              >
                @{user?.username}
              </Typography>
            </Stack>
            <Box component={'p'} mt={2} sx={{ color: 'var(--text-primary)' }}>
              {user?.bio}
            </Box>
            <Stack direction='row' alignItems='center' gap={1} mt={2}>
              <Typography variant='body1' sx={{ color: 'var(--text-primary)' }}>
                Website:
              </Typography>
              <Link
                href={user?.website}
                target='_blank'
                rel='noopener'
                sx={{ color: 'var(--primary-dark)' }}
              >
                {user?.website}
              </Link>
            </Stack>
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='space-between'
              flexWrap='wrap'
              sx={{
                width: '100%',
                backgroundColor: 'var(--bg-dark)',
                padding: '10px 15px',
                borderRadius: '10px',
              }}
              mt={2}
            >
              <Stack alignItems='center' justifyContent='center'>
                <Typography variant='h6' sx={{ color: 'var(--white)' }}>
                  Posts
                </Typography>
                <Typography
                  variant='body1'
                  sx={{ color: 'var(--white)', fontWeight: '700' }}
                >
                  100
                </Typography>
              </Stack>
              <Stack alignItems='center' justifyContent='center'>
                <Typography variant='h6' sx={{ color: 'var(--white)' }}>
                  Follower
                </Typography>
                <Typography
                  variant='body1'
                  sx={{ color: 'var(--white)', fontWeight: '700' }}
                >
                  {user?.follower ? user?.follower.length : 0}
                </Typography>
              </Stack>
              <Stack alignItems='center' justifyContent='center'>
                <Typography variant='h6' sx={{ color: 'var(--white)' }}>
                  Following
                </Typography>
                <Typography
                  variant='body1'
                  sx={{ color: 'var(--white)', fontWeight: '700' }}
                >
                  {user?.following ? user?.following.length : 0}
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction='row'
              mt={2}
              sx={{
                borderBottomWidth: '1px',
                borderBottomStyle: 'solid',
                borderColor: 'var(--white)',
              }}
            >
              <Box
                component='a'
                href='https://www.google.com/'
                target='_blank'
                style={{
                  backgroundColor: 'var(--primary-light-hover)',
                  fontWeight: '500',
                  color: 'var(--white)',
                  padding: '1rem',
                  flexGrow: '1',
                  textAlign: 'center',
                  borderTopLeftRadius: '10px',
                  borderTopRightRadius: '10px',
                  marginBottom: '-1px',
                }}
              >
                Posts
              </Box>
              <Box
                component='a'
                href='https://www.google.com/'
                target='_blank'
                style={{
                  // backgroundColor: 'var(--primary-dark)',
                  color: 'var(--white)',
                  padding: '1rem',
                  flexGrow: '1',
                  textAlign: 'center',
                  borderTopLeftRadius: '10px',
                  borderTopRightRadius: '10px',
                  marginBottom: '-1px',
                }}
              >
                Bookmarks
              </Box>
              <Box
                component='a'
                href='https://www.google.com/'
                target='_blank'
                style={{
                  // backgroundColor: 'var(--primary-dark)',
                  color: 'var(--white)',
                  padding: '1rem',
                  flexGrow: '1',
                  textAlign: 'center',
                  borderTopLeftRadius: '10px',
                  borderTopRightRadius: '10px',
                  marginBottom: '-1px',
                }}
              >
                Likes
              </Box>
            </Stack>
          </Stack>
        </Stack>
      )}
    </>
  )
}
