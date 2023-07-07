import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Container
} from "@mui/material"


const BannerAnimA = () => {
  return(
    <Container maxWidth disableGutters sx={{ height: '333px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--char5)' }}>
      <AnimatePresence>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{
            width: '15%',
            display: 'flex',
            justifyContent: 'space-evenly'
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
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{
            width: '15%',
            display: 'flex',
            justifyContent: 'space-evenly'
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
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{
            width: '15%',
            display: 'flex',
            justifyContent: 'space-evenly'
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
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{
            width: '15%',
            display: 'flex',
            justifyContent: 'space-evenly'
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
    </Container>
  )
}

export default BannerAnimA