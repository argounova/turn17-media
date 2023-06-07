import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { signIn, getProviders } from 'next-auth/react'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.turn17media.com/" style={{ textDecoration: 'none', color: 'var(--mb1-1)' }}>
        Turn17 Media, LLC
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide({ providers }) {
    console.log('Provider', providers)

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://turn17media-main.s3.amazonaws.com/turn17media-header-background.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'var(--mb1-1)' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                {Object.values(providers).map((provider) => 
                    provider.name !== "Credentials" && (
                    <Button
                        key={provider.name}
                        onClick={() => signIn(provider.id, { callbackUrl: "/" })} 
                        fullWidth
                        variant="contained"
                        style={{
                            backgroundColor: 'var(--mb1-1)',
                            color: 'var(--char0)',
                            fontWeight: 'bolder',
                            fontSize: 'var(--p)',
                            margin: '10px 0px',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            padding: '2px'
                        }}
                    >
                        {provider.name === "LinkedIn" && (
                            <LinkedInIcon style={{ marginRight: '25%', fontSize: '50px' }} />
                        )}
                        {provider.name === "Google" && (
                            <GoogleIcon style={{ marginRight: '25%', fontSize: '50px' }} />
                        )}
                        {provider.name === "GitHub" && (
                        <GitHubIcon style={{ marginRight: '25%', fontSize: '50px' }}/>
                        )}
                        Sign in with {provider.name}
                    </Button>
                ))}
                <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                    <Box width="100%" border="solid" borderBottom={1} rounded="full"></Box>
                    <p style={{ padding: '0px 10px', fontFamily: 'Oxygen' }}>OR</p>
                    <Box width="100%" border="solid" borderBottom={1} rounded="full"></Box>
                </Box>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color='info'
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export async function getServerSideProps() {
    const providers = await getProviders()
    return {
      props: {
        providers
      },
    };
  }