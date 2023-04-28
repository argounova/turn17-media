import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function BannerHeader() {
    return(
        <Box
        sx={{
            mx: '5%'
        }}
        >
            <Typography
            variant="h5"
            sx={{
                color: '#fff',
                textAlign: 'center',
                position: 'relative',
                top: '-130px'
            }}
            >
            Design a website on your terms with a clear pricing structure.
            </Typography>
        </Box>
    )
}

export default BannerHeader