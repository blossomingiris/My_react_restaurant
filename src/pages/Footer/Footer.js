import { Newsletter } from '../../components'
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import { FaTripadvisor } from 'react-icons/fa'
import { BsStars } from 'react-icons/bs'
import { images } from '../../constants'
import styles from './Footer.module.css'


function Footer() {
  return (
    <div className={styles.footer}>
      <Newsletter />
      <div className={styles.footer_links}>
        <div className={styles.footer_links_contacts}>
          <h1 className={styles.footer_headtext}>Contact us</h1>
          <p className={`p_description ${styles.p_description_custom}`}>
            27 Tsocha Str. Ampelokipi, Athens
          </p>
          <p className={`p_description ${styles.p_description_custom}`}>
            +30 2106941000
          </p>
          <p className={`p_description ${styles.p_description_custom}`}>
            info@erato.gr
          </p>
        </div>
        <div className={styles.footer_links_icons}>
          <img src={images.eratoReverse} alt='footer_logo' />
          <div className={styles.description}>
            <p className={`p_description ${styles.p_description_special}`}>
              "Good restaurant design is about achieving equilibrium between the
              food, service, and design - in effect, telling a complete story."
            </p>
          </div>

          <div>
            <div className={styles.footer_links_icons_social_media}>
              <FiFacebook />
              <FaTripadvisor />
              <FiInstagram />
            </div>
          </div>
        </div>
        <div className={styles.footer_links_working_hours}>
          <h1 className={styles.footer_headtext}>Working hours</h1>
          <p className={`p_description ${styles.p_description_custom}`}>
            Monday - Friday:
          </p>
          <p>10:00 am - 12:00 am</p>
          <p> Saturday & Sunday</p>
          <p>10:00 am - 2:00 am</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <a
          href='/https://github.com/blossomingiris?tab=repositories'
          target='_blank'
        >
          <p>
            Created with <BsStars /> by Xenia Rachouti
          </p>
        </a>
      </div>
    </div>
  )
}

export default Footer
