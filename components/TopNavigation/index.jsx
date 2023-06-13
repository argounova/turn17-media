import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import '@fontsource/audiowide'
import '@fontsource/oxygen'
import { menuItems } from '../../constants/topNavigationLinks';
import { useSession, signIn, signOut } from 'next-auth/react'
import { TopNavigationStyles } from './style';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function TopNavigation() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { data: session } = useSession()

  return (
    <TopNavigationStyles>
    <AppBar color="" elevation={0}  style={{ backgroundColor: 'var(--char5)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            href="/"
          >
            <img src="/turn17-logo-main.png" alt="Turn 17 Media Logo" style={{ width: '90px' }} />
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', ml: '45px' }}>
            {menuItems.map((page, index) => (
              <Button
                key={index}
                href={page.path}
                sx={{ my: 2, color: '#85D3E7', display: 'block', fontFamily: 'audiowide', fontSize: '1.15rem', letterSpacing: '.1rem', paddingLeft: '2%', paddingRight: '2%' }}
              >
                {page.text}
              </Button>
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
                  <Button sx={{ fontFamily: 'Oxygen' }} href={page.path}>{page.text}</Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {session && (
              <p style={{ color: 'var(--char0)', textAlign: 'center' }}>{session.user.name}</p>
              )
            }
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 1, width: '125px' }}>
                <Avatar alt="Turn 17 User" style={{ backgroundColor: 'var(--mb1-3)' }}/>
              </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {
                session && (
                    <MenuItem>
                      <Button sx={{ fontFamily: 'Oxygen' }} href='/my-profile'>My Profile</Button>
                      <Button sx={{ fontFamily: 'Oxygen' }} onClick={signOut}>Sign Out</Button>
                    </MenuItem>
                )
              }
              <MenuItem>
                <Button sx={{ fontFamily: 'Oxygen' }} onClick={signIn}>Login</Button>
              </MenuItem>
              <MenuItem>
                <Button sx={{ fontFamily: 'Oxygen' }} href='/signup'>Sign Up</Button>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </TopNavigationStyles>
  );
}
export default TopNavigation;