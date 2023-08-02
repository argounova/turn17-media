import Head from 'next/head'
import TopNavigation from '../../components/TopNavigation'
import BannerHeader from '../../components/BannerHeader'
import Footer from '../../components/Footer/Footer'
import Quote from '../../components/Quote'


export default function FreeQuote() {
  return (
    <>
      <Head>
        <title>Free Quote | Turn17 Media</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/turn17-media-tab-logo.jpg" />
      </Head>
      <TopNavigation />
      <BannerHeader 
        tag1='Complete the following for a free quote.'
        // subtag='Hidden fees'
        subtext1='Please choose Spec or GT for a single page or multi page website, respectively.'
        // subtext2='We will contact you within 2-3 business days.'
      />
      <main>
        <Quote />
      </main>
      <Footer />
    </>
  )
}