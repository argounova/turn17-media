import Head from 'next/head'
import Image from 'next/image'
import clientPromise from '../../lib/mongodb'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import TopNavigation from '../../components/TopNavigation'
import BannerHeader from '../../components/BannerHeader'
import MainFeatures from '../../components/MainFeatures'
import DownArrow from '../../components/DownArrow'
import Parallax from '../../components/Parallax/Parallax'
import FinishedSiteEx from '../../components/FinishedSiteEx'
import Button from '../../components/Button/index'
import Footer from '../../components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

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

export default function Home({isConnected}) {
  return (
    <>
      <Head>
        <title>Home | Turn17 Media</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/turn17-media-tab-logo.jpg" />
      </Head>
      <TopNavigation />
      <BannerHeader 
        tag1='Design a website on your terms'
        tag2={['with a', <span style={{  color: '#88deeb'}}> clear pricing </span>, 'structure.']}
        subtag='If you have to ask, you can&apos;t afford it'
        subtext1='Understand what you&apos;re getting and how much it will cost from day one.'
        subtext2='A secure, professional website doesn&apos;t need to be complicated.'
      />
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
          <MainFeatures />
          <DownArrow />
          <Parallax />
          <DownArrow />
          <FinishedSiteEx />
          <Button
            href='/pricing'
            text='Get Started'
            arrow={true}
          />
        </div>
        <Footer />
      </main>
    </>
  )
}
