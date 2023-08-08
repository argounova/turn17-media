import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { galleryA } from './photos'


const PhotoGallery = () => {
  return (
    <Gallery>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '240px 240px 240px',
          gridTemplateRows: '180px 180px',
          gridGap: 12,
          cursor: 'pointer'
        }}
      >
        {galleryA.map((item) => (
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
              />
            )}
          </Item>
        ))}
      </div>
    </Gallery>
  )
}

export default PhotoGallery