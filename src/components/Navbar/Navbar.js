import { useState } from 'react'
import { Link } from 'react-scroll'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import images from '../../constants/images'
import Reservation from '../Reservation/Reservation'
import styles from './Navbar.module.css'

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [toggleReservation, setToggleReservation] = useState(false)

  function closeModalHandler() {
    setToggleReservation(false)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <img src={images.erato} alt='restaurant logo' />
      </div>
      <ul className={styles.navbar_links}>
        <li className={styles.p_discription_custom}>
          <Link
            activeClass='active'
            to='home'
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className={styles.p_discription_custom}>
          <Link
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            About us
          </Link>
        </li>
        <li className={styles.p_discription_custom}>
          <Link
            activeClass='active'
            to='menus'
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
          >
            Menus
          </Link>
        </li>
        <li className={styles.p_discription_custom}>
          <Link
            activeClass='active'
            to='events'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Events
          </Link>
        </li>
        <li className={styles.p_discription_custom}>
          <Link
            activeClass='active'
            to='gallery'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Gallery
          </Link>
        </li>
      </ul>
      <div className={styles.navbar_contacts}>
        <a
          href='#reservation'
          className={styles.p_discription_custom}
          onClick={() => setToggleReservation(true)}
        >
          Reservation
        </a>
        <Link
          activeClass='active'
          to='contacts'
          spy={true}
          smooth={true}
          offset={130}
          duration={500}
          className={styles.p_discription_custom}
        >
          Contact Us
        </Link>
      </div>
      {toggleReservation ? <Reservation onCancel={closeModalHandler} /> : null}
      <div className={styles.navbar_smallscreen}>
        <GiHamburgerMenu
          className={styles.hamburger_menu_icon}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div
            className={`${styles.smallscreen_overlay} ${styles.flex_center} ${styles.slide_button}`}
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
