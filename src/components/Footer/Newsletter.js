import styles from './Newsletter.module.css'

function Newsletter() {
  return (
    <div className={styles.newsletter}>
      <div className={styles.newsletter_heading}>
        <h1 className={`headtext ${styles.headtext_custom}`}>
          Subscribe to our Newsletters
        </h1>
        <p className={`p_description ${styles.p_description_custom}`}>
          And be the first to know about our updates
        </p>
      </div>
      <div className={`${styles.newsletter_input} flex_center`}>
        <input type='email' placeholder='Enter your email address' />
        <button className='btn_animated'>
          <span className={styles.custom_button}>Subscribe</span>
        </button>
      </div>
    </div>
  )
}

export default Newsletter
