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
import CalendlyScheduler from '../../components/CalendlyScheduler/calendlyScheduler'
import Footer from '../../components/Footer/Footer'


export default function Home() {
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
        tag1='Motorsports & Automotive websites.'
        tag2='By car people, for car people.'
        subtag='If you have to ask, you can&apos;t afford it'
        subtext1='Understand what you&apos;re getting and how much it will cost from the beginning.'
        subtext2='A secure, professional website doesn&apos;t need to be complicated.'
      />
      <main>
        <MainFeatures />
        <BannerAnimA />
        <BannerA />
        <BannerAnimB />
        <BannerC />
        <BannerD />
        <DownArrow />
        <FinishedSiteEx />
        <Contact />
        <div id='free-consultation' style={{ position: 'absolute', bottom: '800px' }}/>
        <CalendlyScheduler />
      </main>
      <Footer />
    </>
  )
}
