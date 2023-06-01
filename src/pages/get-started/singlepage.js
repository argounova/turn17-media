import Head from 'next/head'
import clientPromise from '../../../lib/mongodb'
import styles from '@/styles/singlepage.module.css'
import TopNavigation from '../../../components/TopNavigation'
import BannerHeader from '../../../components/BannerHeader'
import Footer from '../../../components/Footer/Footer'
import Schedule from '../../../components/SelectSchedule'

export async function getServerSideProps() {
  try {
    await clientPromise
    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}

export default function SinglePage({isConnected}) {
  return (
    <>
      <Head>
        <title>Single Page | Turn17 Media</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/turn17-media-tab-logo.jpg" />
      </Head>
      <TopNavigation />
      <BannerHeader 
        tag1='Single Page Website'
        // subtag='Hidden fees'
        subtext1='Complete the steps below to start your journey.'
        // subtext2='Contact info@turn17media.com with any questions.'
      />
      <main className={styles.main}>
        <Schedule />
      </main>
      <Footer />
    </>
  )
}
