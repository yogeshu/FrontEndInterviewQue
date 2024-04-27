import React from 'react';
import styles from './Chapters.module.css';
import { Link } from 'react-router-dom';

const chaptersList = [
  {
    id: 1,
    title: 'HTML Essentials',
    description: 'Learn the basics of HTML and best practices for structure.'
  },
  {
    id: 2,
    title: 'Advanced CSS',
    description: 'Dive into advanced CSS topics like Flexbox, Grid, and animations.'
  },
  {
    id: 3,
    title: 'JavaScript Fundamentals',
    description: 'Understand core JavaScript concepts and patterns.'
  },
  {
    id: 4,
    title: 'React from Scratch',
    description: 'Build powerful UIs with React and explore its ecosystem.'
  },
  {
    id: 5,
    title: 'State Management',
    description: 'Learn about state management in React using Context API and Redux.'
  },
  {
    id: 6,
    title: 'TypeScript Basics',
    description: 'Integrate TypeScript for static typing in JavaScript applications.'
  },
  {
    id: 7,
    title: 'Building APIs with Node.js',
    description: 'Create backend services and APIs using Node.js.'
  },
  {
    id: 8,
    title: 'Testing in JavaScript',
    description: 'Learn testing frameworks and strategies for JavaScript and React.'
  },
  {
    id: 9,
    title: 'Modern Tooling',
    description: 'Explore modern development tools like Webpack, Babel, and ESLint.'
  },
  {
    id: 10,
    title: 'Progressive Web Apps',
    description: 'Develop Progressive Web Apps (PWAs) for offline capable, high-performance experiences.'
  },
  {
    id: 11,
    title: 'Web Security Essentials',
    description: 'Understand common security threats and how to secure web applications.'
  },
  {
    id: 12,
    title: 'Advanced React Patterns',
    description: 'Delve deeper into React with hooks, higher-order components, and more.'
  },
  {
    id: 13,
    title: 'Server-Side Rendering with Next.js',
    description: 'Learn about SEO-friendly and performance-optimized applications using Next.js.'
  },
  {
    id: 14,
    title: 'GraphQL and Apollo',
    description: 'Implement GraphQL in your projects to manage data more effectively.'
  },
  {
    id: 15,
    title: 'Mobile Development with React Native',
    description: 'Extend your React skills to build native mobile apps for iOS and Android.'
  }
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