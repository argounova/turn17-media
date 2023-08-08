import * as React from 'react'
import {
  Box,
  Stack
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import AdCard from './AdCard'
import FeaturePhotoCard from './FeaturePhotoCard'
import FeatureTextCard from './FeatureTextCard'
import specSite from '../../public/images/spec-site-card-bw.jpg'
import gtSite from '../../public/images/gt-site-card-bw.jpg'


export default function MainFeatures() {
  return (
    <Box m={2} mb={15}>
      <Grid 
        container
        spacing={4}
        align='center'
        alignItems='center'   
        columns={{ xs: 1, sm: 4, md: 6, lg: 9, xl: 11 }} 
      >
        <Grid xs={1} lg={1.5} xl={2} sx={{ display: { xs: 'block', sm: 'none', lg: 'block' } }}>
          <AdCard 
            title='Free Quote'
            description='Start a quote today!'
            linkTo='/free-quote'
          />
        </Grid>
        <Grid xs={1} sm={2} md={2} lg={2} xl={2.5}>
          <FeaturePhotoCard 
            cardImage={specSite}
            altText='card image colors'
            title='Web Design'
            description='Modern, mobile-first design.'
            linkTo='/web-design'
          />
        </Grid>
        <Grid xs={1} md={2} lg={2} xl={2} sx={{ display: { sm: 'none', md: 'block' } }}>
          <Stack gap={2}>
            <FeatureTextCard 
              title='Pricing'
              description='Flat-rate structure with no hidden fees.'
              linkTo='/pricing'
            />
            <FeatureTextCard 
              title='Build Time'
              description='Efficient development means your site goes live sooner.'
              linkTo='/web-design'
            />
            <FeatureTextCard 
              title='Satisfaction'
              description='Client happiness is paramount.'
              linkTo='/faqs'
            />
          </Stack>
        </Grid>
        <Grid xs={1} sm={2} md={2} lg={2} xl={2.5}>
          <FeaturePhotoCard 
            cardImage={gtSite}
            altText='card image payments'
            title='Photography'
            description='Digital media solutions.'
            linkTo='/photography'
          />
        </Grid>
        <Grid xs={1} sm={1.25} md={3} lg={1.5} xl={2}>
          <AdCard 
            title='Free Consultation'
            description='Schedule now!'
            linkTo='/#free-consultation'
          />
        </Grid>
        <Grid sm={1.5} md={2} lg={2} xl={2} sx={{ display: { xs: 'none', sm: 'block', md: 'none' } }}>
          <Stack gap={2}>
            <FeatureTextCard 
              title='Pricing'
              description='Flat-rate structure with no hidden fees.'
              linkTo='/pricing'
            />
            <FeatureTextCard 
              title='Build Time'
              description='Efficient development means your site goes live sooner.'
              linkTo='/basics'
            />
            <FeatureTextCard 
              title='Satisfaction'
              description='Client happiness is paramount.'
              linkTo='/basics'
            />
          </Stack>
        </Grid>
        <Grid sm={1.25} md={3} lg={1.5} xl={2} sx={{ display: { xs: 'none', sm: 'block', md: 'block', lg: 'none' } }}>
          <AdCard 
            title='Free Quote'
            description='Start a quote today!'
            linkTo='/free-quote'
          />
        </Grid>
      </Grid>
    </Box>
  )
}