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
        <li className='p_discriiption'>
          <a href='#home'>Home</a>
        </li>
        <li className='p_discriiption'>
          <a href='#about'>About Us</a>
        </li>
        <li className='p_discriiption'>
          <a href='#menu'>Menus</a>
        </li>
        <li className='p_discriiption'>
          <a href='#awards'>Events</a>
        </li>
        <li className='p_discriiption'>
          <a href='#contacts'>Contacts Us</a>
        </li>
      </ul>
      <div className={styles.navbar_login}>
        <div>
          <a href='#login' className='p_discriiption'>
            Login In /Register
          </a>
        </div>
        <a href='/' className='p_discriiption'>
          Reservation
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
              <li className='p_discriiption'>
                <a href='#home'>Home</a>
              </li>
              <li className='p_discriiption'>
                <a href='#about'>About Us</a>
              </li>
              <li className='p_discriiption'>
                <a href='#menu'>Menus</a>
              </li>
              <li className='p_discriiption'>
                <a href='#awards'>Private-Dining</a>
              </li>
              <li className='p_discriiption'>
                <a href='#contacts'>Contacts Us</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
