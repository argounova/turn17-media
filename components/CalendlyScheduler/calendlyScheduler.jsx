import React from "react"
import { InlineWidget } from "react-calendly"
import {
  Box,
  Card,
  Container
} from '@mui/material'
 

const CalendlyScheduler = () => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card>
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