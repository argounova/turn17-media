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
            title='Colors'
            description='Select from hundreds of Adobe color palettes or create your own.'
          />
        </Grid>
        <Grid>
            <Stack gap={2}>
                <FeatureTextCard 
                    title='Pages'
                    description='Single, 4-6 or any custom number of pages.'
                />
                <FeatureTextCard 
                    title='Databases'
                    description='Lots of data or product?  Our non-relational databases have you covered.'
                />
            </Stack>
        </Grid>
        <Grid>
          <FeaturePhotoCard 
            cardImage={cardImagePayments}
            altText='card image payments'
            title='Payments'
            description='Processed via Stripe or Shopify, accept payments from anywhere.'
          />
        </Grid>
      </Grid>
    </Box>
  );
}