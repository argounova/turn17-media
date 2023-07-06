import { useState } from "react"
import { useSession } from 'next-auth/react'
import { 
  Box, 
  Button, 
  Grid
} from '@mui/material'
import { ContentStyles } from './style'
import DropDownTextArea from './DropDownText'
import dropDownTextQuestions from './dropDownTextQuestions'

const SelectContent = () => {
  const { data: session } = useSession()
  const [contentItem, setContent] = useState(dropDownTextQuestions)
  let contentAreas = []

  const updateState = (index) => (e) => {
    contentAreas = contentItem.map((item, i) => {
      if (index === i) {
        return { ...item, [e.target.name]: e.target.value }
      } else {
        return item
      }
    })
    setContent(contentAreas)
  }

  const handleSave = () => {
    const postData = async () => {
      const data = {
        email: session.user.email,
        contentItem: contentItem,
        submissionComplete: true,
      }
      const response = await fetch('/api/routes/contentRoute', {
        method: 'PUT',
        body: JSON.stringify(data),
      })
      return response.json()
    }
    postData().then((data) => {
      location.replace('/submission?status=success')
    })
  }

  return(
    <>
      <ContentStyles>
        <div className='content-container'>
        <h2 style={{ fontFamily: 'audiowide' }}>ADDITIONAL INFORMATION</h2>
        <br />
          <Grid container justifyContent="flex-start">
            <Box
              sx={{
                p: {
                  xs: 2,
                  lg: 0,
                },
                display: 'grid',
                gridTemplateColumns: { xs: '1fr' },
                gap: 2,
                width: '100%'
              }} 
            >
              {dropDownTextQuestions.map((item, index) => (
                  <DropDownTextArea 
                      key={index}
                      question={item.question}
                      name="contentItem"
                      onChange={updateState(index)}
                  />
              ))}
            </Box>
          </Grid>
          <br />
          <Button
            onClick={handleSave}
            variant='contained'
            fullWidth
            className='save-btn'
          >
            Save & Submit
          </Button>
        </div>
      </ContentStyles>
    </>
  )
}

export default SelectContent