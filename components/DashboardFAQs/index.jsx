import { 
  Box, 
  Container,
  Grid,
} from '@mui/material'
import Faq from '../Faq/faqItem'
import { ScheduleStyles } from './style'
import faqs from './faqs'


const DashboardFAQs = () => {  
  return(
    <ScheduleStyles>
      <Container sx={{ mt: 3 }} maxWidth='lg'>
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} gap={2}>
          <p>
            Our websites have a minimum build time of 14 business days.  It can take longer.  You have 24 hours from the time you submit your deposit to cancel and receive a refund.  After 24 hours, deposits are non-refundable.  Once your deposit is paid, please schedule your first developer meeting.  
          </p>
          <Grid container>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr',
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
        </Box>
      </Container>
    </ScheduleStyles>
  )
}

export default DashboardFAQs