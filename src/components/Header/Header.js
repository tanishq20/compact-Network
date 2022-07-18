import { useState } from 'react'
import '../../App.css'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Icon from '../../assets/logo/logo.png'
import { logoutUser } from '../../firebase/utils/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../redux/features'

export const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector((state) => state.auth)

  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const logoutHandle = () => {
    logoutUser(dispatch, userLogout, navigate)
    setAnchorElUser(null)
  }
  return (
    <AppBar
      component={'nav'}
      position='fixed'
      sx={{ backgroundColor: 'var(--black)', color: 'var(--primary-dark)' }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Box component='div' sx={{ mr: 1 }}>
              <img src={Icon} alt='logo' />
            </Box>
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/'
              sx={{
                fontSize: '1.5rem',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              NETWORK
            </Typography>
          </Box>
          {isLoggedIn && (
            <Stack
              sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}
              direction={'row'}
              spacing={1}
            >
              <Tooltip title='User' sx={{ mr: 2 }}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='John Deo' src='/static/images/avatar/2.jpg' />
                </IconButton>
              </Tooltip>
              <Box sx={{ backgroundColor: 'var(--secondary-dark-hover)' }}>
                <Menu
                  sx={{ mt: '45px' }}
                  id='menu-appbar'
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem
                    sx={{
                      backgroundColor: 'var(--secondary-dark-hover)',
                      '&:hover': {
                        backgroundColor: 'var(--secondary-dark)',
                      },
                    }}
                  >
                    <Typography
                      textAlign='center'
                      sx={{ color: 'var(--white)', cursor: 'pointer' }}
                    >
                      Profile
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    sx={{
                      backgroundColor: 'var(--secondary-dark-hover)',
                      '&:hover': {
                        backgroundColor: 'var(--secondary-dark)',
                      },
                    }}
                    onClick={logoutHandle}
                  >
                    <Typography
                      textAlign='center'
                      sx={{ color: 'var(--white)', cursor: 'pointer' }}
                    >
                      Logout
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Stack>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
