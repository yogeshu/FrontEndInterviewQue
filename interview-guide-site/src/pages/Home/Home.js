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

  const features = [
    {
      heading: 'Interview Coaching',
      description: 'Personalized coaching sessions to help you excel in interviews.',
    },
    {
      heading: 'Resume Reviews',
      description: 'Expert advice to craft a resume that stands out.',
    },
    {
      heading: 'Code Challenges',
      description: 'Practice with real-world problems to sharpen your coding skills.',
    },
  ];

  const testimonials = [
    {
      text: 'This guide helped me land my dream job!',
      author: 'Jane Doe',
    },
    {
      text: 'The best resource for preparing technical interviews.',
      author: 'John Smith',
    },
    {
      text: 'Highly recommend to anyone in tech!',
      author: 'Emily White',
    },
  ];

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1 className={styles.heading}>Welcome to the Frontend Interview Prep Guide!</h1>
        <p className={styles.subheading}>Master frontend development skills and prepare for job interviews with confidence.</p>
        <button className={styles.ctaButton}>Get Started</button>
      </section>

      <section className={styles.section}>
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
      </section>

      <section className={`${styles.section} ${styles.featuresSection}`}>
        <h2 className={styles.sectionHeading}>Our Services</h2>
        <div className={styles.features}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <h3 className={styles.featureHeading}>{feature.heading}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Testimonials</h2>
        <div className={styles.testimonialsSlider}>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialItem}>
                <p className={styles.testimonialText}>{testimonial.text}</p>
                <p className={styles.testimonialAuthor}>- {testimonial.author}</p>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Home;