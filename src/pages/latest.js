import Head from 'next/head'
import clientPromise from '../../lib/mongodb'
import styles from '@/styles/singlepage.module.css'
import Divider from '@mui/material/Divider'
import Image from 'next/image'
import Stack from '@mui/material/Stack'
import TopNavigation from '../../components/TopNavigation'
import BannerHeader from '../../components/BannerHeader'
import Footer from '../../components/Footer/Footer'
import postImage from '../../public/images/post1thumb.jpg'

export async function getServerSideProps() {
  try {
    const client = await clientPromise
    const db = client.db("turn17_media")
    const latest = await db
      .collection("latest")
      .find({})
      .limit(10)
      .toArray()
    return {
      props: { latest: JSON.parse(JSON.stringify(latest)) },
    }
  } catch (e) {
    console.error(e)
  }
}

export default function Latest({ latest }) {
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
        tag1='Latest happenings from Turn17'
        // subtag='Hidden fees'
        subtext1='Check out some of our recent clients, new sites and even our extracurricular activites.'
        // subtext2='Contact info@turn17media.com with any questions.'
      />
      <main className={styles.main}>
        {latest.map((post) => (
          <div className={styles.postDiv} key={post.id}>
            <Stack 
              direction={{ xs: 'column', sm: 'row' }}
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Image
                src={postImage}
                alt='image'
                style={{ width: 'auto', height: '300px' }}
              />
              <Stack gap={1}>
                <h1>{post.title}</h1>
                <h3>{post.subtitle}</h3>
                <p>{post.dateStart} to {post.dateEnd}</p>
                <p>{post.para}</p>
                <p>Post by: {post.author}</p>
              </Stack>
            </Stack>
          </div>
        ))}
      </main>
      <Footer />
    </>
  )
}
