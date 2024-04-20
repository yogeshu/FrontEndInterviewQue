import React from 'react';
import styles from './Home.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import aboutImage from 'assets/image/about.webp';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <h1 className={styles.heading}>Welcome to the Frontend Interview Prep Guide!</h1>
        <p className={styles.subheading}>Master frontend development skills and prepare for job interviews with confidence.</p>
        <button className={styles.ctaButton}>Get Started</button>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionHeading}>About Us</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutImageContainer}>
            <img src={aboutImage} alt="Our Team" className={styles.aboutImage} />
          </div>
          <div className={styles.aboutDescription}>
            <p>We are a team of dedicated developers and educators passionate about helping individuals excel in their frontend development careers. Founded in 2021, our mission is to provide top-notch resources and coaching to aspirants across the globe.</p>
            <p>Our content is crafted by industry experts with years of experience in both teaching and software development. Whether you are beginning your journey or looking to refine your skills, our guide is tailored to help you succeed at every step of your interview process.</p>
          </div>
        </div>
      </div>

      <div className={`${styles.section} ${styles.featuresSection}`}>
        <h2 className={styles.sectionHeading}>Our Services</h2>
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <h3 className={styles.featureHeading}>Interview Coaching</h3>
            <p className={styles.featureDescription}>Personalized coaching sessions to help you excel in interviews.</p>
          </div>
          <div className={styles.featureItem}>
            <h3 className={styles.featureHeading}>Resume Reviews</h3>
            <p className={styles.featureDescription}>Expert advice to craft a resume that stands out.</p>
          </div>
          <div className={styles.featureItem}>
            <h3 className={styles.featureHeading}>Code Challenges</h3>
            <p className={styles.featureDescription}>Practice with real-world problems to sharpen your coding skills.</p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionHeading}>Testimonials</h2>
        <div className={styles.testimonialsSlider}>
          <Slider {...settings}>
            <div className={styles.testimonialItem}>
              <p className={styles.testimonialText}>"This guide helped me land my dream job!"</p>
              <p className={styles.testimonialAuthor}>- Jane Doe</p>
            </div>
            <div className={styles.testimonialItem}>
              <p className={styles.testimonialText}>"The best resource for preparing technical interviews."</p>
              <p className={styles.testimonialAuthor}>- John Smith</p>
            </div>
            <div className={styles.testimonialItem}>
              <p className={styles.testimonialText}>"Highly recommend to anyone in tech!"</p>
              <p className={styles.testimonialAuthor}>- Emily White</p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;