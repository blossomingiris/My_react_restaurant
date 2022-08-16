import { AnimationOnScroll } from 'react-animation-on-scroll'
import { SubHeading } from '../../components'
import { images } from '../../constants'
// import styles from './Chef.module.css'
import React from 'react'

function FindUs() {
  return (
    <div className='wrapper section_padding' id='contact'>
      <div className='wrapper_info'>
        <SubHeading title='Contacts' />
        <h1 className='headtext'>Find us</h1>
        <div className='wrapper_content'>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
            soluta praesentium
          </p>
          <p>Opening hours</p>
          <p>Mon - Fri: 10:00am - 01:00am</p>
          <p>Sat - Sun: 10:00am - 03:00am</p>
        </div>
      </div>
      <div className='wrapper_img'>
        <img src={images.findus} alt='find_us' />
      </div>
    </div>
  )
}

export default FindUs
