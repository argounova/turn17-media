import Box from '@mui/material/Box';
import styles from '@/styles/BannerHeader.module.css'
import Oxygen from '@fontsource/oxygen'

function BannerHeader() {
    return(
        <Box className={styles.bannerHeader}>
            <img 
                src="/images/turn17media-header-background.png"
                alt='turn17media background'
                style={{
                width: '100vw',
                maxHeight: '75vh'
                }}  
            />
            <Box className={styles.bannerHeaderContent}>
                <h6>
                    Design a website on your terms
                </h6>
                <h6>
                    with a <span style={{  color: '#88deeb'}}>clear pricing</span> structure.
                </h6>
                <p
                style={{
                    color: '#c6c6c6',
                    textDecoration: 'line-through',
                    padding: '15px 0px',
                }}
                >
                    If you have to ask, you can&apos;t afford it
                </p>
                <p className={styles.subtext}>
                    Understand what you&apos;re getting and how much it will cost from day one.
                </p>
                <p className={styles.subtext}>
                    A secure, professional website doesn&apos;t need to be complicated.
                </p>
            </Box>
        </Box>
    )
}

export default BannerHeader