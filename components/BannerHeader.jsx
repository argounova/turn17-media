import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function BannerHeader() {
    return(
        <Box
        sx={{
            mx: '5%',
            position: 'relative',
            top: '-150px',
            zIndex: '5',
        }}
        >
            <h4
            style={{
                color: '#fff',
                textAlign: 'center',
            }}
            >
                Design a website on your terms with a <span style={{  color: '#88deeb'}}>clear pricing</span> structure.
            </h4>
            <p
            style={{
                color: '#c6c6c6',
                textAlign: 'center',
                textDecoration: 'line-through',
            }}
            >
                If you have to ask, you can&apos;t afford it
            </p>
            <Typography
            sx={{
                color: '#fff',
                textAlign: 'center',
                display: {xs: 'none', sm: 'block'}
            }}
            >
                Understand what you&apos;re getting and how much it will cost from day one.
            </Typography>
            <Typography
            component='h3'
            sx={{
                color: '#fff',
                textAlign: 'center',
                display: {xs: 'none', sm: 'block'}
            }}
            >
                A secure, professional website doesn&apos;t need to be complicated.
            </Typography>
        </Box>
    )
}

export default BannerHeader