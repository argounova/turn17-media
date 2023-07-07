import { 
  Box,
  Container 
} from '@mui/material'
import styles from '@/styles/BannerHeader.module.css'
import Image from 'next/image'

function BannerHeader({ tag1, tag2, subtag, subtext1, subtext2 }) {
  return(
    <Container disableGutters maxWidth='xl' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: -8 }}>
      <Image 
        src={`/images/banner-header-image.jpg`}
        width={2500}
        height={666}
        alt='turn17media background'
        priority
        unoptimized={true}
      />
      <Box className={styles.bannerHeaderContent}>
        <h1 style={{ color: 'var(--white)', letterSpacing: '0.2rem' }}>{tag1}</h1>
        <h1 style={{ color: 'var(--white)', letterSpacing: '0.2rem' }}>{tag2}</h1>
        <p style={{ color: 'var(--char2)', textDecoration: 'line-through', padding: '15px 0px' }}>{subtag}</p>
        <p>{subtext1}</p>
        <p>{subtext2}</p>
        </Box>
    </Container>
  )
}

export default BannerHeader