import { motion } from "framer-motion"
import { 
  Container,
  Typography
} from "@mui/material"
import LocalAtmIcon from '@mui/icons-material/LocalAtm'
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly'
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt'
import HttpsIcon from '@mui/icons-material/Https'


const BannerAnimA = () => {
  return(
    <Container disableGutters sx={{ minWidth: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--char5)', flexDirection: 'row', flexWrap: 'wrap', p: 2 }}>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          width: '350px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      > 
        <LocalAtmIcon sx={{ fontSize: '200px', color: 'var(--char0)' }}/>
        <Typography align='center' gutterBottom variant='h5' sx={{ color: 'var(--char0)' }}>
          Flat rate pricing
        </Typography>
      </motion.div>
        
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          width: '350px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <HttpsIcon sx={{ fontSize: '200px', color: 'var(--char0)' }}/>
        <Typography align='center' gutterBottom variant='h5' sx={{ color: 'var(--char0)' }}>
          SSL Certificates
        </Typography>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          width: '350px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <SatelliteAltIcon sx={{ fontSize: '200px', color: 'var(--char0)' }}/>
        <Typography align='center' gutterBottom variant='h5' sx={{ color: 'var(--char0)' }}>
          Daily communication
        </Typography>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          width: '350px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <MobileFriendlyIcon sx={{ fontSize: '200px', color: 'var(--char0)' }}/>
        <Typography align='center' gutterBottom variant='h5' sx={{ color: 'var(--char0)' }}>
          Responsive design
        </Typography>
      </motion.div>
    </Container>
  )
}

export default BannerAnimA