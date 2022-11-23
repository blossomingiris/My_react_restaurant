import { useEffect, useState } from 'react'
import styles from './ScrollToTop.module.css'
import { BsArrowUp } from 'react-icons/bs'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return isVisible ? (
    <div className={styles.arrow} onClick={scrollToTop}>
      <BsArrowUp className={styles.arrow_icon} />
    </div>
  ) : (
    <div className={styles.arrow_no_visibility} onClick={scrollToTop}>
      <BsArrowUp className={styles.arrow_icon} />
    </div>
  )
}

export default ScrollToTop
