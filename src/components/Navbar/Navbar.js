import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from '../../constants/images'
import styles from './Navbar.module.css'

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState('false')

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <img src={images.erato} alt='restaurant logo' />
      </div>
      <ul className={styles.navbar_links}>
        <li className={styles.p_discription_custom}>
          <a href='#home'>Home</a>
        </li>
        <li className={styles.p_discription_custom}>
          <a href='#about'>About Us</a>
        </li>
        <li className={styles.p_discription_custom}>
          <a href='#menus'>Menus</a>
        </li>
        <li className={styles.p_discription_custom}>
          <a href='#events'>Events</a>
        </li>
        <li className={styles.p_discription_custom}>
          <a href='#gallery'>Our Gallery</a>
        </li>
      </ul>
      <div className={styles.navbar_contacts}>
        <a href='#reservation' className={styles.p_discription_custom}>
          Reservation
        </a>
        <a href='#contacts' className={styles.p_discription_custom}>
          Contact Us
        </a>
      </div>
      <div className={styles.navbar_smallscreen}>
        <GiHamburgerMenu
          className={styles.hamburger_menu_icon}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div
            className={`${styles.smallscreen_overlay} ${styles.flex_center} ${styles.slide_buttom}`}
          >
            <MdOutlineRestaurantMenu
              className={styles.overlay_close}
              onClick={() => setToggleMenu(false)}
            />
            <div className={styles.navbar_logo}>
              <img src={images.erato} alt='restaurant logo' />
            </div>
            <ul className={styles.navbar_smallscreen_links}>
              <li className='p_discription'>
                <a href='#home'>Home</a>
              </li>
              <li className='p_discription'>
                <a href='#about'>About Us</a>
              </li>
              <li className='p_discription'>
                <a href='#menus'>Menus</a>
              </li>
              <li className='p_discription'>
                <a href='#events'>Private-Dining</a>
              </li>
              <li className='p_discription'>
                <a href='#gallery'>Gallery</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
