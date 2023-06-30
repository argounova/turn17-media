import * as React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Typography
} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'


const FeaturePhotoCard = ({ cardImage, altText, title, description, linkTo }) => {
  return (
    <Card sx={{ 
      width: '100%',
      height: 375,
      backgroundColor: 'var(--char1)' 
      }}>
      <Link href={`${linkTo}`}>
        <CardActionArea sx={{ height: 200 }}>
          <Image 
            src={cardImage}
            alt={altText}
            // height={200}
            // width={400}
            fill={true}
          />
        </CardActionArea>
        <CardContent>
            <Typography gutterBottom variant="h5" align='left'>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" align='left'>
              {description}
            </Typography>
          </CardContent>
      </Link>
      <CardActions>
        <Link href={`${linkTo}`}>
          <Button size="small" color="primary">
            Discover
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default FeaturePhotoCard