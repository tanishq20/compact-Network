import { Avatar, Button, Grid, Stack, Typography } from '@mui/material'

export const AsideRightNav = () => {
  return (
    <Grid
      component='aside'
      item
      sx={{
        backgroundColor: 'var(--secondary-dark)',
        display: { xs: 'none', sm: 'none', md: 'none', lg: 'grid' },
        width: '20rem',
        height: 'fit-content',
        flexDirection: 'column',
        gap: '1rem',
        margin: '2rem 0px 0px',
        padding: '1rem 0.8rem',
        borderRadius: '10px',
        position: 'fixed',
        right: '3rem',
      }}
    >
      <input
        type='search'
        placeholder='Search'
        className='search'
        style={{
          width: '100%',
          padding: '8px',
          borderRadius: '8px',
          outline: '2px solid var(--primary-dark)',
          outlineOffset: '2px',
          border: 'none',
          fontSize: '1rem',
          backgroundColor: 'inherit',
          color: 'var(--primary-dark)',
          '&:focus': {
            outline: '2px solid var(--white)',
          },
        }}
      />
      <Stack
        component={'div'}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant='h6'
          sx={{ color: 'var(--white)', backgroundColor: 'transparent' }}
        >
          Suggestion:
        </Typography>
        <Button sx={{ color: 'var(--primary-light)' }}>Show More</Button>
      </Stack>
      <Stack
        component={'div'}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: '1px solid var(--white)',
          borderRadius: '5px',
          padding: '8px',
        }}
      >
        <Stack
          component={'div'}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Avatar
            alt='Tanishq Kumar'
            src='https://ik.imagekit.io/tanishq20/assets/avatar/man-avatar_Obbxg0x37Gd5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645964006431'
            style={{ marginRight: '8px' }}
          />
          <Stack>
            <Typography variant='body1' sx={{ color: 'var(--text-primary)' }}>
              Tanishq Kumar
            </Typography>
            <Typography variant='body2' sx={{ color: 'var(--text-secondary)' }}>
              @tanishq20
            </Typography>
          </Stack>
        </Stack>
        <Button sx={{ color: 'var(--primary-dark)' }}>Follow</Button>
      </Stack>
      <Stack
        component={'div'}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: '1px solid var(--white)',
          borderRadius: '5px',
          padding: '8px',
        }}
      >
        <Stack
          component={'div'}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Avatar
            alt='Tanishq Kumar'
            src='/static/images/avatar/2.jpg'
            style={{ marginRight: '8px' }}
          />
          <Stack>
            <Typography variant='body1' sx={{ color: 'var(--text-primary)' }}>
              Tanishq Kumar
            </Typography>
            <Typography variant='body2' sx={{ color: 'var(--text-secondary)' }}>
              @tanishq20
            </Typography>
          </Stack>
        </Stack>
        <Button sx={{ color: 'var(--primary-dark)' }}>Follow</Button>
      </Stack>
      <Stack
        component={'div'}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: '1px solid var(--white)',
          borderRadius: '5px',
          padding: '8px',
        }}
      >
        <Stack
          component={'div'}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Avatar
            alt='Tanishq Kumar'
            src='/static/images/avatar/2.jpg'
            style={{ marginRight: '8px' }}
          />
          <Stack>
            <Typography variant='body1' sx={{ color: 'var(--text-primary)' }}>
              Tanishq Kumar
            </Typography>
            <Typography variant='body2' sx={{ color: 'var(--text-secondary)' }}>
              @tanishq20
            </Typography>
          </Stack>
        </Stack>
        <Button sx={{ color: 'var(--primary-dark)' }}>Follow</Button>
      </Stack>
      <Stack
        component={'div'}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: '1px solid var(--white)',
          borderRadius: '5px',
          padding: '8px',
        }}
      >
        <Stack
          component={'div'}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Avatar
            alt='Tanishq Kumar'
            src='/static/images/avatar/2.jpg'
            style={{ marginRight: '8px' }}
          />
          <Stack>
            <Typography variant='body1' sx={{ color: 'var(--text-primary)' }}>
              Tanishq Kumar
            </Typography>
            <Typography variant='body2' sx={{ color: 'var(--text-secondary)' }}>
              @tanishq20
            </Typography>
          </Stack>
        </Stack>
        <Button sx={{ color: 'var(--primary-dark)' }}>Follow</Button>
      </Stack>
      <Stack
        component={'div'}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: '1px solid var(--white)',
          borderRadius: '5px',
          padding: '8px',
        }}
      >
        <Stack
          component={'div'}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Avatar
            alt='Tanishq Kumar'
            src='/static/images/avatar/2.jpg'
            style={{ marginRight: '8px' }}
          />
          <Stack>
            <Typography variant='body1' sx={{ color: 'var(--text-primary)' }}>
              Tanishq Kumar
            </Typography>
            <Typography variant='body2' sx={{ color: 'var(--text-secondary)' }}>
              @tanishq20
            </Typography>
          </Stack>
        </Stack>
        <Button sx={{ color: 'var(--primary-dark)' }}>Follow</Button>
      </Stack>
    </Grid>
  )
}
