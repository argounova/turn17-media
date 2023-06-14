import Head from 'next/head'
import styles from '@/styles/singlepage.module.css'
import TopNavigation from '../../../components/TopNavigation'
import BannerHeader from '../../../components/BannerHeader'
import Footer from '../../../components/Footer/Footer'
import Content from '../../../components/SelectAddContent'
import Options from '../../../components/SelectOptions'
import Schedule from '../../../components/SelectSchedule'
import Template from '../../../components/SelectTemplate/Spec'
import Button from '@mui/material/Button';
import { useSession } from 'next-auth/react'
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

export default function SinglePage() {
  const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>Spec Class | Turn17 Media</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/turn17-media-tab-logo.jpg" />
      </Head>
      <TopNavigation />
      <BannerHeader 
        tag1='Spec Class Website'
        // subtag='Hidden fees'
        subtext1='Complete the steps below to start your journey.'
        // subtext2='Contact info@turn17media.com with any questions.'
      />
      <main className={styles.main}>
        <Template />
        <Options />
        <Content />
        <Schedule />
      </main>
      <Footer />
    </>
  )
}
