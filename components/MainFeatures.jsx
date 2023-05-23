import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Stack } from '@mui/material';
import FeaturePhotoCard from './FeaturePhotoCard';
import FeatureTextCard from './FeatureTextCard';
import cardImageColors from '../public/images/colors.jpg';
import cardImagePayments from '../public/images/payments.jpg';

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
            cardImage={cardImageColors}
            altText='card image colors'
            title='Customization'
            description='Select from hundreds of color palettes, fonts, and more.'
          />
        </Grid>
        <Grid>
            <Stack gap={2}>
                <FeatureTextCard 
                    title='Pages'
                    description='Single, 2-5 or any custom number of pages.'
                />
                <FeatureTextCard 
                    title='Photography'
                    description='We can connect you with a local, trusted photographer.  Up to 2 photo shoots included at no additional cost depending on the site you choose.'
                />
            </Stack>
        </Grid>
        <Grid>
          <FeaturePhotoCard 
            cardImage={cardImagePayments}
            altText='card image payments'
            title='Payments (Coming Soon)'
            description='Processed via Stripe or Shopify, accept payments from anywhere.'
          />
        </Grid>
      </Grid>
    </Box>
  );
}