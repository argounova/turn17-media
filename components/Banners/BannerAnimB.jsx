import Image from "next/image"
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import { motion } from "framer-motion"
import { 
  Box,
  Container,
  Stack,
  Typography
} from "@mui/material"


const BannerAnimB = () => {
  return(
    <Container  sx={{ minWidth: '100vw', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', p: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image 
          src={`/images/mobile-first-banner-image.jpg`}
          alt='mobile first'
          width={630}
          height={560}
          priority
          unoptimized={true}
          style={{ boxShadow: '3px 6px 10px #000', borderRadius: '5px', maxWidth: '90vw', height: 'auto' }}
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
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
            <Typography variant='h4' sx={{ fontFamily: 'audiowide' }}>
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
            <Typography variant='h4' sx={{ fontFamily: 'audiowide' }}>
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
            <Typography variant='h4' sx={{ fontFamily: 'audiowide' }}>
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
            <Typography variant='h4' sx={{ fontFamily: 'audiowide' }}>
              SSL CERTIFICATES
            </Typography>
          </Stack>
        </motion.div>
      </Box>
    </Container>
  //   <Container maxWidth sx={{ display: {xs: 'flex', md: 'none'}, justifyContent: 'center', alignItems: 'center' }}>
  //   <Grid container columns={{ xs: 1 }}>
  //     {/* <Grid xs={1} md={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  //       <Image 
  //         src={`/images/mobile-first-banner-image.jpg`}
  //         alt='mobile first'
  //         width={380}
  //         height={350}
  //         priority
  //         unoptimized={true}
  //         style={{ boxShadow: '3px 6px 10px #000', borderRadius: '5px' }}
  //       />
  //     </Grid> */}
  //     <Grid xs={1} md={7} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
  //       <AnimatePresence>
  //         <motion.div
  //           initial={{ x: 100, opacity: 0 }}
  //           whileInView={{ x: 0, opacity: 1 }}
  //           transition={{ duration: 0.6 }}
  //           style={{
  //             width: '90%',
  //             display: 'flex',
  //             justifyContent: 'flex-start',
  //             alignItems: 'center',
  //             height: '120px',
  //           }}
  //         >
  //           <Stack direction='row' gap={3}>
  //             <TaskAltIcon sx={{ fontSize: 'var(--h2)' }} />
  //             <Typography variant='h4' sx={{ fontFamily: 'audiowide' }}>
  //               MOBILE FIRST DESIGN
  //             </Typography>
  //           </Stack>
  //         </motion.div>
  //         <motion.div
  //           initial={{ x: 100, opacity: 0 }}
  //           whileInView={{ x: 0, opacity: 1 }}
  //           transition={{ duration: 0.75 }}
  //           style={{
  //             width: '90%',
  //             display: 'flex',
  //             justifyContent: 'flex-start',
  //             alignItems: 'center',
  //             height: '120px'
  //           }}
  //         >
  //           <Stack direction='row' gap={3}>
  //             <TaskAltIcon sx={{ fontSize: 'var(--h2)' }} />
  //             <Typography variant='h4' sx={{ fontFamily: 'audiowide' }}>
  //               SEO BEST PRACTICES
  //             </Typography>
  //           </Stack>
  //         </motion.div>
  //         <motion.div
  //           initial={{ x: 100, opacity: 0 }}
  //           whileInView={{ x: 0, opacity: 1 }}
  //           transition={{ duration: 1 }}
  //           style={{
  //             width: '90%',
  //             display: 'flex',
  //             justifyContent: 'flex-start',
  //             alignItems: 'center',
  //             height: '120px'
  //           }}
  //         >
  //           <Stack direction='row' gap={3}>
  //             <TaskAltIcon sx={{ fontSize: 'var(--h2)' }} />
  //             <Typography variant='h4' sx={{ fontFamily: 'audiowide' }}>
  //               FAST LOAD TIMES
  //             </Typography>
  //           </Stack>
  //         </motion.div>
  //         <motion.div
  //           initial={{ x: 100, opacity: 0 }}
  //           whileInView={{ x: 0, opacity: 1 }}
  //           transition={{ duration: 1.2 }}
  //           style={{
  //             width: '90%',
  //             display: 'flex',
  //             justifyContent: 'flex-start',
  //             alignItems: 'center',
  //             height: '120px'
  //           }}
  //         >
  //           <Stack direction='row' gap={3}>
  //             <TaskAltIcon sx={{ fontSize: 'var(--h2)' }} />
  //             <Typography variant='h4' sx={{ fontFamily: 'audiowide' }}>
  //               SSL CERTIFICATES
  //             </Typography>
  //           </Stack>
  //         </motion.div>
  //       </AnimatePresence>
  //     </Grid>
  //   </Grid>
  // </Container>
  )
}

export default BannerAnimB