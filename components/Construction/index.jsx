import { ConstructionStyles } from "./style"
import { motion } from "framer-motion"
import { Typography } from "@mui/material"


function Construction() {
  return(
    <ConstructionStyles>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1 ] }}
        transition={{ duration: 150 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          color: 'var(--mb1-4)'
        }}
      >
        <Typography variant='h1' align='center' gutterBottom>
          Under Construction
        </Typography>
        <Typography variant='h2' align='center' gutterBottom>
          Please check back soon!
        </Typography>
      </motion.div>
    </ConstructionStyles>
  )
}

export default Construction