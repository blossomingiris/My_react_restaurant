import { images } from '../../constants'
import SubHeading from '../../components/SubHeading/SubHeading'
import styles from './Header.module.css'

function Header() {
  return (
    <div className='wrapper section_padding' id='home'>
      <div className='wrapper_info'>
        {' '}
        <SubHeading title='Flavors inspired by the seasons' />
        <h1 className={styles.header_h1}>Food that tells a story</h1>
        <p className='p_description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          aliquid velit, perferendis facilis porro eligendi eaque fugit quisquam
          aspernatur doloribus at consequatur minus cum ex ad beatae corporis
          natus incidunt! Sit molestias aperiam totam, laudantium maiores nisi
          reprehenderit praesentium tempore maxime cupiditate non excepturi
          obcaecati magnam.
        </p>
        <button className='btn_animated'>
          <span>Explore menu</span>
        </button>
      </div>
      <div className='wrapper_img'>
        <img src={images.hero} alt='plate with food' />
      </div>
    </div>
  )
}

export default Header
