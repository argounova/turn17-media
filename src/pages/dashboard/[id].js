import Head from 'next/head'
import PayDeposit from '../../../components/PayDeposit'
import Schedule from '../../../components/SelectSchedule'
import TopNavigation from '../../../components/TopNavigation'
import Footer from '../../../components/Footer/Footer'
import UserSelections from '../../../components/UserSelections'
import { useSession } from 'next-auth/react'
import {
  Box,
  Button,
  Container,
} from '@mui/material'
import { hasToken } from '../../../utils/userAuth'


export async function getServerSideProps(context) {
  const token = await hasToken(context.req)
  if(!token) {
    return {
      redirect: {
        destination: '/invalid',
        permanent: false
      }
    }
  }
  return { props: {} }
}

const UserDashboard = () => {
  const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>Dashboard | Turn17 Media</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/turn17-media-tab-logo.jpg" />
      </Head>
      <TopNavigation />
      <Container sx={{ mt: 20, display: 'flex', justifyContent: 'space-between' }} maxWidth='xl'>
        <Box>
          <h2>Welcome, {session?.user.name}</h2>   
          <Box>
            <UserSelections />
          </Box>      
        </Box>
        <Box style={{ display: 'flex' }} gap={4}>
          <Box style={{ display: 'flex', flexDirection: 'column' }} gap={2}>
            <Button variant='contained' style={{ backgroundColor: 'var(--mb1-4)', color: 'var(--char5)', fontSize: '20px', width: '200px', height: '100px' }} href='/get-started'>New Project</Button>
            <Button variant='contained' style={{ fontSize: '20px', width: '200px', height: '100px' }} disabled>Edit Project</Button>
          </Box>
          <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', width: '400px' }} gap={2}>
            <h4>Balance Due</h4>
            <h4>$0.00</h4>
            <Button variant='contained' style={{ width: '200px' }} disabled>Pay Balance</Button>
            <PayDeposit />
            <Button variant='contained' style={{ backgroundColor: 'var(--mb1-1)', width: '200px' }}>View Invoice</Button>
            <p>Status: Not started</p>
            <p>Current completion date: 00/00/2023</p>
            <p style={{ color: 'yellowgreen' }}>ON TRACK</p>
          </Box>
        </Box>
      </Container>
      <Schedule />
      <Footer />
    </>
  )
}

export default UserDashboard