import styles from '../assets/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <hr className={styles.footerTop} />
      <div className={styles.footerContent}>
      <div className={styles.footerH1}>
        <h1> 
          <span>Lorem</span> 
          <span>Ipsum</span>
          <span>Dolor</span>
        </h1>
        <h1>Fermentum Venenatis <br />
        Parturient Venenatis Etiam Frilingilla / Nullam</h1>
      </div>
      <div className={styles.footerP}>
        <p className='mt-[30px]'>© 2022 Parturient Lorem</p>
        <p className='mt-[30px] mr-[155px]'>lorem@example.com.tr</p>
      </div>
      </div>
    </footer>
  )
}

export default Footer