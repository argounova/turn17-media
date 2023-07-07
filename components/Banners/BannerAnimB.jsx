import Image from "next/image"
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { motion, AnimatePresence } from "framer-motion"
import { 
  Box,
  Container,
  Grid,
  Icon,
  Stack,
  Typography
} from "@mui/material"


const BannerAnimB = () => {
  return(
    <>
    <Container maxWidth disableGutters sx={{ display: {xs: 'none', sm: 'flex'}, justifyContent: 'center', alignItems: 'center' }}>
      <Grid container columns={{ xs: 1, md: 12 }}>
        <Grid xs={1} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image 
            src={`/images/mobile-first-banner-image.jpg`}
            alt='mobile first'
            width={630}
            height={560}
            priority
            unoptimized={true}
            style={{ boxShadow: '3px 6px 10px #000', borderRadius: '5px' }}
          />
        </Grid>
        <Grid xs={1} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <AnimatePresence>
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '150px'
          }}
        >
          <Stack direction='row' gap={4}>
            <TaskAltIcon sx={{ fontSize: 'var(--h1)' }} />
            <Typography variant='h3' sx={{ fontFamily: 'audiowide' }}>
              MOBILE FIRST DESIGN
            </Typography>
          </Stack>
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.75 }}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '150px'
          }}
        >
          <Stack direction='row' gap={4}>
            <TaskAltIcon sx={{ fontSize: 'var(--h1)' }} />
            <Typography variant='h3' sx={{ fontFamily: 'audiowide' }}>
              SEO BEST PRACTICES
            </Typography>
          </Stack>
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '150px'
          }}
        >
          <Stack direction='row' gap={4}>
            <TaskAltIcon sx={{ fontSize: 'var(--h1)' }} />
            <Typography variant='h3' sx={{ fontFamily: 'audiowide' }}>
              FAST LOAD TIMES
            </Typography>
          </Stack>
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '150px'
          }}
        >
          <Stack direction='row' gap={4}>
            <TaskAltIcon sx={{ fontSize: 'var(--h1)' }} />
            <Typography variant='h3' sx={{ fontFamily: 'audiowide' }}>
              SSL CERTIFICATES
            </Typography>
          </Stack>
        </motion.div>
      </AnimatePresence>
        </Grid>
      </Grid>
    </Container>
    <Container maxWidth disableGutters sx={{ display: {xs: 'flex', sm: 'none'}, justifyContent: 'center', alignItems: 'center', mt: 4 }}>
    <Grid container columns={{ xs: 1, md: 12 }}>
      <Grid xs={1} md={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image 
          src={`/images/mobile-first-banner-image.jpg`}
          alt='mobile first'
          width={380}
          height={350}
          priority
          unoptimized={true}
          style={{ boxShadow: '3px 6px 10px #000', borderRadius: '5px' }}
        />
      </Grid>
      <Grid xs={1} md={7} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <AnimatePresence>
      <motion.div
        initial={{ x: 500, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          width: '90%',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '150px',
        }}
      >
        <Stack direction='row' gap={4}>
          <TaskAltIcon sx={{ fontSize: 'var(--h1)' }} />
          <Typography variant='h3' sx={{ fontFamily: 'audiowide' }}>
            MOBILE FIRST DESIGN
          </Typography>
        </Stack>
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.75 }}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '150px'
        }}
      >
        <Stack direction='row' gap={4}>
          <TaskAltIcon sx={{ fontSize: 'var(--h1)' }} />
          <Typography variant='h3' sx={{ fontFamily: 'audiowide' }}>
            SEO BEST PRACTICES
          </Typography>
        </Stack>
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '150px'
        }}
      >
        <Stack direction='row' gap={4}>
          <TaskAltIcon sx={{ fontSize: 'var(--h1)' }} />
          <Typography variant='h3' sx={{ fontFamily: 'audiowide' }}>
            FAST LOAD TIMES
          </Typography>
        </Stack>
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '150px'
        }}
      >
        <Stack direction='row' gap={4}>
          <TaskAltIcon sx={{ fontSize: 'var(--h1)' }} />
          <Typography variant='h3' sx={{ fontFamily: 'audiowide' }}>
            SSL CERTIFICATES
          </Typography>
        </Stack>
      </motion.div>
    </AnimatePresence>
      </Grid>
    </Grid>
  </Container>
  </>
  )
}

export default BannerAnimB