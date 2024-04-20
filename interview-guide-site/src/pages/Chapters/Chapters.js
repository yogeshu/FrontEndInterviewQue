import React from 'react';
import styles from './Chapters.module.css';
import { Link } from 'react-router-dom';

const chaptersList = [
  {
    id: 1,
    title: 'HTML Essentials',
    description: 'Learn the basics of HTML and best practices for structure.',
  },
  {
    id: 2,
    title: 'Advanced CSS',
    description: 'Dive into advanced CSS topics like Flexbox, Grid, and animations.',
  },
  {
    id: 3,
    title: 'JavaScript Fundamentals',
    description: 'Understand core JavaScript concepts and patterns.',
  },
  {
    id: 4,
    title: 'React from Scratch',
    description: 'Build powerful UIs with React and explore its ecosystem.',
  },
  {
    id: 5,
    title: 'State Management',
    description: 'Learn about state management in React using Context API and Redux.',
  },
];

const Chapters = () => {
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>Explore Our Chapters</h1>
        <div className={styles.chaptersGrid}>
          {chaptersList.map((chapter) => (
            <div key={chapter.id} className={styles.chapterCard}>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{chapter.title}</h2>
                <p className={styles.cardDescription}>{chapter.description}</p>
              </div>
              <Link
                to={`/chapters/${chapter.id}`}
                className={styles.learnMore}
                aria-label={`Learn more about ${chapter.title}`}
              >
                <span className={styles.learnMoreText}>Learn More</span>
                <span className={styles.learnMoreIcon}>&#8594;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Chapters;