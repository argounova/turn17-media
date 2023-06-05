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
            description='Select from hundreds of color palettes and fonts.'
          />
        </Grid>
        <Grid>
            <Stack gap={2}>
                <FeatureTextCard 
                    title='Pages'
                    description='Currently offering 1-3 page custom websites.'
                />
                <FeatureTextCard 
                    title='Photography'
                    description='We are happy to find and connect you with local photographers.'
                />
            </Stack>
        </Grid>
        <Grid>
          <FeaturePhotoCard 
            cardImage={cardImagePayments}
            altText='card image payments'
            title='Payments (Coming Soon)'
            description='Accept payments from anywhere.'
          />
        </Grid>
      </Grid>
    </Box>
  );
}