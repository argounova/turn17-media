import { BannerHeaderStyles } from './style'
import { 
  Box
} from '@mui/material'
import Image from 'next/image'


function BannerHeader({ tag1, tag2, subtag, subtext1, subtext2 }) {
  return(
    <BannerHeaderStyles>
      <Image 
        src={`/images/banner-header-image.jpg`}
        width={2500}
        height={450}
        alt='turn17media background'
        priority
        unoptimized={true}
        className='bannerHeaderImage'
      />
      <Box className='bannerHeaderContent'>
        <h1>{tag1}</h1>
        <h1>{tag2}</h1>
        <p style={{ color: 'var(--char2)', textDecoration: 'line-through', padding: '15px 0px' }}>{subtag}</p>
        <p>{subtext1}</p>
        <p>{subtext2}</p>
        </Box>
    </BannerHeaderStyles>
  )
}

export default BannerHeader