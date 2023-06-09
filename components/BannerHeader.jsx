import Box from '@mui/material/Box';
import styles from '@/styles/BannerHeader.module.css'

function BannerHeader({ tag1, tag2, subtag, subtext1, subtext2 }) {
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
                    {tag1}
                </h6>
                <h6>
                    {tag2}
                </h6>
                <p
                style={{
                    color: '#c6c6c6',
                    textDecoration: 'line-through',
                    padding: '15px 0px',
                }}
                >
                    {subtag}
                </p>
                <p className={styles.subtext}>
                    {subtext1}
                </p>
                <p className={styles.subtext}>
                    {subtext2}
                </p>
            </Box>
        </Box>
    )
}

export default BannerHeader