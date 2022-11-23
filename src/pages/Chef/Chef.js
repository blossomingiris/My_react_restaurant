import { AnimationOnScroll } from 'react-animation-on-scroll'
import { SubHeading } from '../../components'
import { images } from '../../constants'
import styles from './Chef.module.css'

function Chef() {
  return (
    <AnimationOnScroll animateIn='animate__fadeInLeftBig' duration='1.5'>
      <div className='wrapper section_padding'>
        <div className='wrapper_img wrapper_img_reverse'>
          <img src={images.chef} alt='chef' />
        </div>
        <div className='wrapper_info'>
          <SubHeading title="Chef's word" />
          <h2 className={`headtext ${styles.headtext_custom}`}>
            Inspiration around us
          </h2>
          <div className={styles.chef_content}>
            <div className={styles.chef_content_quote}>
              <img src={images.quote} alt='quote' />
              <p className='p_description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                fugit porro minus reiciendis optio deserunt, at atque animi.
              </p>
            </div>
            <p className='p_description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              earum at consequuntur fugit, aliquid nisi maiores quidem deserunt
              facere quod minima ad, dicta eum id animi porro asperiores
              pariatur neque! Obcaecati rerum non illo impedit repellendus quo,
              cumque voluptatum totam? Vero placeat doloremque quis sed ad
              praesentium, illo tempore iste officiis.
            </p>
          </div>
          <div className={styles.chef_sign}>
            <div>
              <p className={`p_description ${styles.p_description_custom}`}>
                Christos Rousopolus
              </p>
              <p className='p_description'>Chef & Founder</p>
            </div>
            <img
              src={images.sign}
              alt='sign'
              className={styles.image_sign_img}
            />
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  )
}

export default Chef
