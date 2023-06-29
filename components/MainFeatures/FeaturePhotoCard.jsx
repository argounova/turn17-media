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
      maxWidth: 345,
      backgroundColor: 'var(--char1)' 
      }}>
      <Link href={`${linkTo}`}>
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