import React from 'react';
import Slider from 'react-slick';
import styles from './Home.module.css';

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className={styles.home}>
            <Slider {...settings}>
                <div>
                    <img src="/images/slide1.jpg" alt="Slide 1" className={styles.slide}/>
                </div>
                <div>
                    <img src="/images/slide2.jpg" alt="Slide 2" className={styles.slide}/>
                </div>
                <div>
                    <img src="/images/slide3.jpg" alt="Slide 3" className={styles.slide}/>
                </div>
            </Slider>
            <div className={styles.fadeInUp}>
            <h1>Welcome to the Frontend Interview Prep Guide!</h1>
            <p>This guide is designed to help you master frontend development skills and prepare for job interviews with confidence.</p>
            <button className={styles.ctaButton}>Get Started</button>
            </div>  
        </div>
    );
};

export default Home;
