import { images } from '../../constants'
import styles from './SubHeading.module.css'

function SubHeading({ title }) {
  return (
    <div className={styles.subHeading}>
      <p>{title}</p>
      <img src={images.spoon_right} alt='spoon' className={styles.spoon_img} />
    </div>
  )
}

export default SubHeading
