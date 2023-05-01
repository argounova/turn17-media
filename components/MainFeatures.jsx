import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import FeaturePhotoCard from './FeaturePhotoCard';
import FeatureTextCard from './FeatureTextCard';

export default function MainFeatures() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={6} md={6}>
          <FeaturePhotoCard />
        </Grid>
        <Grid xs={6} md={6}>
          <FeatureTextCard />
        </Grid>
        <Grid xs={6} md={6}>
          <FeaturePhotoCard />
        </Grid>
        <Grid xs={6} md={6}>
          <FeatureTextCard />
        </Grid>
      </Grid>
    </Box>
  );
}