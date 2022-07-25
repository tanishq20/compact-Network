import { Box, Button, Link, Stack, Typography } from '@mui/material'

export const UserProfile = () => {
  return (
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
            <img
              src='https://ik.imagekit.io/tanishq20/Compact_Network/avatar/man_one_8l6ilg0i0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658149008851'
              alt='avatar'
              style={{
                borderRadius: '100%',
                width: '100%',
                heigth: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
          <Button variant='outlined'>Edit Profile</Button>
        </Stack>
        <Stack direction='column' alignItems='flex-start' gap={0.5} mt={2}>
          <Typography
            variant='h5'
            sx={{ color: 'var(--white)', fontWeight: '700', lineHeight: '1.2' }}
          >
            Tanishq Kumar
          </Typography>
          <Typography variant='body2' sx={{ color: 'var(--text-secondary)' }}>
            @tanishq20
          </Typography>
        </Stack>
        <Box component={'p'} mt={2} sx={{ color: 'var(--text-primary)' }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
          similique atque. Sint, delectus? Repellendus, qui officiis enim minima
          placeat ratione accusamus consectetur nisi recusandae provident? Sint
          fuga atque modi odio!
        </Box>
        <Stack direction='row' alignItems='center' gap={1} mt={2}>
          <Typography variant='body1' sx={{ color: 'var(--text-primary)' }}>
            Website:
          </Typography>
          <Link
            href='https://www.google.com/'
            target='_blank'
            rel='noopener'
            sx={{ color: 'var(--primary-dark)' }}
          >
            www.google.com
          </Link>
        </Stack>
        <Stack></Stack>
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
              100
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
              100
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
  )
}
