import * as React from 'react'
import { 
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography
} from '@mui/material'
import Link from 'next/link'


const AdCard = ({ title, description, linkTo }) => {
  return (
    <Box sx={{ 
      width: 200,
      height: 200,
      backgroundColor: 'var(--mb1-3)',
      borderRadius: '100px',
      boxShadow: '1px 5px 17px var(--char2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Link href={`${linkTo}`}>
            <Typography gutterBottom variant="h5" align='center' sx={{ fontFamily: 'audiowide', color: 'var(--char4)' }}>
              {title}
            </Typography>
            <Typography variant="h6" align='center' sx={{ color: 'var(--mb1-1)' }}>
              {description}
            </Typography>
      </Link>
    </Box>
  )
}

export default AdCard