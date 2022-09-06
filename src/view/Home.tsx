import React from 'react';
import styles from '../assets/Home.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";



import sliderimg1 from '../assets/img/sliderimg1.svg';
import sliderimg2 from '../assets/img/sliderimg2.svg';

import prev from '../assets/img/sliderprev.svg';
import next from '../assets/img/slidernext.svg';

import ils1 from '../assets/img/i1.svg';
import ils2 from '../assets/img/i2.svg';
import ils3 from '../assets/img/i3.svg';
import ils4 from '../assets/img/i4.svg';

import bottomimg from '../assets/img/bottomimg.svg';

const Home = () => {
  return (
    <main className={styles.main}>
      <section className={styles.sliderCover}>
      <Swiper
        modules={[Navigation, Pagination, A11y, EffectFade]}
        effect={"fade"}
        fadeEffect={{
          crossFade: true,
        }}
        speed={800}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
      >
      <SwiperSlide>
        <div className={styles.slideritem}>
            <div className={styles.textCover}>
              <h1 className={styles.sliderHeader}>What's new &#10024;</h1>
              <p className={styles.sliderText}>Consectetur adipiscing elit duis <br/> tristique sollicitudin nibh sit amet.</p>
            </div>
          <div>
            <img className={styles.sliderimg} src={sliderimg1} alt="Slider image" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.slideritem}>
            <div className={styles.textCover}>
              <h1 className={styles.sliderHeader}>Welcome to Discover <br/> &#127758;</h1>
              <p className={styles.sliderText}>Consectetur adipiscing elit duis <br/> tristique sollicitudin nibh sit amet.</p>
            </div>
          <div>
            <img className={styles.sliderimg} src={sliderimg2} alt="Slider image" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.slideritem}>
            <div className={styles.textCover}>
              <h1 className={styles.sliderHeader}>What's new &#10024;</h1>
              <p className={styles.sliderText}>Consectetur adipiscing elit duis <br/> tristique sollicitudin nibh sit amet.</p>
            </div>
          <div>
            <img className={styles.sliderimg} src={sliderimg1} alt="Slider image" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.slideritem}>
            <div className={styles.textCover}>
              <h1 className={styles.sliderHeader}>Welcome to Discover <br/> &#127758;</h1>
              <p className={styles.sliderText}>Consectetur adipiscing elit duis <br/> tristique sollicitudin nibh sit amet.</p>
            </div>
          <div>
            <img className={styles.sliderimg} src={sliderimg2} alt="Slider image" />
          </div>
        </div>
      </SwiperSlide>
      </Swiper>
      <div className={styles.swiperButtonCover}>
        <div className="swiper-button-prev">
          <img src={prev}/>
        </div>
        <div className="swiper-button-next">
          <img src={next}/>
        </div>
      </div>
      </section>
      <section className={styles.swiperPeginationCover}>
        <div className="swiper-pagination"></div>
      </section>
      <section className={styles.mindSection}>
        <div className={styles.mindText}>
          <h1>What's on your mind?</h1>
          <p>Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue.</p>
        </div>
      </section>
      <section className={styles.mindBottom}>
        <div className={styles.mindBottomItem}>
          <img src={ils1}/>
          <div className={styles.mindbottomText}>
            <h1>Consectetur Adipiscing</h1>
            <p>In a laoreet purus. Integer turpis quam, laoreet id orci nec.</p>
          </div>
        </div>
        <div className={styles.mindBottomItem}>
          <img src={ils2}/>
          <div className={styles.mindbottomText}>
            <h1>Suspendisse Bibendum</h1>
            <p>Ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget.</p>
          </div>
        </div>
        <div className={styles.mindBottomItem}>
          <img src={ils3}/>
          <div className={styles.mindbottomText}>
            <h1>Efficitur Scelerisque</h1>
            <p>Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. </p>
          </div>
        </div>
        <div className={styles.mindBottomItem}>
          <img src={ils4}/>
          <div className={styles.mindbottomText}>
            <h1>Fringilla Mauris</h1>
            <p>Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam.</p>
          </div>
        </div>
      </section>
      <section className={styles.bottomSection}>
        <div className={styles.bottomSectionImg}>
          <img src={bottomimg}/>
        </div>
        <div className={styles.bottomSectionText}>
          <p>Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo. Vestibulum sit amet ipsum vitae mauris mattis vulputate lacinia nec neque. Aenean quis consectetur nisi, ac interdum elit. </p>
          <ul>
            <li> <p>Consequat voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit.</p> </li>
            <li> <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> </li>
            <li> <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p> </li>
          </ul>
          <button>Lorem Ipsum</button>
        </div>
      </section>
    </main>
  )
}

export default Home