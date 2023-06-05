import { Box, Grid } from '@mui/material'
import CalendlyScheduler from './calendlyScheduler'
import Faq from '../Faq/faqItem'
import { ScheduleStyles } from './style'
import faqs from './faqs'


const Schedule = () => {
    return(
        <ScheduleStyles>
            <h1>Schedule your project</h1>
            <br />
            <div className='schedule-container'>
                <div>
                    <div className='para-div'>
                        <p>
                        Single page websites have an approximate build time of six business days.  In theory, your site can be completed and launched in that time frame.  This assumes a domain is secured, hosting is established and site approvals by the client are handled in a timely manner.  However, life happens and we get that.  We will absolutely work with you on scheduling.  This topic will be addressed in greater detail at our first 1x1 and we invite you to browse the FAQs below.
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
                <div className='calendly-container'>
                    <CalendlyScheduler />
                </div>
            </div>
        </ScheduleStyles>
    )
}

export default Schedule