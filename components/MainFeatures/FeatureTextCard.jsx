import * as React from 'react'
import { 
  Card,
  CardActionArea,
  CardContent,
  Typography
} from '@mui/material'
import Link from 'next/link'


const FeatureTextCard = ({ title, description, linkTo }) => {
  return (
    <Card sx={{ 
      width: '100%',
      backgroundColor: 'var(--mb1-2)'
    }}>
      <Link href={`${linkTo}`}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" align='left'>
              {title}
            </Typography>
            <Typography variant="body2" color='var(--char0)' align='left'>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

export default FeatureTextCard