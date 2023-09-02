import { useState } from 'react'
import Head from 'next/head'
import TopNavigation from '../../components/TopNavigation'
import BannerHeader from '../../components/BannerHeader'
import MainFeatures from '../../components/MainFeatures'
import DownArrow from '../../components/DownArrow'
import BannerAnimA from '../../components/Banners/BannerAnimA'
import BannerAnimB from '../../components/Banners/BannerAnimB'
import BannerA from '../../components/Banners/BannerA'
import BannerC from '../../components/Banners/BannerC'
import BannerD from '../../components/Banners/BannerD'
import FinishedSiteEx from '../../components/FinishedSiteExample'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer/Footer'
import ControlledModal from '../../components/ControlledModal'
import CalendlyScheduler from '../../components/CalendlyScheduler/calendlyScheduler'


export default function Home() {
  const [shouldShowModal, setShouldShowModal] = useState(false)
  return (
    <>
      <Head>
        <title>Home | Turn17 Media</title>
        <meta name="description" content="Turn17 Media Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/turn17-media-tab-logo.jpg" />
      </Head>
      <TopNavigation />
      <BannerHeader 
        tag1='Welcome to Turn17 Media.'
        tag2='Discover affordable web design and photography solutions.'
        subtag='If you have to ask, you can&apos;t afford it'
        // subtext1='Understand what you&apos;re getting and how much it will cost from the beginning.'
        // subtext2='A secure, professional website doesn&apos;t need to be complicated.'
      />
      <main>
        <MainFeatures 
          onClick={() => setShouldShowModal(!shouldShowModal)}
        />
        <BannerAnimA />
        <BannerA />
        <BannerAnimB />
        <BannerC />
        <BannerD />
        <DownArrow />
        <FinishedSiteEx />
        <Contact />
        <div id='free-consultation' style={{ position: 'absolute', bottom: '800px' }}/>
        <ControlledModal
          shouldShow={shouldShowModal}
          onRequestClose={() => {
            setShouldShowModal(false)
          }}
        >
          <CalendlyScheduler />
        </ControlledModal>
      </main>
      <Footer />
    </>
  )
}
