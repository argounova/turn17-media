import React from "react"
import { InlineWidget } from "react-calendly"
import {
  Box,
  Card,
  Container
} from '@mui/material'
 

const CalendlyScheduler = () => {
  return (
    <Container sx={{ minWidth: '100vw', display: 'flex', justifyContent: 'center', backgroundColor: 'var(--char5)' }}>
      <Card sx={{ width: 'fit-content', m: 2 }}>
        <div>
          <InlineWidget
            url="https://calendly.com/turn17media"
          />
        </div>
      </Card>
    </Container>
  )
}

export default CalendlyScheduler;