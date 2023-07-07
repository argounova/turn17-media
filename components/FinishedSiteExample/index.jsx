import { motion } from "framer-motion"
import { SiteExample } from "./style";
import Image from "next/image";
import finishedSiteEx from "../../public/images/wm.png"
import { Button } from "@mui/material";

export default function FinishedSiteEx() {
  return(
    <SiteExample>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 4 }}
        style={{
          marginTop: '2%',
          marginBottom: '2%'
        }}
      >
        <div style={{ width: '100%' }}>
          <h2
            className='common'
            style={{
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
              padding: '2% 0px',
            }}
          >
            Your site.  Easy peasy, lemon squeezy.
          </h2>
        </div>
        <Image 
          src={finishedSiteEx}
          alt='finished site example'
          className='image-example'
        />
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