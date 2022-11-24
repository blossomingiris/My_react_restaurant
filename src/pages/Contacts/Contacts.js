import { AnimationOnScroll } from 'react-animation-on-scroll'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { SubHeading } from '../../components'
import { images } from '../../constants'
import styles from './Contacts.module.css'

function FindUs() {
  return (
    <AnimationOnScroll animateIn='animate__fadeInRightBig' duration='1.5'>
      <div className={`wrapper ${styles.section_padding_custom}`} id='contacts'>
        <div className={`wrapper_info' ${styles.wrapper_info_custom}`}>
          <SubHeading title='Contacts' />
          <h1 className={`headtext ${styles.headtext_custom}`}>
            How to find us
          </h1>
          <div className='wrapper_content'>
            <p className={`p_description ${styles.p_description_special}`}>
              Center str, Athens, Greece
            </p>
            <p className='p_description'>Information: +30 210001000</p>
            <p className='p_description'>Reservation: +30 2100001010</p>
            <p className={`p_description ${styles.p_description_custom}`}>
              Opening hours:
            </p>
            <p className='p_description'>Monday - Friday: 10:00am - 12:00am</p>
            <p className='p_description'>
              Saturday & Sunday: 10:00am - 02:00am
            </p>
            <p className={`p_description ${styles.p_description_custom}`}>
              Happy hours:
            </p>
            <p className='p_description'>Monday - Friday: 14:00am - 18:00pm</p>
          </div>
        </div>
        <div className={styles.map_wrapper}>
          <MapContainer
            center={[37.985977388858, 23.7561938979933]}
            zoom={20}
            zoomControl={false}
          >
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={[37.985977388858, 23.7561938979933]}>
              <Popup>
                <div className={styles.popup_image}>
                  <img src={images.E} alt='' />
                  <p>We are here!</p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </AnimationOnScroll>
  )
}

export default FindUs
