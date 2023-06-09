import React, { useEffect } from 'react'
import Head from 'next/head'
import TopNavigation from '../../components/TopNavigation'
import BannerHeader from '../../components/BannerHeader'
import Footer from '../../components/Footer/Footer'
import { useSession } from 'next-auth/react'
import { hasToken } from '../../utils/userAuth'
import { Container } from '@mui/material'


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

export default function Success() {
  const { data: session, status, update } = useSession()

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  )

  useEffect(() => {
    const interval = setInterval(() => update(), 10000)
    return () => clearInterval(interval)
  }, [update])

  useEffect(() => {
    const visibilityHandler = () => document.visibilityState === "visible" && update()
    window.addEventListener("visibilitychange", visibilityHandler, false)
    return () => window.removeEventListener("visibilitychange", visibilityHandler, false)
  }, [update])

  useEffect(() => {
    trueDeposit()
  })

  const trueDeposit = () => {
    const postData = async () => {
    await delay(1000)
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get('session_id')
    const data = {
      email: session.user.email,
      depositId: id,
      depositPaid: true,
    }
    const response = await fetch('/api/routes/depositSuccess', {
      method: 'PUT',
      body: JSON.stringify(data),
    })
    return response.json()
    }
    postData().then((data) => console.log(data))
  }

  

  return (
    <>
      <Head>
        <title>Success | Turn17 Media</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/turn17-media-tab-logo.jpg" />
      </Head>
      <TopNavigation />
      <BannerHeader 
        tag1='Let&apos;s go!'
        tag2='Your deposit is in.'
        subtext1='Thanks for your payment.'
        subtext2='Head to your dashboard and schedule your developer meeting.'
      />
      <Container disableGutters sx={{ backgroundColor: 'var(--char5)', height: '25vh', minWidth: '100%' }}/>
      <Footer />
    </>
  )
}