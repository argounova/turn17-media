import * as React from 'react'
import { 
  Box,
  Button,
  Typography
} from '@mui/material'
import Link from 'next/link'


const AdCard = ({ title, description, linkTo, button, onClick }) => {
  return (
    <>
      {button ? (
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
        <Button onClick={onClick} sx={{ height: '200px', width: '200px', borderRadius: '100px', background: 'transparent', dispaly: 'flex', flexDirection: 'column' }}>
          <Typography gutterBottom variant="h6" align='center' sx={{ fontFamily: 'audiowide', color: 'var(--char4)' }}>
            {title}
          </Typography>
          <Typography variant="h6" align='center' sx={{ color: 'var(--mb1-1)' }}>
            {description}
          </Typography>
        </Button>
        </Box>
      ) : (
        <Link href={`${linkTo}`}>
        <Box sx={{ 
          width: 200,
          height: 200,
          backgroundColor: 'var(--mb1-3)',
          borderRadius: '100px',
          boxShadow: '1px 5px 17px var(--char2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
          <Typography gutterBottom variant="h6" align='center' sx={{ fontFamily: 'audiowide', color: 'var(--char4)' }}>
            {title}
          </Typography>
          <Typography variant="h6" align='center' sx={{ color: 'var(--mb1-1)' }}>
            {description}
          </Typography>
          </Box>
        </Link>
      )}
    </>
  )
}

export default AdCard