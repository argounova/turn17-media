import { 
  Box,
  Container,
  Typography
} from "@mui/material"
import Link from "next/link"


const BannerD = () => {
  return(
    <Container  sx={{ minWidth: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 4 }}>
      <Box>
        <Typography gutterBottom variant='h4' align='center'>
          We keep our process streamlined, transparent and on track.  Our sites are custom coded ensuring you get a unique website set to your specifications.  Get started with a free quote or schedule a free consultation if you have questions.  Speak with a developer who understands your business needs.  At Turn17 Media, we value client relationships above all else and seek to make lasting connections with people who love cars as much as we do.
        </Typography>
      </Box>
      <Box>
        <Link
          href='/free-quote'
        >
        <Typography variant='h3' align='center' sx={{ fontFamily: 'audiowide', color: 'var(--mb1-1)' }}>
          LADIES & GENTLEMEN, START YOUR ENGINES
        </Typography>
        </Link>
      </Box>
    </Container>
  )
}

export default BannerD