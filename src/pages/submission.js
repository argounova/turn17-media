import Head from 'next/head'
import TopNavigation from '../../components/TopNavigation'
import BannerHeader from '../../components/BannerHeader'
import Footer from '../../components/Footer/Footer'


export default function Submission() {
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
        tag1='Your project has been successfully submitted.'
        tag2='You will receive an email confirmation within 24 hours.'
        subtext1='View your submission in your dashboard.'
        subtext2='You can also pay your deposit or cancel your project there.'
      />
      <Footer />
    </>
  )
}