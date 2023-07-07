import { motion } from "framer-motion"
import { SiteExample } from "./style";
import Image from "next/image";
import finishedSiteEx from "../../public/images/wm.png"
import { 
  Box,
  Button,
  Typography
} from "@mui/material";

export default function FinishedSiteEx() {
  return(
    <SiteExample>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{ width: '100%' }}
      >
        <Box>
          <Typography variant='h2' align='center' sx={{ color: 'var(--mb1-3)' }}>
            Your site.  Easy peasy, lemon squeezy.
          </Typography>
          <Image 
            src={finishedSiteEx}
            alt='finished site example'
            className='image-example'
          />
        </Box>
      </motion.div>
      <Button
        href='/basics'
        variant='contained'
        className='btn'
      >
        Learn More
      </Button>
      <motion.svg className='btn-anim'
        width="600"
        height="600"
        viewBox="0 0 600 600"
      >
        <motion.rect
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          width="360"
          height="60"
          x="120"
          y="270"
          rx="6"
          stroke="var(--mb1-3)"
          strokeWidth='6px'
          transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 1
          }}
          fill="none"      
        >
        </motion.rect>
      </motion.svg>
    </SiteExample>
  )
}