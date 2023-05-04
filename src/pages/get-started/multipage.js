import Head from 'next/head'
import clientPromise from '../../../lib/mongodb'
import styles from '@/styles/multipage.module.css'
import TopNavigation from '../../../components/TopNavigation'
import BannerHeader from '../../../components/BannerHeader'
import Footer from '../../../components/Footer/Footer'

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

export default function MultiPage({isConnected}) {
  return (
    <>
      <Head>
        <title>Pricing | Turn17 Media</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/turn17-media-tab-logo.jpg" />
      </Head>
      <TopNavigation />
      <BannerHeader 
        tag1='Under Construction'
        // subtag='Hidden fees'
        subtext1='Please bear with us as our site is being built.'
        subtext2='Contact info@turn17media.com with any questions.'
      />
      <main className={styles.main}>
      </main>
      <Footer />
    </>
  )
}
