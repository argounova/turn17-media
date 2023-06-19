import Head from 'next/head'
import styles from '@/styles/singlepage.module.css'
import TopNavigation from '../../components/TopNavigation'
import BannerHeader from '../../components/BannerHeader'
import Footer from '../../components/Footer/Footer'
import Content from '../../components/SelectAddContent'
import Options from '../../components/SelectOptions'
import SiteSelector from '../../components/SelectSite'
import { useSession } from 'next-auth/react'
import { hasToken } from '../../utils/userAuth'



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
        tag1='Let the Journey Begin'
        // subtag='Hidden fees'
        subtext1='Consider this an in-depth jumping off point.  Provide as much info as possible.'
        // subtext2='While nothing here is set in stone, this is the foundation for your site'
      />
      <main className={styles.main}>
        <SiteSelector />
        <Options />
        <Content />
      </main>
      <Footer />
    </>
  )
}
