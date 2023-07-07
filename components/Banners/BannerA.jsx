
import Image from "next/image"
import { 
  Box,
  Button,
  Container,
  Grid,
  Typography
} from "@mui/material"


const BannerA = () => {
  return(
    <Container maxWidth disableGutters sx={{ height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(103deg, rgba(31,71,79,1) 0%, rgba(49,109,120,1) 22%, rgba(49,109,120,1) 78%, rgba(31,71,79,1) 100%)' }}>
     <Grid
      container
      alignItems='center'
      columns={{ xs: 1, md: 12 }}
     >
      <Grid xs={1} md={4}>
        {/* <Image 
          src={`/images/myna-blur2.png`}
          alt='miata at ppir banner image 1'
          height={666}
          width={833}
        /> */}
      </Grid>
      <Grid  xs={1} md={4} align='center'>
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
      </Grid>
      <Grid xs={1} md={4}>
        
      </Grid>
     </Grid>
    </Container>
  )
}

export default BannerA