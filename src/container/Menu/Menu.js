import { images, data } from '../../constants'
import { SubHeading, MenuItem } from '../../components'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import styles from './Menu.module.css'

function Menu() {
  return (
    <AnimationOnScroll animateIn='animate__fadeInLeftBig' duration='1.5'>
      <div className={`${styles.menu} flex_center section_padding`} id='menus'>
        <div className={styles.img_wine}>
          <img src={images.wine} alt='bottle_of_wine' />
        </div>
        <div className={styles.menu_title}>
          <SubHeading title='Food made with passion' />
          <h1 className={`${styles.headtext_custom} headtext`}>
            Today's special menu
          </h1>
          <p className={styles.p_text}>HAPPY HOUR 14:00pm-19:30pm</p>
        </div>

        <div className={styles.menu_description}>
          <div className={`${styles.menu_description_drinks} flex_center`}>
            <p className={styles.menu_description_heading}>Wine & cocktails</p>
            <div className={`${styles.menu_description_items} flex_center`}>
              {data.drinks.map((drink, index) => (
                <MenuItem
                  key={drink.title + index}
                  title={drink.title}
                  price={drink.price}
                  tags={drink.tags}
                />
              ))}
            </div>
            <div>
              <button type='button' className='btn_animated'>
                {' '}
                <span> View Winelist</span>
              </button>
            </div>
          </div>
          <div className={styles.menu_description_img}>
            <img src={images.menu} alt='plate with food' />
          </div>
          <div className={`${styles.menu_description_foods} flex_center`}>
            <p className={styles.menu_description_heading}>Summer cuisine</p>
            <div className={`${styles.menu_description_items} flex_center`}>
              {data.foods.map((food, index) => (
                <MenuItem
                  key={food.title + index}
                  title={food.title}
                  price={food.price}
                  tags={food.tags}
                />
              ))}
            </div>
            <div>
              <button type='button' className='btn_animated'>
                {' '}
                <span> View all menu</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  )
}

export default Menu
