import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { data } from '../../constants'
import images from '../../constants/images'
import styles from './Reservation.module.css'

function Reservation(props) {
  function cancelHandler() {
    props.onCancel()
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.card_container}>
        <div className={styles.card_image}>
          <img src={images.reservation} alt='' />
        </div>
        <div className={styles.card_content}>
          <MdOutlineRestaurantMenu
            className={styles.overlay_close}
            onClick={cancelHandler}
          />
          <div className={styles.card_logo}>
            {' '}
            <img src={images.erato} alt='' />
          </div>
          <h2 class={`headtext ${styles.headtext_custom}`}>
            Table reservation
          </h2>
          <div className={styles.card_form_container}>
            <form action=''>
              <div className={styles.card_form_row}>
                <select name='days'>
                  {data.reserveDays.map((day, index) => (
                    <option value={day} key={index}>
                      {day}{' '}
                    </option>
                  ))}
                </select>
                <select name='hours'>
                  {data.reserveHours.map((hour, index) => (
                    <option value={hour} key={index + 1}>
                      {hour}
                    </option>
                  ))}
                </select>
              </div>
            </form>
            <div className={styles.card_form_row}>
              <input type='text' placeholder='Enter your name' />
              <input type='text' placeholder='Enter your surname' />
            </div>
            <div className={styles.card_form_row}>
              <input type='text' placeholder='Enter phone number' />
              <input type='text' placeholder='How many guests?' min='1' />
            </div>
          </div>
          <input
            type='submit'
            value='Book table'
            className={styles.card_form_row_btn}
          ></input>
        </div>
      </div>
    </div>
  )
}

export default Reservation
