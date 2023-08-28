import { WebDesignStyles } from "./style"
import { motion } from "framer-motion"
import {
  Box,
  Container,
  Stack,
  Typography
} from "@mui/material"
import Image from "next/image"


const BannA = () => {
  return (
    <WebDesignStyles>
      <Container className="bannA__container-main">
        <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: "center", alignItems: "center" }} >
          <motion.div
            initial={{ opacity: 0.5 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Typography gutterBottom variant="h2" sx={{ color: 'var(--white)', fontFamily: 'audiowide' }} align="center">
              &#34;Mobile First&#34; Design
            </Typography>
          </motion.div>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0.5, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image 
                src={`${'https://turn17media-main.s3.amazonaws.com/mobile-example.png'}`}
                alt="mobile phone"
                width={350}
                height={708}
                unoptimized={true}
                style={{ boxShadow: '2px 5px 15px var(--mb1-3)', borderRadius: '60px', backgroundColor: 'var(--char4)' }}
              />
            </motion.div>
            <Stack gap={8} sx={{ m: { xs: '50px', xl: '0px' } }}>
              <motion.div
                initial={{ opacity: 0.5, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <Typography gutterBottom variant="h4" align="center" sx={{ color: 'var(--mb1-3)', fontFamily: 'audiowide', textDecoration: 'underline', paddingLeft: {lg: '80px'}, textAlign: {lg: 'left'} }} >
                  Scalable
                </Typography>
                <Typography variant="h6" align="center" sx={{ paddingLeft: {lg: '80px'}, textAlign: {lg: 'left'} }}>
                  We develop all of our sites for mobile and then scale elements for larger screens.  This ensures the site is optimized for every device.
                </Typography>
            </motion.div>
              <motion.div
                initial={{ opacity: 0.5, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
              >
                <Typography gutterBottom variant="h4" align="center" sx={{ color: 'var(--mb1-3)', fontFamily: 'audiowide', textDecoration: 'underline', paddingLeft: {lg: '80px'}, textAlign: {lg: 'left'} }} >
                  Responsive
                </Typography>
                <Typography variant="h6" align="center" sx={{ paddingLeft: {lg: '80px'}, textAlign: {lg: 'left'} }}>
                  Content and images respond automatically as the screen size adjuts &#40;for example, entering full screen mode&#41;.    
                </Typography>
            </motion.div>
              <motion.div
                initial={{ opacity: 0.5, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <Typography gutterBottom variant="h4" align="center" sx={{ color: 'var(--mb1-3)', fontFamily: 'audiowide', textDecoration: 'underline', paddingLeft: {lg: '80px'}, textAlign: {lg: 'left'} }} >
                  Show/Hide
                </Typography>
                <Typography variant="h6" align="center" sx={{ paddingLeft: {lg: '80px'}, textAlign: {lg: 'left'} }}>
                  A busy site can be frustrating on mobile.  Show only the elements you want across varying devices, keeping your mobile site user friendly.
                </Typography>
            </motion.div>
              <motion.div
                initial={{ opacity: 0.5, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <Typography gutterBottom variant="h4" align="center" sx={{ color: 'var(--mb1-3)', fontFamily: 'audiowide', textDecoration: 'underline', paddingLeft: {lg: '80px'}, textAlign: {lg: 'left'} }} >
                  Performant
                </Typography>
                <Typography variant="h6" align="center" sx={{ paddingLeft: {lg: '80px'}, textAlign: {lg: 'left'} }}>
                  Fast load times and pre-rendering means mobile sites respond to touch immediately.
                </Typography>
            </motion.div>
          </Stack>
          </Box>
        </Box>
      </Container>
    </WebDesignStyles>
  )
}

export default BannA