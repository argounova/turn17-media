import { WebDesignStyles } from "./style"
import { motion } from "framer-motion"
import {
  Container,
  Typography
} from "@mui/material"
import Groups3SharpIcon from '@mui/icons-material/Groups3Sharp'
import HandshakeSharpIcon from '@mui/icons-material/HandshakeSharp'
import MoneySharpIcon from '@mui/icons-material/MoneySharp'


const BannC = () => {
  return (
    <WebDesignStyles>
      <Container className="bannC__container-main">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="bannC__motion-div"
        >
          <Groups3SharpIcon sx={{ fontSize: '200px', color: 'var(--char0)' }}/>
          <Typography align='center' gutterBottom variant='h5' sx={{ color: 'var(--char0)' }}>
            Increase traffic
          </Typography>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="bannC__motion-div"
        >
          <HandshakeSharpIcon sx={{ fontSize: '200px', color: 'var(--char0)' }}/>
          <Typography align='center' gutterBottom variant='h5' sx={{ color: 'var(--char0)' }}>
            Build relationships
          </Typography>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="bannC__motion-div"
        >
          <MoneySharpIcon sx={{ fontSize: '200px', color: 'var(--char0)' }}/>
          <Typography align='center' gutterBottom variant='h5' sx={{ color: 'var(--char0)' }}>
            Earn more
          </Typography>
        </motion.div>
      </Container>
      <Container className="bannC__container-alt">
        <Typography variant="h2" align="center" sx={{ color: 'var(--mb1-1)', letterSpacing: '0.2rem' }}>
          Schedule a free consultation today!
        </Typography>
      </Container>
    </WebDesignStyles>
  )
}

export default BannC