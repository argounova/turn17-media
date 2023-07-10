import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import Icon from '@mui/material/Icon'
import { motion } from 'framer-motion'
import { Container } from '@mui/material'

export default function DownArrow() {
    return(
        <Container sx={{ minWidth: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--char5)' }}>
            <motion.div
                style={{
                    height: '50px',
                    width: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'var(--mb1-3)',
                    borderRadius: '50%',
                    margin: '100px 0px'
                }}
                animate={{
                    scale: [2, 3, 3, 2, 2],
                    rotate: [0, 0, 360, 360, 0],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                }}
            >
                <Icon
                    style={{
                        color: 'var(--char5)',
                    }}
                >
                    <ArrowDownwardIcon />
                </Icon>
            </motion.div>
        </Container>
    )
}