import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { motion } from 'framer-motion';
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@mui/material'
import PayDeposit from './PayDeposit'
import CalendlyScheduler from './CalendlyScheduler/calendlyScheduler'

 
const UserSelections = () => {
  const { data: session } = useSession()
  const [userData, setUserData] = useState([])
  const [dataAvail, setDataAvail] = useState(null)
  const [index, setIndex] = useState('')
  const [showSelections, setShowSelections] = useState(false)
  const userEmail = session?.user.email
  
  const getData = () => {
    fetch('/api/routes/userData')
    .then(response => response.json())
    .then(data => {
      const index = data.findIndex((user) => user.email === userEmail)
      setUserData(data)
      setIndex(index)
      const avail = data[index].dataAvailable
      setDataAvail(avail)
      toggleSelections()
    })
  }

  const toggleSelections = () => {
    setShowSelections(showSelections => !showSelections)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Button onClick={getData} variant='contained' color='secondary' sx={{ width: '400px', height: '75px', margin: '20px' }}>
        Display/Hide Current Project
      </Button>
      {showSelections && dataAvail && (
        <>
          <h4 style={{ textAlign: 'center' }}>Current Project</h4>
          <br />
          <Grid container>
            <Box
              sx={{
                p: 2,
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
            >
              <Card>
                <CardContent>
                  <Typography gutterBottom>
                    Template Selection
                  </Typography>
                  <Divider />
                  <Typography mt={1} sx={{ fontWeight: 'bold' }}>
                    {userData[index].template}
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Typography gutterBottom >
                    Color Choices
                  </Typography>
                  <Divider />
                  {userData[index].colorChoices.map((color) => (
                    <Typography mt={1} sx={{ fontWeight: 'bold' }} key={color.index}>
                      {color.colorChoice}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Typography gutterBottom >
                    Font Choices
                  </Typography>
                  <Divider />
                  {userData[index].fontChoices.map((font) => (
                    <Typography mt={1} sx={{ fontWeight: 'bold' }} key={font.index}>
                      {font.fontChoice}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Typography gutterBottom >
                    Navigation Links
                  </Typography>
                  <Divider />
                  {userData[index].navLinks.map((link) => (
                    <Typography mt={1} sx={{ fontWeight: 'bold' }} key={link.index}>
                      {link.navLink}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
              {userData[index].contentArea.map((content) => (
                <Card key={content.index}>
                  <CardContent>
                    <Typography gutterBottom >
                      {content.question}
                    </Typography>
                    <Divider />
                    <Typography mt={1} sx={{ fontWeight: 'bold' }}>
                      {content.contentItem}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid>
          <Box
            sx={{
              p: 2,
              display: 'grid',
              gridTemplateColumns: { md: '1fr 1fr' },
              gap: 2,
              width: '100%'
            }}
          >
            <Card sx={{ padding: '10px' }}>
              <CardContent sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', width: '100%' }} gap={2}>
                  <h4>Balance Due</h4>
                  <h4>$0.00</h4>
                  {userData[index].depositPaid? (
                    <Button variant='contained' style={{ width: '200px' }}>Pay Balance</Button>
                  ) : (
                    <Button variant='contained' style={{ width: '200px' }} disabled>Pay Balance</Button>
                  )}
                  {userData[index].depositPaid? (
                    <Button 
                    variant='contained'
                    disabled
                    style={{ width: '200px' }}
                    >Pay Deposit
                    </Button>
                  ) : (
                    <PayDeposit />
                  )}
                  <Button variant='contained' style={{ backgroundColor: 'var(--mb1-1)', width: '200px' }} disabled>View Invoice</Button>
                  <p>Status: Not started</p>
                  <p>Current completion date: 00/00/2023</p>
                  <p style={{ color: 'yellowgreen' }}>ON TRACK</p>
                </Box>
                <Box style={{ display: 'flex', alignItems: 'center', width: '100%' }} gap={2} mt={10}>
                  {userData[index].submissionComplete? (
                    <>
                      <Button variant='contained' style={{ fontSize: 'var(--p)', width: '250px', height: '100px' }} disabled >New Project</Button>
                      <Button variant='contained' color='warning' style={{ fontSize: 'var(--p)', width: '250px', height: '100px' }}>Edit Project</Button>
                      <Button variant='contained' color='error' style={{ fontSize: 'var(--p)', width: '250px', height: '100px' }}>Cancel Project</Button>
                    </>
                  ) : (
                    <>
                      <Button variant='contained' style={{ backgroundColor: 'var(--mb1-3)', fontSize: 'var(--p)', width: '250px', height: '100px' }} href='/get-started'>New Project</Button>
                      <Button variant='contained' style={{ fontSize: 'var(--p)', width: '250px', height: '100px' }} disabled>Edit Project</Button>
                      <Button variant='contained' style={{ fontSize: 'var(--p)', width: '250px', height: '100px' }} disabled>Cancel Project</Button>
                    </>
                  )}
                </Box>
              </CardContent>
            </Card>
            <Card>
              <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                {userData[index].depositPaid? (
                      <div>
                          <motion.div 
                          style={{ border: 'solid 5px var(--mb1-3)', backgroundColor: '#fff' }}
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
                      <div style={{ opacity: 0.5, pointerEvents: "none" }} disabled>
                          <CalendlyScheduler />
                      </div>
                )}              
              </CardContent>
            </Card>
          </Box>
        </>
      )}
      {showSelections && !dataAvail && (
        <>
        <h1>No current projects...</h1>
        <h4>Click below to get started!</h4>
        <br />
        <Button variant='contained' style={{ backgroundColor: 'var(--mb1-3)', fontSize: 'var(--p)', width: '400px', height: '75px' }} href='/get-started'>New Project</Button>
        </>
      )}
        
    </Box>
  )
}

export default UserSelections