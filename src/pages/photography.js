import Head from 'next/head'
import TopNavigation from '../../components/TopNavigation'
import BannerHeader from '../../components/BannerHeader'
import Footer from '../../components/Footer/Footer'
import Contact from '../../components/Contact'
import CalendlyScheduler from '../../components/CalendlyScheduler/calendlyScheduler'
import PhotoGallery from '../../components/PhotoGallery'


export default function Photography() {
  return (
    <>
      <Head>
        <title>Photography | Turn17 Media</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/turn17-media-tab-logo.jpg" />
      </Head>
      <TopNavigation />
      <BannerHeader 
        tag1='Photography services available.'
        // subtag='Complex understanding'
        subtext1='Automotive, engagement and portrait photography are a few of our specialties.'
        subtext2='Contact us today or schedule a free consultation below.'
      />
      <main>
        <PhotoGallery />
        <Contact />
        <CalendlyScheduler />
      </main>
      <Footer />
    </>
  )
}
