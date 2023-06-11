import { useState } from 'react'
import { Box, Button, Grid } from '@mui/material'
import CalendlyScheduler from './calendlyScheduler'
import Faq from '../Faq/faqItem'
import { ScheduleStyles } from './style'
import faqs from './faqs'
import PayDeposit from '../PayDeposit'
import { useRouter } from 'next/router'



const Schedule = () => {
    const { query } = useRouter()
    const status = query.status
    const [success, setSuccess] = useState(false)
    const paymentSuccessful = () => {
        if (status === 'success') {
            setSuccess(true)
        }
    }
  
    return(
        <ScheduleStyles>
            <h1>Pay deposit and schedule your project</h1>
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
                    <div className='calendly-container'>
                        <CalendlyScheduler />
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