import * as React from 'react'
import PropTypes from 'prop-types'
import { TopNavigationStyles } from './style'
import { useSession, signIn, signOut } from 'next-auth/react'
import { menuItems } from '../../constants/topNavigationLinks'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Fab,
  Fade,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  useScrollTrigger
} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import '@fontsource/audiowide'
import '@fontsource/oxygen'


function ScrollTop(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      })
    }
  }

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 30, right: 30, zIndex: 100 }}
      >
        {children}
      </Box>
    </Fade>
  )
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
}


function TopNavigation(props) {
  const { data: session } = useSession()
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <TopNavigationStyles>
      <AppBar elevation={0}  style={{ backgroundColor: 'var(--char5)' }} position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters id="back-to-top-anchor">
            <Link href="/">
              <Image src="/turn17-logo-main.png" alt="Turn 17 Media Logo" width={90} height={90} />
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              {menuItems.map((page, index) => (
                <Link
                  key={index}
                  href={page.path}
                  style={{ color: '#85D3E7', display: 'block', fontFamily: 'audiowide', fontSize: '1.3rem', fontWeight: 'lighter', letterSpacing: '.2rem', paddingLeft: '2%', paddingRight: '2%' }}
                >
                  {page.text}
                </Link>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                style={{ color: 'var(--mb1-3)' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {menuItems.map((page, index) => (
                  <MenuItem key={index}>
                    <Link href={page.path}>{page.text}</Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              {session && (
                <p style={{ color: 'var(--char0)', textAlign: 'center' }}>{session.user.name}</p>
                )
              }
                <IconButton onClick={handleOpenUserMenu} sx={{ width: '90px' }}>
                  {session? (
                    <Avatar alt={`${session?.user.name}`} style={{ backgroundColor: 'var(--mb1-3)' }} src={`${session?.user.image}`} />
                  ) : (
                    <Avatar style={{ backgroundColor: 'var(--mb1-3)' }} />
                  )}
                </IconButton>
              <Menu
                sx={{ mt: '60px' }}
                id="menu-appbar"
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
                {
                  session? (
                      <MenuItem sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Button sx={{ fontFamily: 'Oxygen', color: 'var(--char5)' }} href={'/dashboard/' + session?.user.name}>Dashboard</Button>
                        <Button sx={{ fontFamily: 'Oxygen', color: 'var(--char5)' }} onClick={() => signOut({ callbackUrl: '/' })}>Sign Out</Button>
                      </MenuItem>
                  ) : (
                      <MenuItem sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Button sx={{ fontFamily: 'Oxygen', color: 'var(--char5)' }} onClick={signIn}>Client Login</Button>
                        {/* <Button sx={{ fontFamily: 'Oxygen', color: 'var(--char5)' }} href='/signup'>Sign Up</Button> */}
                      </MenuItem>
                  )
                }
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <ScrollTop {...props}>
        <Fab size="large" aria-label="scroll back to top" className='scroll-top-fab'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </TopNavigationStyles>
  );
}
export default TopNavigation;