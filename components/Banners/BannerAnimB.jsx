import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Container,
  Grid
} from "@mui/material"


const BannerAnimB = () => {
  return(
    <Container maxWidth disableGutters sx={{ height: '666px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container columns={{ xs: 1, md: 12 }}>
        <Grid xs={1} md={7} alignItems='center'>

        </Grid>
        <Grid xs={1} md={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <AnimatePresence>
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start'
          }}
        >
          <Image 
              src={`/turn17-media-logo-v1-1.png`}
              alt='turn17 media logo'
              height={150}
              width={150}
          />
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.75 }}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start'
          }}
        >
          <Image 
              src={`/turn17-media-logo-v1-1.png`}
              alt='turn17 media logo'
              height={150}
              width={150}
          />
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start'
          }}
        >
          <Image 
              src={`/turn17-media-logo-v1-1.png`}
              alt='turn17 media logo'
              height={150}
              width={150}
          />
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start'
          }}
        >
          <Image 
              src={`/turn17-media-logo-v1-1.png`}
              alt='turn17 media logo'
              height={150}
              width={150}
          />
        </motion.div>
      </AnimatePresence>
        </Grid>
      </Grid>
    </Container>
  )
}

export default BannerAnimB