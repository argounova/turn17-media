
import Image from "next/image"
import { BannerStyles } from "./style"
import { 
  Box,
  Container,
  Typography
} from "@mui/material"


const BannerC = () => {
  return(
    <BannerStyles>
      <Container maxWidth disableGutters sx={{ display: 'flex' }}>
        <Image 
          src={`/images/daytona-banner-background.jpg`}
          alt='turn17media banner background'
          width={2500}
          height={666}
          priority
          unoptimized={true}
        />
        <Box className='bannerC-text'>
          <Typography variant='h4'>
            Our goal is always the finish line, but we will never sacrifice quality or client satisfaction to get there.
          </Typography>
        </Box>
      </Container>
    </BannerStyles>
  )
}

export default BannerC