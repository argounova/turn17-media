import { useEffect, useRef, useState } from 'react'
import { Box, Button, Grid } from '@mui/material'
import CalendlyScheduler from './calendlyScheduler'
import Faq from '../Faq/faqItem'
import { ScheduleStyles } from './style'
import faqs from './faqs'
import PayDeposit from '../PayDeposit'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion';


const Schedule = () => {
    const { query } = useRouter()
    const status = query.status
    const [success, setSuccess] = useState(false)
    const ref = useRef(null)
    
    const paymentSuccessful = () => {
        if (status === 'success') {
            setSuccess(true)
            scrollToElement()
        }
    }

    const scrollToElement = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        paymentSuccessful()
    }, [])
  
    return(
        <ScheduleStyles>
            <h1 ref={ref}>Pay deposit and schedule your project</h1>
            <br />
            <div className='schedule-container'>
                <div>
                    <div className='para-div'>
                        <p>
                        Our websites have a minimum build time of 7-14 business days.  It can take longer.  You have 24 hours from the time you submit your deposit to cancel and receive a refund.  After 24 hours, deposits are non-refundable.  Once your deposit is paid, please schedule your first developer meeting.  
                        </p>
                    </div>
                    <Grid container justifyContent="flex-start">
                        <Box
                            sx={{
                                p: {
                                    xs: 2,
                                    xl: 0,
                                },
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr' },
                                gap: 2,
                                width: '100%'
                            }}
                        >
                            <PayDeposit />
                            {faqs.map((each) => (
                                <Faq 
                                    key={each.id}
                                    question={each.question}
                                    answer={each.answer}
                                />
                            ))}
                        </Box>
                    </Grid>
                </div>
                {status? (
                    <div className='calendly-container' >
                        <motion.div 
                        style={{ border: 'solid 5px var(--mb1-3)', marginLeft: '10px', backgroundColor: '#fff' }}
                            animate={{
                            scale: [1, 1.05, 1.05, 1.05, 1],
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                                repeat: 3,
                                repeatDelay: 1
                            }}>
                            <CalendlyScheduler />
                        </motion.div>
                    </div>
                ) : (
                    <div className='calendly-container' style={{ opacity: 0.5, pointerEvents: "none" }} disabled>
                        <CalendlyScheduler />
                    </div>
                )}
                    
            </div>
        </ScheduleStyles>
    )
}

export default Schedule