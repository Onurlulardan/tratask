import styles from '../assets/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
        <div>
            <ul className={styles.list}>
                <li><a className={styles.listitem} href={void(0)}>Lorem</a></li>
                <li><a className={styles.listitem} href={void(0)}>Ipsum</a></li>
                <li><a className={`${styles.listitem} ${styles.listLast}`} href={void(0)}>Dolor</a></li>
            </ul>
        </div>
        <div className={styles.logo}>Logo Here</div>
        <div>
            <ul className={styles.list}>
                <li><a className={styles.listitem} href={void(0)}>Sit</a></li>
                <li><a className={styles.listitem} href={void(0)}>Consectetur</a></li>
                <li><a className={`${styles.listitem} ${styles.listLast}`} href={void(0)}>Elit</a></li>
            </ul>
        </div>
    </header>
  )
}

export default Header