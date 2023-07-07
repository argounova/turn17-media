import { 
  Button,
  Container,
  Typography
} from "@mui/material"


const BannerA = () => {
  return(
    <Container sx={{ minWidth: '100vw', minHeight: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: 'linear-gradient(103deg, rgba(31,71,79,1) 0%, rgba(49,109,120,1) 22%, rgba(49,109,120,1) 78%, rgba(31,71,79,1) 100%)', p: 4 }}>
      <Typography
        align='center'
        variant='h6'
        sx={{ fontFamily: 'audiowide' }}
        gutterBottom
      >GET A FREE QUOTE</Typography>
      <Typography
        align='center'
        variant='h3'
        gutterBottom
      >No commitments, no obligations.</Typography>
      <Typography
        align='center'
        variant='h5'
        sx={{ color: 'var(--black)' }}
        gutterBottom
      >It only takes a minute with no sign up required.  Receive a quote in as little as two business days.</Typography>
      <br />
      <br />
      <Button
        variant='contained'
        color='inherit'
        sx={{ backgroundColor: 'var(--mb1-4)', fontSize: 'var(--p)' }}
        href='/free-quote'
      >
        Start My Free Quote
      </Button>
    </Container>
  )
}

export default BannerA