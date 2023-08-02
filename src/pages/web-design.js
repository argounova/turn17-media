import Head from 'next/head'
import TopNavigation from '../../components/TopNavigation'
import BannerHeader from '../../components/BannerHeader'
import BasicsCards from '../../components/Basics'
import Footer from '../../components/Footer/Footer'
import Contact from '../../components/Contact'


export default function WebDesign() {
  return (
    <>
      <Head>
        <title>Web Design | Turn17 Media</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/turn17-media-tab-logo.jpg" />
      </Head>
      <TopNavigation />
      <BannerHeader 
        tag1='Web Design & Development.'
        subtag='Complex understanding'
        subtext1='Modern, professional and affordable sites.'
      />
      <main>
        <BasicsCards />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
