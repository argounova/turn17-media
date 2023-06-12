import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Stack } from '@mui/material';
import FeaturePhotoCard from './FeaturePhotoCard';
import FeatureTextCard from './FeatureTextCard';
import specSite from '../public/images/spec-site-card-bw.jpg';
import gtSite from '../public/images/gt-site-card-bw.jpg';

export default function MainFeatures() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid 
        container
        spacing={2}
        justifyContent='center'
        alignItems='center'    
    >
        <Grid>
          <FeaturePhotoCard 
            cardImage={specSite}
            altText='card image colors'
            title='Spec Class Website'
            description='Minimalistic in design, professional by nature.'
          />
        </Grid>
        <Grid>
            <Stack gap={2}>
                <FeatureTextCard 
                    title='Pricing'
                    description='Flat-rate structure with no hidden fees.'
                />
                <FeatureTextCard 
                    title='Build Time'
                    description='Efficient development means your site goes live sooner.'
                />
                <FeatureTextCard 
                    title='Satisfaction'
                    description='Client happiness is paramount.'
                />
            </Stack>
        </Grid>
        <Grid>
          <FeaturePhotoCard 
            cardImage={gtSite}
            altText='card image payments'
            title='GT Class Website'
            description='Multiple pages, highly customizable.'
          />
        </Grid>
      </Grid>
    </Box>
  );
}