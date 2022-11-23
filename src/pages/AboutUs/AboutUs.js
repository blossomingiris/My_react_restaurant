import { AnimationOnScroll } from 'react-animation-on-scroll'
import { images } from '../../constants'
import styles from './AboutUs.module.css'

function AboutUs() {
  return (
    <AnimationOnScroll animateIn='animate__fadeInLeftBig' duration='1.5'>
      <div
        className={`${styles.about_us} flex_center section_padding`}
        id='about'
      >
        <div className={`${styles.about_us_overlay} flex_center`}>
          <img src={images.E} alt='E' />
        </div>
        <div className={`${styles.about_us_content} flex_center`}>
          <div className={styles.about_us_content_about}>
            <h1 className='headtext'>About us</h1>
            <img src={images.spoon_right} alt='spoon' className='spoon_image' />
            <p className={`p_description ${styles.p_description_custom}`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
              perspiciatis quidem veniam minima quis soluta totam, aliquid dolor
              nemo. Ipsam quas, repellat labore officia non suscipit optio
              placeat ratione aspernatur? Odio, consequuntur unde accusantium ut
              maiores soluta cupiditate autem esse tempora iusto nesciunt non.
            </p>
            <button className='btn_animated'>
              <span>Learn more</span>
            </button>
          </div>
          <div className={styles.about_us_knife}>
            <img src={images.knife} alt='cook-knife' />
          </div>

          <div className={styles.about_us_content_history}>
            <h1 className='headtext'>Our story</h1>
            <img src={images.spoon_left} alt='spoon' className='spoon_image' />
            <p className={`p_description ${styles.p_description_custom}`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
              perspiciatis quidem veniam minima quis soluta totam, aliquid dolor
              nemo. Ipsam quas, repellat labore officia non suscipit optio
              placeat ratione aspernatur? Odio, consequuntur unde accusantium ut
              maiores soluta cupiditate autem esse tempora iusto nesciunt non.
            </p>
            <button className='btn_animated'>
              <span>Learn more</span>
            </button>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  )
}

export default AboutUs
