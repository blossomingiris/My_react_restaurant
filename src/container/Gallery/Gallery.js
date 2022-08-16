import { useState, useRef } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { SubHeading } from '../../components'
import { images } from '../../constants'
import { BsInstagram, BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import styles from './Gallery.module.css'

const gallery = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
  images.gallery05,
  images.gallery06,
  images.gallery07,
  images.gallery08,
]

function Gallery() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef
    if (direction === 'left') {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 300
    }
  }

  return (
    <AnimationOnScroll animateIn='animate__fadeInLeftBig' duration='1.5'>
      <div className={`${styles.gallery} flex_center`}>
        <div className={styles.gallery_content}>
          <SubHeading title='Our instagram' />
          <h1 className={`headtext ${styles.headtext_custom}`}>
            photo gallery
          </h1>
          <div className={styles.p_description_custom}>
            <p className='p_description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              mollitia asperiores laborum quidem commodi quibusdam corporis,
              adipisci animi enim.
            </p>
          </div>

          <button className='btn_animated'>
            <span>View more</span>
          </button>
        </div>
        <div className={styles.gallery_images}>
          <div className={styles.gallery_images_container} ref={scrollRef}>
            {gallery.map((image, index) => (
              <div
                className={`${styles.gallery_images_card} flex_center`}
                key={`gallery_image_${index + 1}`}
              >
                <img src={image} alt='gallery image' />
                <BsInstagram className={styles.gallery_image_icon} />
                <div className={styles.gallery_images_arrows}>
                  <BsChevronLeft
                    className={styles.gallery_images_arrow_icon}
                    onClick={() => scroll('left')}
                  />
                  <BsChevronRight
                    className={styles.gallery_images_arrow_icon}
                    onClick={() => scroll('right')}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  )
}

export default Gallery
