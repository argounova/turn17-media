import * as React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function FeatureTextCard({title, description}) {
  return (
    <Card sx={{ 
      maxWidth: 345,
      backgroundColor: 'var(--mb1-2)'
    }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color='var(--char0)' align='left'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}