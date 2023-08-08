import { WebDesignStyles } from "./style"
import { motion } from "framer-motion"
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import Star from '@mui/icons-material/Grade'
import StarRateIcon from '@mui/icons-material/StarRate'


const Stars = () => {
  return (
    <WebDesignStyles>
      <motion.div
        animate={{ 
            scale: [0.25, 0.75, 1, 0.75, 0.25],
            opacity: [0, 0.5, 1, 0.5, 0]
        }}
        transition={{
            duration: 12,
            ease: "easeOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
        }}
        className="bannA__star1 hide"
      >
        <Star sx={{ fontSize: '30px', color: 'var(--mb1-4)' }}/>
      </motion.div>
      <motion.div
        animate={{ 
            scale: [0.25, 0.75, 1, 0.75, 0.25],
            opacity: [0, 0.5, 1, 0.5, 0]
        }}
        transition={{
            duration: 20,
            ease: "easeOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
        }}
        className="bannA__star2 hide"
      >
        <AutoAwesomeIcon sx={{ fontSize: '50px', color: 'var(--mb1-2)' }}/>
      </motion.div>
      <motion.div
        animate={{ 
            scale: [0.25, 0.75, 1, 0.75, 0.25], 
            opacity: [0, 0.5, 1, 0.5, 0]
        }}
        transition={{
            duration: 16,
            ease: "easeOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
        }}
        className="bannA__star3 hide"
      >
        <StarRateIcon sx={{ fontSize: '40px', color: 'var(--mb1-3)' }}/>
      </motion.div>
      <motion.div
        animate={{ 
            scale: [0.25, 0.75, 1, 0.75, 0.25],
            opacity: [0, 0.5, 1, 0.5, 0]
        }}
        transition={{
            duration: 12,
            ease: "easeOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
        }}
        className="bannA__star4 hide"
      >
        <Star sx={{ fontSize: '40px', color: 'var(--mb1-4)' }}/>
      </motion.div>
      <motion.div
        animate={{ 
            scale: [0.25, 0.75, 1, 0.75, 0.25],
            opacity: [0, 0.5, 1, 0.5, 0]
        }}
        transition={{
            duration: 20,
            ease: "easeOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
        }}
        className="bannA__star5 hide"
      >
        <AutoAwesomeIcon sx={{ fontSize: '60px', color: 'var(--mb1-3)' }}/>
      </motion.div>
      <motion.div
        animate={{ 
            scale: [0.25, 0.75, 1, 0.75, 0.25], 
            opacity: [0, 0.5, 1, 0.5, 0]
        }}
        transition={{
            duration: 16,
            ease: "easeOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
        }}
        className="bannA__star6 hide"
      >
        <StarRateIcon sx={{ fontSize: '50px', color: 'var(--mb1-4)' }}/>
      </motion.div>
      <motion.div
        animate={{ 
            scale: [0.25, 0.75, 1, 0.75, 0.25], 
            opacity: [0, 0.5, 1, 0.5, 0]
        }}
        transition={{
            duration: 16,
            ease: "easeOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
        }}
        className="bannA__star7 hide"
      >
        <StarRateIcon sx={{ fontSize: '40px', color: 'var(--mb1-1)' }}/>
      </motion.div>
  </WebDesignStyles>
  )
}

export default Stars