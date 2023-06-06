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
import BannerHeader from './BannerHeader';
import { menuItems } from '../constants/topNavigationLinks';
import { loggedInLinks, loggedOutLinks } from '../constants/userLinks';
import { useSession, signOut, signIn, signUp } from 'next-auth/react'

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
    <>
    <AppBar color="" elevation={0} position='relative' style={{ backgroundColor: 'var(--char5)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            href="/"
          >
            <img src="/turn17-logo-main.png" alt="Turn 17 Media Logo" style={{ width: '90px' }} />
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', ml: '-100px' }}>
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

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'end' }}>
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
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
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
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, width: '100px' }}>
                <Avatar alt="Turn 17 User" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
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
                session?.user?.email? (
                  <>
                    {loggedInLinks.map((link, index) => (
                      <MenuItem key={index} onClick={handleCloseUserMenu}>
                        <a href={link.path}>
                        <Typography textAlign="center" sx={{ fontFamily: 'audiowide' }}>{link.text}</Typography>
                        </a>
                      </MenuItem>
                    ))}
                  </>
                ) : (
                  <>
                    {loggedOutLinks.map((link, index) => (
                      <MenuItem key={index} onClick={handleCloseUserMenu}>
                        <a href={link.path}>
                        <Typography textAlign="center" sx={{ fontFamily: 'audiowide' }}>{link.text}</Typography>
                        </a>
                      </MenuItem>
                    ))}
                  </>
                )
              }
              
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}
export default TopNavigation;