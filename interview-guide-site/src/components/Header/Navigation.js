import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>

        <button
          onClick={toggleMenu}
          className={`${styles.menuButton} ${isOpen ? styles.active : ''}`}
          aria-label="Toggle Navigation"
        >
          {isOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
        </button>
        <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          <Link
            to="/"
            className={styles.navLink}
            onClick={toggleMenu}
            aria-label="Home"
          >
            <i className="fas fa-home"></i>
            <span className={styles.linkText}>Home</span>
          </Link>
          <Link
            to="/chapters"
            className={styles.navLink}
            onClick={toggleMenu}
            aria-label="Chapters"
          >
            <i className="fas fa-book-open"></i>
            <span className={styles.linkText}>Chapters</span>
          </Link>
          <Link
            to="/exercises"
            className={styles.navLink}
            onClick={toggleMenu}
            aria-label="Exercises"
          >
            <i className="fas fa-code"></i>
            <span className={styles.linkText}>Exercises</span>
          </Link>
          <Link
            to="/projects"
            className={styles.navLink}
            onClick={toggleMenu}
            aria-label="Projects"
          >
            <i class="fas fa-project-diagram"></i>            <span className={styles.linkText}>Projects</span>
          </Link>
          <Link
            to="/contributions"
            className={styles.navLink}
            onClick={toggleMenu}
            aria-label="Contributions"
          >
            <i className="fas fa-users"></i>
            <span className={styles.linkText}>Contributions</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;