import 'photoswipe/dist/photoswipe.css'
import { PhotoGalleryStyles } from './style'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { galleryA } from './photos'
import {
  Container,
  Grid,
  Typography
} from "@mui/material"


const PhotoGallery = () => {
  return (
    <PhotoGalleryStyles>
      <Gallery>
        <Grid 
          container 
          gap={2} 
          direction="row" 
          justifyContent="center"
          alignItems="center"
        >
          {galleryA.map((item) => (
            <Grid key={item.id}>
              <Item
                original={item.srcOriginal}
                thumbnail={item.srcThumb}
                width={item.srcWidth}
                height={item.srcHeight}
                
              >
                {({ ref, open }) => (
                  <img
                    ref={ref}
                    onClick={open}
                    src={item.srcThumb}
                    style={{
                      cursor: 'pointer',
                      boxShadow: '1px 2px 10px var(--char3)',
                      borderRadius: '2px'
                    }}
                  />
                )}
              </Item>
            </Grid>
          ))}
          </Grid>
        <Container maxWidth='md'>
          <Typography variant='h4' gutterBottom align='right' sx={{ fontFamily: 'audiowide', textShadow: '1px 1px 5px var(--char1)', color: 'var(--char3)' }}>
            2007 MazdaSpeed6
          </Typography>
        </Container>
        
      </Gallery>
    </PhotoGalleryStyles>
  )
}

export default PhotoGallery