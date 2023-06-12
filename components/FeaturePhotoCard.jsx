import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

export default function FeaturePhotoCard({cardImage, altText, title, description}) {
  return (
    <Card sx={{ 
      maxWidth: 345,
      backgroundColor: 'var(--char1)' 
      }}>
      <CardActionArea>
        <Image 
          src={cardImage}
          alt={altText}
          width={345}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" align='left'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href='/get-started/singlepage'>
          Discover
        </Button>
      </CardActions>
    </Card>
  );
}