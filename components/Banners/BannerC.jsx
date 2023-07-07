
import Image from "next/image"
import { 
  Box,
  Container
} from "@mui/material"


const BannerC = () => {
  return(
    <Container maxWidth disableGutters sx={{ height: '666px', display: 'flex' }}>
      <Image 
        src={`/images/daytona-banner-background.jpg`}
        alt='turn17media banner background'
        width={2500}
        height={666}
        priority
        unoptimized={true}
      />
    </Container>
  )
}

export default BannerC