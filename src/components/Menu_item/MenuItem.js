import styles from './MenuItem.module.css'

function MenuItem({ title, price, tags }) {
  return (
    <div className={styles.menu_item}>
      <div className={styles.menu_item_header}>
        <div className={styles.menu_item_name}>
          <p className={styles.menu_item_body}>{title}</p>
        </div>
        <div className={styles.menu_item_price}>
          <p className={styles.menu_item_body}>{price}</p>
        </div>
      </div>
      <div className={styles.menu_sub}>
        <p>{tags}</p>
      </div>
    </div>
  )
}

export default MenuItem
