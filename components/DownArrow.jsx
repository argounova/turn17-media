import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Icon from '@mui/material/Icon';
import { motion } from 'framer-motion';

export default function DownArrow() {
    return(
        <>
            <motion.div
                style={{
                    height: '200px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
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
        </>
    )
}